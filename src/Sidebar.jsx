import React from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar src='https://avatars.dicebear.com/api/bottts/your-custom-seed.svg'/>
        <div className="sidebar__headerRight">
          <IconButton><DonutLargeIcon /></IconButton>
          <IconButton><ChatIcon /></IconButton>   
          <IconButton><MoreVertIcon /></IconButton>          
        </div>
      </div> 

      <div className='sidebar__search'>
        <div className="sidebar__searcContainer">
          <SearchOutlinedIcon />
          <input placeholder='search or start new chat' type='text' />
        </div>
      </div>     

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar