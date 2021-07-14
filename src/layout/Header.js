import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component{
    handleLogout = () => {
        localStorage.clear();

    }
    render(){
        return(
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <div className="container">
                    <Link className="small" to={'/home'}>Home</Link>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link className="nav-link" to={'/'}>Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to={'/logout'} onClick={this.handleLogout}>LogOut</Link>
                        </li>
                    </ul>
                </div>
            </nav>


        );
    }

}

export default Header;