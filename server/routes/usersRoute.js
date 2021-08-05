import express from 'express';
import {getUsers,createUser,updateUser,checkUser} from '../controllers/usersController.js'

const usersRoute=express.Router();



usersRoute.get('/',getUsers);
usersRoute.post('/register',createUser);
usersRoute.patch('/update/:id',updateUser);
usersRoute.post('/login',checkUser)
// usersRoute.delete('/delete',deleteUser);






export default usersRoute;