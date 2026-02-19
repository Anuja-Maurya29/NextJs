import express from 'express'
import authController from '../controllers/authController.js'
import { signUpValidator,loginValidator } from '../validators/authValidator.js'
import validate from '../validators/validate.js'
const authRoutes = express.Router()


authRoutes.post('/signUp',signUpValidator,validate,authController.signUp)
authRoutes.post('/login',loginValidator,validate,authController.login)

export default authRoutes