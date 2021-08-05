import React from 'react'

function Login() {
    return (
        <div className='row container-height'>
        <div className='col-lg-6 col-md-6 m-auto'>
          <div className='container'>
            <form>
              <fieldset>
                <div className='form-group'>
                  <label htmlFor='exampleInputEmail1'>Email address</label>
                  <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputPassword1'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    id='exampleInputPassword1'
                    placeholder='Password'
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
