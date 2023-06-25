import React, { useState } from 'react';

// Styles import.
import './css/carousel-images.css';

// Destructure the images props to get the 
// images array. Containing each image refference.
const CarouselImages = ({images}) => {

	const [carouselImages, setCarouselImages] = useState(images);

	const [trackIndex, setTrackIndex] = useState(0);

	// Navigate thru each images provided as props.
	const navigateImages = (position) => {

		// Get the state of each tracked image index.
		let index = trackIndex;

		switch (position) {
			// In case of true, move to next image.
			case true:
				if (index < carouselImages.length - 1) {
					++index;
					setTrackIndex(index);
				}
				else // In case next image is the last image, go back to the first one.
				{
					setTrackIndex(0);
				}
				break;
			// In case of false, move to previous image.
			case false:
				if (index > 0) {
					--index;
					setTrackIndex(index);
				} else { // In case the previous image is the first one, go back to the last one.
					setTrackIndex(carouselImages.length - 1);
				}
				break;
		};
	}

	return (
		<div className='carousel_section-hero'>
			<img className='carousel_section' src={carouselImages[trackIndex]} />

			<div className="carousel-control">
				<i className="bi bi-chevron-left carousel-btn" onClick={() => navigateImages(false)}></i>
				<i className="bi bi-chevron-right carousel-btn"onClick={() => navigateImages(true)}></i>
			</div>
		</div>
	 );
}

export default CarouselImages;