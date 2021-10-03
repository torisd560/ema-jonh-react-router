import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'


const Header = () => {
    return (
        <div>
            <div className='img-container'>
                <img src={logo} alt="" />
            </div>
            <nav className='navbar'>
                <ul>
                    <NavLink to ="/Shop"> Shop</NavLink>
                    <NavLink to ="/review"> Order Review</NavLink>
                    <NavLink to="/inventory">Manage Inventory here</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;