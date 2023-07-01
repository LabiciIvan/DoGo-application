import React, { useState } from 'react';

// Styles import
import './css/text-slider.css'

const TextSlider = ({content}) => {

	const [text, setText]			= useState(content);
	const [contentId, setContentId]	= useState(0);

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
		let previousContent = document.querySelector(`.slider-imported-content._${contentId}`);
		let currentContent	= getContentElement(contentId, true);

		previousContent.style.display	= 'none';
		currentContent.style.display	= 'grid';
	}

	// Left uses boolean false.
	const swipeLeft = () => {
		// Swiping to left
		let previousContent = document.querySelector(`.slider-imported-content._${contentId}`);
		let currentContent	= getContentElement(contentId, false);

		previousContent.style.display = 'none';
		currentContent.style.display = 'grid';
	}

	// direction parameter is true === right || false === left.
	const getContentElement = (id, direction) => {
		switch (direction) {
			case true: // If right element is last from array then start from begining.
				if (id === content.length - 1) {
					setContentId(0);
					id = 0;
				} 
				else
				{
					setContentId(prev => prev + 1);
					id += 1;
				}
				break;
			case false: // If left element is first from array then start from end.
				if (id === 0) {
					setContentId(content.length - 1);
					id = content.length - 1;
				} 
				else
				{
					setContentId(prev => prev - 1);
					id -= 1;
				}
				break;
		}

		let contentHTML = document.querySelector(`.slider-imported-content._${id}`);

		return contentHTML;
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