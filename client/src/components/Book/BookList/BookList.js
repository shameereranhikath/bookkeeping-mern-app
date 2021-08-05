import React,{useEffect} from 'react'

import {useDispatch,useSelector} from 'react-redux'
import {getBooks} from '../../../actions/bookAction'

function BookList() {

    const dispatch = useDispatch()
    const booksList=useSelector(store=>store.fetchedBooks)
        useEffect(() => {
           dispatch(getBooks())
        }, [])

    return (
        <div>
        <div className='row'>
          <div className='col'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th scope='col'>Author</th>
                  <th scope='col'>Book Name</th>
                  <th scope='col'>Action</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Map through here */}
               {  booksList.books.map((data,index)=>{
                   return (
                <tr className='table-dark'>
                  <th scope='row'>{data.author}</th>
                  <td>{data.title}</td>
                  <td>
                    <i
                      className='fas fa-trash '
                      style={{ color: 'red', cursor: 'progress' }}></i>
                  </td>
                  <td>
                    <i
                      className='far fa-edit'
                      style={{
                        color: 'yellow',
                        cursor: 'progress',
                      }}></i>
                  </td>
                </tr>
               )})}
                {/* End of map through */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
        // '----------------------------------------------'
       
    )
}

export default BookList
