import React, { useState } from 'react';

// Styles import
import './css/text-slider.css'

const TextSlider = ({content}) => {

	const [text, setText] = useState(content);

	const displayText = () => {
		return text.map(review => 
			<h5 key={review.id} className='slider-imported-content'>{review.content}</h5>
		);
	}

	return (
		<div className="text-slider">
			<div className="slider-map"></div>
			<div className="slider-content">{displayText()}</div>
			<i className="bi bi-arrow-right"></i>
			<i className="bi bi-arrow-left"></i>
		</div>
	);
}

export default TextSlider;