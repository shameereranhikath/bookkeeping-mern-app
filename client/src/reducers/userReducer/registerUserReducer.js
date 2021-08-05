const initialState={user:[],loading:true,error:null}

const registerUserReducer=(state=initialState,action)=>
{
 switch(action.type)
 {
    case 'USER_REGISTER_REQUEST':
       return {
           ...state,loading:true
       }
    case 'USER_REGISTER_SUCCESS':
        return {
            ...state,user:action.payload,loading:false
        }
    case 'USER_REGISTER_FAIL':
        return {
            ...state,error:action.payload
        }
    default:
        return state;


 }
}


export default registerUserReducer;