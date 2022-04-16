import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';

function SidebarChat() {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500));
  }, []);

  return (
    <div className='sidebarChat'>
      <Avatar src={`https://avatars.dicebear.com/api/croodles/${seed}.svg`}/>
      <div className="sidebarChat__info">
        <h2>room name</h2>
        <p>last message ...</p>
      </div>
    </div>
  );
}

export default SidebarChat