import React from 'react';
import '../../styles/sass/Home.scss';
import Logo from '../../assets/PaperKing_logos/PaperKing-logos_white.png';

function Home() {
    return (
        <div className='Home bg-primary vh-100'>
            <div className='Home-Container d-flex flex-column justify-content-center align-items-center'>
                <img className='Home-Logo' src={Logo} alt='PaperKing logo' />
                <h2>Research Papers on Demand</h2>
            </div>
        </div>
    );
}

export default Home;
