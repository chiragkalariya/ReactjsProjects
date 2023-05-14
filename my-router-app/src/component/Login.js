import React from 'react'

const Login = () => {
  return (
    <div>
      <h2>Login page</h2>
      <input type="text" style={{width: "50%", marginInline: "auto"}} className='form-control' /><br />
      <input type="text" style={{width: "50%", marginInline: "auto"}} className='form-control' /><br />
      <button className='btn btn-primary'>Login</button>
    </div>
  )
}

export default Login
