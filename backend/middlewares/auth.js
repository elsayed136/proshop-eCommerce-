import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

export const requireAuth = asyncHandler(async (req, res, next) => {
  let token

  if (!req.headers.authorization) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }

  if (!req.headers.authorization.startsWith('Bearer')) {
    res.status(401)
    throw new Error("Not authorized, token doesn't start with Bearer")
  }

  try {
    token = req.headers.authorization.split(' ')[1]

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(decoded._id).select('-password')

    next()
  } catch (error) {
    console.error(error)
    res.status(401)
    throw new Error('Not authorized, token failed')
  }
})
