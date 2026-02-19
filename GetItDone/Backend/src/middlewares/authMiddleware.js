import jwt from 'jsonwebtoken'
import userModel from '../models/user.js'

const authMiddleware = async(req,res,next)=>{

  try{
      const token = req.cookies.token

      if(!token){
        return res.status(400).json({
            success:false,
            message:"Unauthorized user"
        })
      }

      const result = jwt.verify(token,process.env.SECRET_KEY)
      console.log(result.id,"id");
      const {id} = result
      const findUser = await userModel.findById(id)
   
      if(!findUser){
       throw new error("user not found")
      }
      res.user=findUser
      next()
  }
  catch(error){
    res.status(400).json({
        success:false,
        message:error.message
    })
  }


}

export default authMiddleware