import Book from '../models/Book.js'





export const getBooks=async(req,res)=>{
    try{
        console.log("getbooks called")
        const books=await Book.find(req.body)
        res.json(books);
    }
    catch(err)
    {
        res.json(err.message)
    }
}
export const getBook=async(req,res)=>{
    try{
        const books=await Book.findById(req.params.id)
        res.json(books);
    }
    catch(err)
    {
        res.json(err.message)
    }
}


export const insertBooks=async(req,res)=>{
    try{

        console.log(req.body.title,req.body.author)
        const books=await Book.create(req.body)
        res.json(books);
    }
    catch(err)
    {
        res.json(err.message)
    }
}



export const updateBooks=async(req,res)=>{

    try
    {
        let _id=req.params.id
        let uBookDet=req.body
        console.log(_id)
       const BookExist=await Book.findById(_id)
       console.log(BookExist)
       if (BookExist)
       {
          const updatedBook=await Book.findByIdAndUpdate(req.params.id,uBookDet,
            {
                new:true,
                runValidators:true
            })
          return res.json(updatedBook)
       }

    }
    catch(err)
    {
        res.json(err.message)
    }

}



export const deleteBook=async(req,res)=>{
    try{
        const books=await Book.findByIdAndDelete(req.params.id)
        res.json(books);
    }
    catch(err)
    {
        res.json(err.message)
    }
}
