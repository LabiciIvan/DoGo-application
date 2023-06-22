import React from 'react';
import './home.css';

import Dogo_picture from '../../../assets/dogo_picture_one.jpg'

const Home = () => {

    const appName = import.meta.env.VITE_APP_NAME;

    return (
        <React.Fragment>
            <div className="home">
                <div className="home-carousel_section">
                    <img className='carousel_section' src={Dogo_picture} alt="" />
                </div>

                <div className="home-ending_section">
                    <div className="first_section-text"></div>
                </div>
            </div>


            <div className="home-secondary_section">Welcome to {appName}</div>
        </React.Fragment>
     );
}
 
export default Home;