import jwt from "jsonwebtoken";
import config from "../config/config.js";

export default function authMiddleware(req,res,next) {
    try{
  const authHeader = req.header("Authorization");
  
  console.log("Authorization Header:",authHeader);
  if(!authHeader){
    return res.status(401).json({
        message:"No token provided"
    });
  }
  const token = authHeader.split(" ")[1];

  console.log("Token:", token);
  console.log("JWT_SECRET:", process.env.JWT_SECRET);
  const decoded = jwt.verify(token,process.env.JWT_SECRET);

  console.log("Decoded:",decoded);
  req.user = decoded;

  next();

    // }catch(err){
    //   console.log(err.message);
    //  res.status(401).json({
    //     message:"Invalid token"
    //  });
    // }
}catch (error) {
  console.log("JWT ERROR:", error.message);

  return res.status(401).json({
    success: false,
    message: error.message,
  });
}
}