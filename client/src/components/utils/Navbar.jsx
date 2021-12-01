import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/css/icons.css';
function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <Link className='text-white btn' to='/'>
                Hello
            </Link>
        </nav>
    );
}

export default Navbar;
