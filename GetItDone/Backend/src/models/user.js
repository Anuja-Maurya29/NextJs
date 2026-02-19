import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

firstName:{
    type:String,
    required:[true,"First name is required"],
    mainlength:[3,"minimun 3 letters are required"],
    maxlength:[10,"Maximun limit is 11"],
    trim:true
},
lastName:{
    type:String,
    required:[true,"Lirst name is required"],
    mainlength:[3,"minimun 3 letters are required"],
    maxlength:[10,"Maximun limit is 11"],
        trim:true
},
email:{
    type:String,
    require:[true,"Email is required"],
    unique:[true,"Email already exist"],
    trim:true,
    lowercase:true,

},
password:{
    type:String,
    require:[true,"password is required"],
    trim:true
},
age:{
    type:Number,

},


},{
    timestamps:true,
})


const userModel = mongoose.model('user',userSchema)
export default userModel