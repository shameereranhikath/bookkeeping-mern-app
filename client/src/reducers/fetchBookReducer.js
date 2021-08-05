const initialState={books:[],loading:false,error:null}
const fetchBookReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_BOOK_REQUEST':
            return{
                    ...state,loading:true
            } 
        case 'FETCH_BOOK_SUCCESS':
            return{
                    ...state,books:action.payload
            } 
        case 'FETCH_BOOK_FAIL':
            return {
                ...state,error:action.payload
                
            }
        default:
            return state
    }

}



export default fetchBookReducer;