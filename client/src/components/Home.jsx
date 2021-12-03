import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/PaperKing_logos/PaperKing-logos_white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Home() {
    return (
        <div className='Home bg-primary vh-100 w-100'>
            <div className='Home-Container d-flex flex-column justify-content-center align-items-center h-100'>
                <img
                    className='Home-Logo h-75'
                    src={Logo}
                    alt='PaperKing logo'
                />
                <div className='Home-Btn-Container d-flex flex-column w-50 h-25'>
                    <Link
                        to='/searchPapers'
                        className='RouteLink btn bg-white btn-block m-2'
                    >
                        <FontAwesomeIcon icon='search' /> Search
                    </Link>
                    <Link
                        to='/addPapers'
                        className='RouteLink btn bg-white btn-block m-2'
                    >
                        <FontAwesomeIcon icon='book-medical' /> Add Papers
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
