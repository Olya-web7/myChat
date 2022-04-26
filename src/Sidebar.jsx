import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import './Sidebar.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';
import db from "./firebase";
import { useStateValue } from './StateProvider';

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    db.collection('rooms').onSnapshot((snapshot) => 
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    );

    // return () => {
    //   unsubscribe();
    // };
  }, [])

  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar src={user?.photoURL}/>
      </div> 

      <div className='sidebar__search'>
        <div className="sidebar__searcContainer">
          <SearchOutlinedIcon />
          <input placeholder='search or start new chat' type='text' />
        </div>
      </div>     

      <div className="sidebar__chats">
        <SidebarChat addNewChat/>
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id}
          name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar