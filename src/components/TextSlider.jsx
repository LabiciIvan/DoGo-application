import React, { useState } from 'react';

// Styles import
import './css/text-slider.css'

const TextSlider = ({content}) => {

	const [text, setText] = useState(content);

	const [start, setStart] = useState(0);
	
	const displayText = () => {
		return text.map(review => 
			<h5 key={review.id} className={`slider-imported-content _${review.id}`}>{review.content}</h5>
		);
	}

	const displayMap = () => {
		return text.map(review => 
			<div key={review.id} className={`slider-imported-map _${review.id}`}></div>
		);
	}

	// Right uses boolean true.
	const swipeRight = () => {
		// Swiping to right
		let element = getElement(start, true);
	}

	// Left uses boolean false.
	const swipeLeft = () => {
		// Swiping to left
		let element = getElement(start, false);
	}

	// direction parameter is true = right || false = left.
	const getElement = (id, direction) => {
		if (direction) {
			// Direction is to the right.
			id = (id < content.length) ? id : 0;

			if (id < content.length) {
				setStart(prev => prev + 1);
			}
			else
			{
				setStart(0);
			}
		}
		else if (!direction)
		{	// Direction is to the left.
			id = (id > -1) ? id : content.length - 1;

			if (id !== 0) {
				setStart(prev => prev - 1);
			}
			else 
			{
				setStart(content.length - 1);
			}
		}

		let elementHTML = document.querySelector(`.slider-imported-content._${id}`);

		return elementHTML;
	}

	return (
		<div className="text-slider">
			<div className="slider-map">
				{displayMap()}
			</div>
			<div className="slider-content">
				{displayText()}
			</div>
			<i className="bi bi-arrow-right" onClick={swipeRight}></i>
			<i className="bi bi-arrow-left" onClick={swipeLeft}></i>
		</div>
	);
}

export default TextSlider;