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
                    <div className="filler"></div>
                    <div className="first_section-text">
                        <h4 className='first_section-header'>Your trusted partner when it comes to Dogs.</h4>
                        <h4 className='_content-one'>Unleash boundless possibilities with DoGo, the leading provider of dog welfare solutions!</h4>
                        <h4 className='_content-two'>Established in the world of dog care in 2023, we've built a reputation for providing services that go above and beyond.</h4>
                        <h4 className='_content-three'>magine a partner who not only seamlessly integrates with your dog-related initiatives and values but consistently delivers life-changing solutions that elevate the well-being of our furry friends.</h4>
                    </div>
                </div>
            </div>

            <div className="home-secondary_section">Welcome to {appName}</div>
        </React.Fragment>
     );
}

export default Home;