import React from 'react';
import './Sidebar.css';
import { Avatar } from '@mui/material';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar />
      </div> 
      <div className='search'></div>     
      <div className="sidebar__chats"></div>
    </div>
  )
}

export default Sidebar