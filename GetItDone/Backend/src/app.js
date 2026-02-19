import dotenv from 'dotenv'
import express from 'express'
import { ConnectDb } from './config/databaseConnection.js'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import authMiddleware from './middlewares/authMiddleware.js'
import cookieParser from 'cookie-parser'
const app = express()
dotenv.config()
const PORT = process.env.PORT
ConnectDb()
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',authRoutes)
app.use('/user',authMiddleware,userRoutes)
app.get('/',(req,res)=>{
   try{
    res.status(200).json({
        status:"sucess",
        data:[],
        message:"welcome home"
    })
   }
   catch(error){
    res.status(500).json({
        status:"error message",
        message:error.message
    })
   }
})

app.listen(PORT,()=>{
    console.log(`server stated on port ${PORT}`);
})