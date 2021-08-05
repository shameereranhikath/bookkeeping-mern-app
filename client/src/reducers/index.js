import {combineReducers} from 'redux'
import createBookReducer from './createBookReducer'
import fetchBookReducer from './fetchBookReducer';
import registerUserReducer from './userReducer/registerUserReducer'


const allReducers=combineReducers({
    createBook:createBookReducer,
    fetchedBooks:fetchBookReducer,
    registeredUser:registerUserReducer

})



export default allReducers;