import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase/compat/app';
import './Chat.css';

function Chat() {
  const [input, setInput] = useState('');
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');
  const [{user}, dispatch] = useStateValue();
  const [messages, setMessages] = useState([]);
  const [posts, setPosts] = useState([]);

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

  const sendMessage = (e) => {
    e.preventDefault();
    console.log('you typed >>>>', input);

    db.collection('rooms').doc(roomId).collection('messages').add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

    const fetchPost = async () => {
      const response = await fetch(
        "https://api.chucknorris.io/jokes/random"
      );
      const postData = await response.json();
      setPosts(postData);
    };

  useEffect(() => {
    setTimeout(() => fetchPost(), 10000)
  }, []);

  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>last seen{" "}
            {new Date(
            messages[messages.length - 1]?.timestamp?.toDate()
          ).toUTCString()}</p>
        </div>

      </div>
      <div className="chat__body">
        {messages.map(message => (
          <p 
            className={`chat__message ${
              message.name === user.displayName && 'chat__receiver'}`}>
            { message.name === user.displayName ? posts.value : message.message }            
            <span className="chat__timestamp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>                  
        ))}
      </div>
      <div className="chat__footer">
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)}
            placeholder='Type a messsage' 
            type="text" />
          <button onClick={sendMessage}
            type='submit'>Send a message</button>
        </form>
      </div>
    </div>
  )
}

export default Chat;