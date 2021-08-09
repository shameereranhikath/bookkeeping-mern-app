import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {loginUser} from '../../../actions/userAction'
import {useDispatch,useSelector} from 'react-redux'

function Login(props) {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch()
  const history=useHistory()
  const logstatus=useSelector((state)=>state.loginUser)
  const {error,loading,userlogin}=logstatus
  console.log(error);
  const onHandleSubmit=(event)=>{
          event.preventDefault()
          const logdata={
            email,password
          }
          dispatch(loginUser(logdata));
          if(error===null)
          {
            history.push('/books')
          }
          

  }
    return (
        <div className='row container-height'>
        <div className='col-lg-6 col-md-6 m-auto'>
          <div className='container'>
            
            
            {
              error!=null?(<div className='alert alert-danger'>Invalid Credentials</div>):null
              
            }
            
            <form onSubmit={onHandleSubmit}>
              <fieldset>
                <div className='form-group'>
                  <label htmlFor='exampleInputEmail1'>Email address</label>
                  <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                    value={email} onChange={(event)=>setEmail(event.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputPassword1'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    id='exampleInputPassword1'
                    placeholder='Password'
                    value={password} onChange={(event)=>setPassword(event.target.value)}
                  />
                </div>
                <button type='submit' className='btn btn-info m-auto'>
                  Login
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Login
