
const initialState={userlogin:[],loading:false,error:null}

const loginUserReducer=(state=initialState,action)=>{
 switch(action.type)
 {
     case 'USER_LOGIN_REQUEST':
         return{
             ...state,loading:true
         }
    case 'USER_LOGIN_SUCCESS':
        return{
            ...state,userlogin:action.payload,error:null
        }
    case 'USER_LOGIN_FAIL':
        return{
            ...state,userlogin:[],error:action.payload
        }
    default:
        return{
            state
        }
 }
}


export default loginUserReducer;