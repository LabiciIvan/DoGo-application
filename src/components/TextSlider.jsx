import React, { useState, useEffect } from 'react';

// Styles import
import './css/text-slider.css'

const TextSlider = ({content}) => {

	// First loading the component make first element visible
	useEffect(() => {
		let firstElement = document.querySelector(`.slider-imported-content._${text[0].id}`);
		
		makeElementVisible(firstElement);
	}, []);

	const [text, setText] = useState(content);

	const [start, setStart] = useState(1);

	const [lastElement, setLastElement] = useState(null);
	
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
		makeElementVisible(element);
	}

	// Left uses boolean false.
	const swipeLeft = () => {
		// Swiping to left
		let element = getElement(start, false);
		makeElementVisible(element);
	}

	// direction parameter is true = right || false = left.
	const getElement = (id, direction) => {
		if (direction) {
			if (id < content.length - 1) {
				setStart(prev => prev + 1);
			} else
			{
				setStart(0);
			}
		}
		else if (!direction)
		{	// Direction is to the left.
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

	// Make element visible and save it in state.
	const makeElementVisible = (element) => {
		if (lastElement !== null) {
			lastElement.style.display = 'none';
		}
		element.style.display = 'grid';
		setLastElement(element);
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