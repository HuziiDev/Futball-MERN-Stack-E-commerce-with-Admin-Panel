import { userModel } from "../models/userModel.js";
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken = (id) => {
     return jwt.sign({id}, process.env.JWT_SECRET_KEY)
}

//Route for user login
const loginUser = async (req,res) =>{
    try {
        const {email, password} = req.body;
        if(!validator.isEmail(email)){
          return res.json({success:false,message:"Enter a valid email"})
         }
        
        const user = await userModel.findOne({email});
        if(!user){
            res.json({success:false, message:"User doesn't exist"})

        }

     const isMatch = await bcrypt.compare(password,user.password);

     if(isMatch){
        const token = createToken(user._id)
        res.json({success:true, token})
     }else{
        res.json({success:false, message:"Invalid email or password"});
     }

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}




//Route of user registration
const registerUser = async (req, res) =>{
   try {
    const {name,email,password} = req.body;
    // this checks whether user is unique or not
    const exists = await userModel.findOne({email});
    if(exists){
        return res.json({success:false,message:"User already exists"})
    }
    
    //validate whether email and password are correct in format or not
   if(!validator.isEmail(email)){
    return res.json({success:false,message:"Enter a valid email"})
   }
   if(password.length <8){
    return res.json({success:false,message:"Length of password should be greater than 8"})
   }


   //now hash the password
   const salt = await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hash(password,salt)
    
   //now creating the new user
   const newUser = userModel({
    name,
    email,
    password:hashedPassword
   })
    // saving the user
   const user = await newUser.save()


   //token creation

    const token = createToken(user._id)//(id is generated when the user got created)

    res.json({success:true, token})
   } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
   }
}




//Route of Admin Login
const adminLogin = async (req, res) =>{
  try {
    const {email,password} = req.body;
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign(email+password, process.env.JWT_SECRET_KEY)
      res.json({success:true,token})
    }
    else{
        res.json({success:false,message:"Incorrect admin email or password"})
    }
    
  } catch (error) {
    res.json({success:false, message:error.message})
    
  }
}




export {loginUser,
 registerUser,adminLogin 
}