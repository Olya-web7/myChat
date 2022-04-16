import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';

function SidebarChat({ addNewChat}) {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      //to do
    }
  };

  return !addNewChat ? (
    <div className='sidebarChat'>
      <Avatar src={`https://avatars.dicebear.com/api/croodles/${seed}.svg`}/>
      <div className="sidebarChat__info">
        <h3>room name</h3>
        <p>last message ...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat}
      className='sidebarChat'>
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat