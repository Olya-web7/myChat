import { Avatar, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Chat.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {};

  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/croodles/${seed}.svg`}/>
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton><SearchOutlinedIcon /></IconButton>
          <IconButton><AttachFileIcon /></IconButton>
          <IconButton><MoreVertIcon /></IconButton>
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