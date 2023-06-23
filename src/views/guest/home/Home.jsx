import React, { useState } from 'react';


// Styles and Images imports
import './home.css';
import dogo_1 from '../../../assets/dogo_picture_one.jpg';
import dogo_2 from '../../../assets/dogo_picture_two.jpg';
import dogo_3 from '../../../assets/dogo_picture_three.jpg';


const Home = () => {
    // Application name loaded from .env file.
    const appName = import.meta.env.VITE_APP_NAME;

    const [carouselImage, setCarouseImage] = useState(dogo_1);

    // Displaying the images inside the carousel.
    const showCarouselImage = (image_name) => {

        setCarouseImage(image_name);
    }

    return (
        <React.Fragment>
            <div className="home">
                <div className="home-carousel_section">
                    <img className='carousel_section' src={carouselImage} alt="" />

                    <div className="carousel-control">
                        <button onClick={() => showCarouselImage(dogo_1)} className='carousel-btn'></button>
                        <button onClick={() => showCarouselImage(dogo_2)} className='carousel-btn'></button>
                        <button onClick={() => showCarouselImage(dogo_3)} className='carousel-btn'></button>
                    </div>
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