
const initialState={book:[],loading:false,error:null}
const createBookReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'CREATE_BOOK_REQUEST':
            return{
                    ...state,loading:true
            } 
        case 'CREATE_BOOK_SUCCESS':
            return{
                    ...state,book:action.payload
            } 
        case 'CREATE_BOOK_FAIL':
            return {
                ...state,error:action.payload
                
            }
        default:
            return state
    }

}


export default createBookReducer;