import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
        },
    email:{
        type:String,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    targetrole:{
        type:String
        // required:true
    },
    createdAt :{
        type:Date
    }
});

const userModel = mongoose.model("User",userSchema);

export default userModel;