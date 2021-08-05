import express from 'express'
import {getBook,getBooks,insertBooks,updateBooks,deleteBook} from '../controllers/booksController.js'

const booksRoute=express.Router();


booksRoute.get('/',getBooks)
booksRoute.get('/:id',getBook)
booksRoute.post('/register',insertBooks)
booksRoute.put('/update/:id',updateBooks)
booksRoute.delete('/remove/:id',deleteBook)





export default booksRoute;