// import Login from "../../Frontend/src/components/Login/Login.jsx";
import User from "../Model/User.js";
import bcryptjs from  'bcryptjs';


export const signup=async(req,res)=>{
    try{
      const { name,email,password}=req.body;
      const user=  await User.findOne({email})
      if(user){
        return res.status(400).json({message:"User already exists"})
      }

      const hashPassword= await bcryptjs.hash(password,10)
      const CreatedUser=new User({
        name:name,
        email:email,
        password:hashPassword,
      })
      CreatedUser.save()
      res.status(201).json({message:"User created successfully",
        user:{
           _id:CreatedUser._id,
           name:CreatedUser.name,
           email:CreatedUser.email, 
        }
      })
    }catch(error){
        console.log("Error: "+ error.message)
        res.status(500).json({message:"Internam server error"})
    }
}


export const login=async(req,res)=>{
    try{
     const {email,password}=req.body;
     const user=await User.findOne({email});
     const isMatch=await bcryptjs.compare(password,user.password)
     if(!user || !isMatch){
        return res.status(400).json({mesaage:"Invalid username or password"});
     }else{
        res.status(200).json({message:"Login successful",
            user:{
            _id:user._id,
            name:user.name,
            email:user.email
        }});
     }
    }catch(error){
     console.log("Error :"+error.message)
     res.status(500).json({message:"Ineternal server  error"})
    }

}