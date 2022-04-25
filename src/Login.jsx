import { Button } from '@mui/material';
import React from 'react';
import './Login.css'

function Login() {

  const signIn = () => {};
  
  return (
    <div className='login'>
      <div className="login__container">
        <img src="" alt="" />
        <div className="login__text">
          <h1>Sign in to MyChat</h1>
        </div>
        <Button onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;