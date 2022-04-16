import React from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton><DonutLargeIcon /></IconButton>
          <IconButton><ChatIcon /></IconButton>   
          <IconButton><MoreVertIcon /></IconButton>          
        </div>
      </div> 
      <div className='search'></div>     
      <div className="sidebar__chats"></div>
    </div>
  )
}

export default Sidebar