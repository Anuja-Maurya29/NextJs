import userModel from "../models/user.js"
import bcrypt from 'bcrypt'
import { generateToken } from "../services/generateToken.js"


const signUp = async(req,res)=>{
    
    
    
    try{
    const {firstName,lastName,email,password}= req.body
    
    //hasing password
    const hashedPassword =  await bcrypt.hash(password,process.env.saltRounds)
    //db code 
    const userInfo= new userModel({
        ...req.body,password:hashedPassword
    })
    const userObj = userInfo.toObject()
 delete userObj.password
    const newUser = await userInfo.save()
    if(newUser){
        return res.status(201).json({
            success:true,
            message:"user created sucessfully",
            data:userObj
        })
    }

}
catch(error){
    return res.status(400).json({
        sucess:"error",
        message:error.message
    })
}



    



}

const login = async(req,res)=>{
 try{
       const {email,password}= req.body

       const userExist = await userModel.findOne({email})
       if(!userExist){
        return res.status(400).json({
            success:false,
            message:"User not found"
        })
       }

       const passwordMatch = bcrypt.compare(email,userExist.email)
       if(!passwordMatch){
        return res.status(400).json({
            success:false,
            message:"Invalid credentials"
        })
       }

       const token = generateToken(userExist._id)

       return res.cookie("token",token,{
        httpOnly:true,
        maxAge:60*60*1000
       })
       .status(200).json({
        sucess:true,
        message:"User logged in sucessfully",

       })

 }
 catch(error){
    return res.status(400).json({
        sucess:false,
        message:error.message
    })
 }


}

export default {signUp,login}