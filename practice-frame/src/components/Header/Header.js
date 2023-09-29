import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
           
           <Link to='/about'>About</Link>
           <Link to = '/'>Home</Link>
           <Link to = '/product'>Product</Link>
        </div>
        
    );
};

export default Header;