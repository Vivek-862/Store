import Login from "../../Frontend/src/components/Login/Login.jsx";
import User from "../Model/User.js";


export const signup=async(req,res)=>{
    try{
      const { name,email,password}=req.body;
      const user=User.findOne({email})
      if(user){
        return res.status(400).json({message:"User already exists"})
      }
      const CreatedUser=new User({
        name,
        email,
        password
      })
      CreatedUser.save()
      res.status(201).json({message:"User created successfully"})
    }catch(error){
        console.log("Error: "+ error.message)
        res.status(500).json({message:"Internam server error"})
    }
}