import mongoose from 'mongoose'
const BookSchema=new mongoose.Schema(
{
    category:{
        type:String,
        required:[true,'Book Category is required']
    },
    author:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true})
const Book=mongoose.model('Book',BookSchema)
export default Book;