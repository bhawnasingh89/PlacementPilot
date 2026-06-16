import resumeModel from "../models/resume.model.js";

export const uploadResume = async(req,res) => {
    try{
     console.log(req.file);
     console.log(req.body);
        if(!req.file){
            return res.status(400).json({
                success:false,
                message: "No file uploaded",
            });
        }
        const resume =  await resumeModel.create({
         userId: req.user.id,
         resumeFileName:req.file.filename,
         resumePath:req.file.path,
        });
    
        res.status(201).json({
            success:true,
            message:"Resume uploaded successfully",
            resume,
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
        });
    }
};

export const getResumeStatus = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      userId: req.user.id,
    });

    res.json({
      uploaded: !!resume,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

