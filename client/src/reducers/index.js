import {combineReducers} from 'redux'
import createBookReducer from './createBookReducer'
import fetchBookReducer from './fetchBookReducer';
import registerUserReducer from './userReducer/registerUserReducer'
import loginUserReducer from './userReducer/loginUserReducer'


const allReducers=combineReducers({
    createBook:createBookReducer,
    fetchedBooks:fetchBookReducer,
    registeredUser:registerUserReducer,
    loginUser:loginUserReducer

})



export default allReducers;