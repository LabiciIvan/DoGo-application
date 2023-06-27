import React from 'react';

// Components import.
import CarouselImages from '../../../components/CarouselImages';
import TextSlider from '../../../components/TextSlider';

// Styles and Images imports
import './home.css';
import dogo_1 from '../../../assets/dogo_picture_one.jpg';
import dogo_2 from '../../../assets/dogo_picture_two.jpg';
import dogo_3 from '../../../assets/dogo_picture_three.jpg';

// Data imports.
import { dataHome, dataHome2, dataHome3 } from '../../../assets/home-page/data';


const Home = () => {
	 // Application name loaded from .env file.
	const appName = import.meta.env.VITE_APP_NAME;

	// All used images on Home page are placed in an array
	// and passed as props to CarsouselImages component.
	const images = [dogo_1, dogo_2, dogo_3];

	// Data for the first section (1vh) of the home page.
	const firstViewData = () => {
		return dataHome.map(HTMLElement =>
			<h4 className={HTMLElement.class} key={HTMLElement.id} >{HTMLElement.content}</h4>
		);
	}

	return (
		<React.Fragment>
			<div className="home">
				<CarouselImages images={images}/>

				<div className="home-ending_section">
					<div className="filler"></div>
					<div className="first_section-text">
						{firstViewData()}
					</div>
				</div>
			</div>

			<div className="home-secondary_section">
				<div className="secondary-bg-column"></div>
				<div className="secondary-bg">
					<div className="secondary-wrapper_one">
						<div className="wrapper_one-slider">
							<TextSlider content={dataHome3}/>
						</div>
					</div>
					<div className="secondary-wrapper_two">

					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Home;