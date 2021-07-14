import React, {useState} from 'react'
import  SidebarData  from './sidebarData';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {IconContext} from 'react-icons';




function Navbar() {

    const [Sidebar, setSidebar] = useState(true);
    

    return(
        <>
        
        <IconContext.Provider value={{color: '#fff' }}>
        <div className=''> 
    
            
        </div>
        <nav className={Sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-item'>
            <li className='navbar-toggle'>
          <h4>E-LEARN-SCHOOL</h4>
            </li>
            {SidebarData.map((item, index) => {
                return(
                    <li key= {index} className ={item.cName}>
                        <Link to={item.path}>
                            {item.icon},
                            <span>{item.title}</span>
                        </Link>
                    </li>
                );
            })}
        </ul>
        </nav>
        </IconContext.Provider>
        
        </>
    );

    

    
}

export default Navbar;
