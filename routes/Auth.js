import express from 'express'

import { postLoginController, postRegisterController, postGetUser, postEmailAvailability, postSendEmail, postUpdateProfile, postGetHistory, postAddToHistory, logoutController } from '../controllers/Auth.js'

import { isAuthenticated } from '../middlewares/Auth.js'

const router = express.Router()

router.post('/api/v1/login', postLoginController)

router.post('/api/v1/register', postRegisterController)

router.post('/api/v1/get-user', isAuthenticated, postGetUser)

router.post('/api/v1/check-email-availability', postEmailAvailability)

router.post('/api/v1/send-email', postSendEmail)

router.post('/api/v1/update-profile', postUpdateProfile)

router.post('/api/v1/history', postGetHistory)

router.post('/api/v1/add-to-history', postAddToHistory)

router.get('/api/v1/logout', logoutController)

export default router