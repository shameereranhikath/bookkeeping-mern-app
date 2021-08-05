import axios from 'axios'



export const createBook=(bookItem)=>async (dispatch,getState)=>{
    //  console.log("Action called for creating the Token")
    dispatch({type:'CREATE_BOOK_REQUEST'})
      const config={
           headers:{
              'Content-Type':'application/json'
          }
      }
    try
    {
      const {data}=await axios.post('http://localhost:5000/api/book/register',bookItem,config)
      // console.log("Created Book"+data)
      dispatch({type:'CREATE_BOOK_SUCCESS',payload:data})
    }
    catch(err)
    {
        dispatch({type:'CREATE_BOOK_FAIL',payload:err.message})


    }

}

export const getBooks=()=>async (dispatch,getState)=>{
        dispatch({type:'FETCH_BOOK_REQUEST'})
    try
    {
      const {data}=await axios.get('http://localhost:5000/api/book/')
        //  console.log(data)
        dispatch({type:'FETCH_BOOK_SUCCESS',payload:data})
    }
    catch(err)
    {
        dispatch({type:'FETCH_BOOK_FAIL',payload:err.message})
    }

}