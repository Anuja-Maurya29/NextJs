import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
   title:{
    type:String,
    trim:true,
    required:[true,"title is required"]
   },
   descripttion:{
    type:String,
    required:[true,"Description is required"]
   }
})
const tasks = new mongoose.Schema({

    user:{
        type:type.mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
   tasks:[taskSchema]
},
{
    timestamps:true
}

)

const taskModel = mongoose.model("task",task)
export default taskModel