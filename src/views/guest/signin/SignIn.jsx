import React, { useState } from 'react';
import './signin.css';

const SignIn = () => {

	const [email, setEmail]			= useState(null);
	const [password, setPassword]	= useState(null);

	const handleSubmit = (e) => {

		// Prevent the default behaviour of submit button.
		e.preventDefault();

		// Reset the input fields with empty value.
		e.target.reset();

		// Data in a json object ready to be sent to the backend server.
		const prepareToSendToBackend = {
			e :email,
			p : password
		}
	}

	// Handle email value on change from input.
	const handleEmail = (emailValue) => {
		setEmail(emailValue);
	}

	// Handle password value on change from input.
	const handlePassword = (passwordValue) => {
		setPassword(passwordValue);
	}

	return (
		<div className="sign-in" onSubmit={handleSubmit}>
			<form className="sign-in_form">

				<h4 className='sign-in_title'>Sign in</h4>

				<input type="email" className='sign-in_input' placeholder='Email address' onChange={e => handleEmail(e.target.value)}/>

				<input type="password" className='sign-in_input' placeholder='Password' onChange={e => handlePassword(e.target.value)}/>

				<button className="sign-in_button" type="submit">Sign in</button>
			</form>
		</div>
	);
}

export default SignIn;