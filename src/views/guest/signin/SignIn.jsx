import React, { useRef, useState } from 'react';
import './signin.css';

const SignIn = () => {

	const emailRef		= useRef(null);
	const passwordRef	= useRef(null);

	const [email, setEmail]			= useState(null);
	const [password, setPassword]	= useState(null);

	const handleSubmit = (e) => {
		// Prevent the default behaviour of submit button.
		e.preventDefault();

		// Set input value in state from current reference value.
		setEmail(emailRef.current.value);
		setPassword(passwordRef.current.value);
	}

	return (
		<div className="sign-in" onSubmit={handleSubmit}>
			<form className="sign-in_form">

				<input type="email" className='sign-in_input' ref={emailRef} placeholder='Email address' />

				<input type="password" className='sign-in_input' ref={passwordRef} placeholder='Password'/>

				<button className="sign-in_button" type="submit">Sign in</button>
			</form>
		</div>
	);
}

export default SignIn;