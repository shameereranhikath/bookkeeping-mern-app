import User from '../models/User.js'
import {hashPassword,isPasswordMatch} from '../utils/hashDecryptPassword.js'





export const getUsers=(req,res)=>{
    res.send("All Users are Listed")

}

// function for creating User
export const createUser=async (req,res)=>
 {   
    let data=req.body
    const {email}=req.body
    // const userExist=await User.findOne({email});
    // if(userExist)
    // {
        const password=await hashPassword(data.password)
        data={...data,password}
        try
        {
           const user=await User.create(data)
           res.json(user)
        }
        catch(error)
        {
            res.status(401).json(error.message);
        }
    // }
    // else
    // {
    //     res.json("User Already Exist")
    // }
    
}


// function for Updating User
export const updateUser=async(req,res)=>{
    const _id=req.params.id
    let uuser=req.body
    const password=await hashPassword(uuser.password)
    uuser={...uuser,password}
    const userExist=User.findById(req.params.id)
    if (userExist)
    {
    try
    {
        const updatedUser=await User.findByIdAndUpdate(
            req.params.id,
            {...uuser,_id},{
                new:true,
                runValidators:true
            }
        );
            res.json(updatedUser)
    }
    catch(error)
    {
        return res.json(error.message)
    }
   

    }
    else
    {
        res.status(404).json("User does not Exist")
    }

}
// function for Login User
export const checkUser=async (req,res)=>
{    const {email,password}=req.body
    const userExist=await User.findOne({email})
    if(userExist && await isPasswordMatch(password,userExist.password))
    {
         return res.json(userExist)
    }
    else
    {

        return res.status(401).json("User Not Found!!!! or Invalid Username or Password")

    }

}


// function for delete User
export const deleteUser=async(req,res)=>{
    
}

//function for login



