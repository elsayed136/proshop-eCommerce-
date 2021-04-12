import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import _ from 'lodash'
import bcrypt from 'bcryptjs'

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

// @desc    Register new user
// @route   POST /api/user
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  const { email } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already registered.')
  }

  const user = new User(_.pick(req.body, ['name', 'email', 'password']))
  if (!user) {
    res.status(400)
    throw new Error('Invalid data')
  }
  const salt = await bcrypt.genSalt(10)
  user.password = await bcrypt.hash(user.password, salt)
  await user.save()

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

export { authUser, getUserProfile, registerUser }
