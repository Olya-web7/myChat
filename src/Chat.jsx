import { Avatar } from '@mui/material';
import React from 'react';
import './Chat.css';

function Chat() {
  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar />
      </div>
      <div className="body"></div>
      <div className="chat__footer"></div>
    </div>
  )
}

export default Chat;