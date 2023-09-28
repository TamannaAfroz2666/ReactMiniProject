import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            {/* <a href="/home"></a>
            <a href="/about"></a> */}
           <Link to='/home'>Home</Link>
           <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;