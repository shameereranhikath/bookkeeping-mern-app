import express from 'express';
import cors from 'cors';
import usersRoute from './routes/usersRoute.js';
import booksRoute from './routes/booksRoute.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
// import {env} from '../server/.env'
import path from 'path'
const app=express();
dotenv.config();

// console.log(__dirname);
mongoose.connect(process.env.MONGO_DB_URL,{useUnifiedTopology:true,useCreateIndex:true,useNewUrlParser:true,useFindAndModify:false})
.then(()=>console.log("Databse Connected"))
.catch((error)=>console.log(error));


app.use(cors());
app.use(express.json());
app.use('/api/',usersRoute);
app.use('/api/book/',booksRoute);
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>console.log(`Server is running at http://localhost:${PORT}`));