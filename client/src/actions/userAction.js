import axios from 'axios'


export const registerUser=userPostData=>async (dispatch)=>
{  
    
    console.log("Register called" );
 dispatch({type:"USER_REGISTER_REQUEST"})
 try
 {
     const config={
          headers:{
             'Content-Type':'application/json'
         }
     }
   const {data}=await axios.post('http://localhost:5000/api/register',userPostData,config)
 
   dispatch({type:"USER_REGISTER_SUCCESS",payload:data})
 }
 catch(err)
 {
     dispatch({type:"USER_REGISTER_FAIL",payload:err.message})

 }

}


export const loginUser=(logData)=>async(dispatch)=>{
    // cons

    console.log(logData);
    dispatch({type:'USER_LOGIN_REQUEST'})
try
{
    const config={
        headers:
        {
            'Content-Type':'application/json'
        }
    }
    const {data}=await axios.post('http://localhost:5000/api/login',logData,config)
    dispatch({type:'USER_LOGIN_SUCCESS',payload:data})

    localStorage.setItem('userAuthData',JSON.stringify(data))

 
}
catch(err)
{
    dispatch({type:'USER_LOGIN_FAIL',payload:err.message})
}

}

