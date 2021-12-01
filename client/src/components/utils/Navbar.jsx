import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary d-flex justify-content-center'>
            <Link className='text-white btn' to='/'>
                <i
                    style={{
                        fontSize: '6rem',
                        lineHeight: 0.5,
                    }}
                    className='iconify icon-paper_king'
                >
                    &#xe800;
                </i>
            </Link>
        </nav>
    );
}

export default Navbar;
