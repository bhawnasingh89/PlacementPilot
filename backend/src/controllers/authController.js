import userModel from "../models/user.model.js";
import config from "../config/config.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authMiddleware from "../middleware/auth.middleware.js";


//REGISTER

export async function register(req,res) {
    try{
        const{username,email,password} = req.body;

        if(!username || !email || !password){
            return res.status(400).json({
                message:"All fields are required"
            });
        }
        const existingUser = await userModel.findOne({email});

        if(existingUser){
            return res.satus(409).json({
                message:"User already exists"
            });
        }

        const hashedPassword =  await bcrypt.hash(password,10);
        const user = await userModel.create({
            username,
            email,
            password:hashedPassword
        });
        res.status(201).json({
            message:"User registered successfully"
        });
    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
    
}


//LOGIN 

export async function login(req,res) {
    try{

         const{email,password} = req.body;

         const user = await userModel.findOne({email});

         if(!user){
            return res.status(404).json({
                message:"User not found"
            });
         }

         const isMatch = await bcrypt.compare(password, user.password);

         if(!isMatch){
            return res.status(401).json({
                message:"Invalid credentials"
            });
         }

         const token = jwt.sign(
            {id:user._id},
            config.JWT_SECRET,
            {expiresIn:"1d"}
         );
         res.status(200).json({
            message:"Login successful",
            token
         });

    }catch(err){
     res.status(500).json({
    message:"Server error"
 })
    }
    
}