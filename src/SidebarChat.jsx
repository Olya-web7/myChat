import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import db from './firebase';
import { Link } from 'react-router-dom';

function SidebarChat({ id, name, addNewChat}) {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      db.collection('rooms').add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
    <div className='sidebarChat'>
      <Avatar src={`https://avatars.dicebear.com/
      api/croodles/${seed}.svg`}/>
      <div className="sidebarChat__info">
        <h3>{name}</h3>
        <p>last message ...</p>
      </div>
    </div>
    </Link>
  ) : (
    <div onClick={createChat}
      className='sidebarChat'>
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat