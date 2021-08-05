import mongoose from 'mongoose'
import bcrypt from 'bcrypt'



const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true


    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})

// UserSchema.pre('save',async function(next)
// {
//     const salt=await bcrypt.genSalt(10)
//     this.password=await bcrypt.hash(this.password,salt)
//     next()
// })

// UserSchema.pre('update',async function(next)
// {
//       console.log("middleware called Update")
//       console.log(this.password)
//     const salt=await bcrypt.genSalt(10)
//     const docToUpdate = await this.model.findOne(this.getQuery());
//     docToUpdate.password=await bcrypt.hash(docToUpdate.password,salt)
//     next()
// })

const User=mongoose.model('User',UserSchema)

export default User;

