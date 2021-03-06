import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import db from '../../firebase';
import { Link } from 'react-router-dom';

function SidebarChat({ id, name, addNewChat}) {
  const [messages, setMessages] = useState('');

  useEffect(() => {
    if (id) {
      db.collection('rooms')
        .doc(id)
        .collection('messsages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => 
          setMessages(snapshot.docs.map((doc) => 
          doc.data()))
        );
    }
  }, [id]);

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
      <Avatar />
      <div className="sidebarChat__info">
        <h3>{name}</h3>
        <p>{messages[0]?.message}</p>
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