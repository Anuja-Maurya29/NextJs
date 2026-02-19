import mongoose from "mongoose"
 export const ConnectDb =async()=>{
try{
  
    await mongoose.connect(process.env.DB_URI)
    console.log("databse connected");

}
catch(error){
console.log(error.message);
}

}