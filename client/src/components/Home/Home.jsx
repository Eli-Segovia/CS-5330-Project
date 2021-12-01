import React from 'react';
import '../../styles/sass/Home.scss';
import Logo from '../../assets/PaperKing_logos/PaperKing-logos_white.png';

function Home() {
    return (
        <div className='Home bg-primary vh-100'>
            <div className='Home-Container d-flex flex-column justify-content-center align-items-center'>
                <img className='Home-Logo' src={Logo} alt='PaperKing logo' />
                <div className='Home-Btn-Container d-flex flex-column w-75'>
                    <button className='btn bg-white btn-block m-2'>
                        Button 1
                    </button>
                    <button className='btn bg-white btn-block m-2'>
                        Button 2
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
