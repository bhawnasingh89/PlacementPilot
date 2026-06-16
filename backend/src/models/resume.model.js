import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    resumeFileName:{
        type:String,
        required:true,
    },
    resumePath:{
        type:String,
        required:true,
    },
    uploadAt:{
        type:Date,
        default:Date.now,
    },
});

const resumeModel = mongoose.model("Resume",resumeSchema);

export default resumeModel;