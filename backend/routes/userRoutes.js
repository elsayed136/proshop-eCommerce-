import express from 'express'
import {
  authUser,
  registerUser,
  getUserProfile,
} from '../controllers/userController.js'
import { requireAuth } from '../middlewares/auth.js'

const router = express.Router()

// POST /api/user/login
router.post('/', registerUser)
router.post('/login', authUser)
router.route('/profile').get(requireAuth, getUserProfile)

export default router
