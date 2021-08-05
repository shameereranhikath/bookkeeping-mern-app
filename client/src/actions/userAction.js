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

