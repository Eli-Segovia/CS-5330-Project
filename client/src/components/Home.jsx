import React from 'react';
import '../styles/sass/Home.scss';
import { Link } from 'react-router-dom';
import Logo from '../assets/PaperKing_logos/PaperKing-logos_white.png';

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
                        className='btn bg-white btn-block m-2'
                    >
                        Search Papers
                    </Link>
                    <Link
                        to='/addPapers'
                        className='btn bg-white btn-block m-2'
                    >
                        Add Papers
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
