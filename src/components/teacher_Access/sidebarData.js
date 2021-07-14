import React from 'react';
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import './Navbar.css'


export const sidebarData = [
  {
    title: 'DASHBOARD',
    path: '/teacher_Access/teacher_dash',
    cName: 'nav-text title'
    
  },
  {
    title: 'Grade',
    path: '/teacher_Access/pages/grade',
    cName: 'nav-text',
    icon: < AiIcons.AiFillHome />
    
  },
  {
    title: 'Notes',
    path: '/teacher_Access/pages/notes',
    icon: < IoIcons.IoIosPaper />,
    cName: 'nav-text'
    
  },
  {
    title: 'Past Papers',
    path: '/teacher_Access/pages/pastpapers',
    icon: < IoIcons.IoMdPeople />,
    cName: 'nav-text'
    
  },
  
  {
    title: 'Messages',
    path: '/',
    name: 'Dashboard',
    icon: < AiIcons.AiFillHome />,
    cName: 'nav-text'
    
  },
  {
    title: 'Calendar',
    path: '/',
    icon: < AiIcons.AiFillHome />,
    cName: 'nav-text'
    
  },
  {
    title: 'Help',
    path: '/',
    icon: < AiIcons.AiFillHome />,
    cName: 'nav-text'
    
  },
  {
    title: 'Settings',
    path: '/',
    icon: < AiIcons.AiFillHome />,
    cName: 'nav-text'
    
  },
  {
    title: 'Logout',
    path: '/',
    icon: < AiIcons.AiFillHome />,
    cName: 'nav-text'
    
  },


];
export default sidebarData;
