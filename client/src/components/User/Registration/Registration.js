import React,{useState} from 'react'
import {registerUser} from '../../../actions/userAction'
import { useDispatch} from 'react-redux'
function Registration() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onHandleRegister=(event)=>{
        
        // event.preventDefault();
        
        const userData={
            name,
            email,
            password
        }

       
        
        dispatch(registerUser(userData))

        alert("User is Successfully Registered")
        // alert("Button Clicked")

    }
    return (
        <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          <h1 className='text-center'>Register</h1>

          <form onSubmit={onHandleRegister}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter Name'
                value={name} onChange={(event)=>setName(event.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail2'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail2'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                  value={email} onChange={(event)=>setEmail(event.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  type='current-password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                  value={password} onChange={(event)=>setPassword(event.target.value)}
                />
              </div>
              <button type='submit' className='btn btn-info m-auto'>
                Register
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    )
}

export default Registration
