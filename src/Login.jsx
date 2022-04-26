import { Button } from '@mui/material';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css'

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(result => console.log(result))
      .catch(error => alert(error.message));
  };

  return (
    <div className='login'>
      <div className="login__container">
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