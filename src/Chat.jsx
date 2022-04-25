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
  const {roomId} = useParams();
  const [roomName, setRoomName] = useState('');

  useEffect(() => {
    if (roomId) {
      db.collection('rooms').doc(roomId).onSnapshot(onSnapshot => (
        setRoomName(onSnapshot.data().name)
      ))
    }
  }, [roomId])


  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log('you typed >>>>', input);
    setInput('');
  };

  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/
        api/croodles/${seed}.svg`}/>
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && 'chat__receiver'}`}>
          <span className="chat__name">Sunny</span>
          {`${'Hey guys'}`}
          <span className="chat__timestamp">21:21</span>
        </p>        
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