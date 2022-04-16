import { Avatar } from '@mui/material';
import React from 'react';
import './SidebarChat.css';

function SidebarChat() {
  return (
    <div className='sidebarChat'>
      <Avatar src='https://avatars.dicebear.com/api/croodles/your-custom-seed.svg'/>
      <div className="sidebarChat__info">
        <h2>room name</h2>
        <p>last message ...</p>
      </div>
    </div>
  );
}

export default SidebarChat