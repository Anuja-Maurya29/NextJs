import express from 'express'
import { getAllTasks } from '../controllers/taskControllers.js'
const userRoutes = express.Router()

 userRoutes.get('/tasks',getAllTasks)
 userRoutes.post('/create',)

 export default userRoutes