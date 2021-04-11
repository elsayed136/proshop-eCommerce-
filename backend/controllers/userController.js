import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc    Auth user and Get Token
// @route   POST /api/user/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  const checkPassword = await user?.checkPassword(password)

  if (!user || !checkPassword) {
    res.status(401)
    throw new Error('Invalid email or passord')
  }

  res.json({
    _id: user.id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: user.generateAuthToken(),
  })
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (!user) {
    res.status(404)
    throw new Error('User not found')
  }

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  })
})

export { authUser, getUserProfile }
