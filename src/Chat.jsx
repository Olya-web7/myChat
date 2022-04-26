import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import { useParams } from 'react-router-dom';
import './Chat.css';
import db from './firebase';

function Chat() {
  const [input, setInput] = useState('');
  const [seed, setSeed] = useState('');
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot(onSnapshot => setRoomName
          (onSnapshot.data().name));

      db.collection('rooms')
        .doc(roomId)
        .collection('messages').orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => 
          setMessages(snapshot.docs.map(doc => 
          doc.data()))
        );
    }
  }, [roomId]);


  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log('you typed >>>>', input);
    setInput('');
  };

  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/croodles/${seed}.svg`}/>
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen at...</p>
        </div>

      </div>
      <div className="chat__body">
        {messages.map(message => (
          <p className={`chat__message ${true && 'chat__receiver'}`}>
            {message.message}
            <span className="chat__timestamp">21:21</span>
          </p>        
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)}
            placeholder='Type a messsage' 
            type="text" />
          <button onClick={sendMessage}
            type='submit'>Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat;