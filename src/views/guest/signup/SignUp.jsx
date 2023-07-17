import React, { useState } from 'react';
import './signup.css';

const SignUp = () => {

	const [name, setName] =							useState(null);
	const [email, setEmail] =						useState(null);
	const [password, setPassword] =					useState(null);
	const [passwordConfirm, setPasswordConfirm] =	useState(null);

const handleSubmit = (e) => {

	// Prevent default behaviour of button.
	e.preventDefault();

	// Data in a json object ready to be sent to the backend server.
	const dataToBeSentToBackend = {
		n	: name,
		e	: email,
		p	: password,
		pc	: passwordConfirm,
	}
}

	// Handle name value on change from input element.
	const handleName = (nameValue) => {
		setName(nameValue);
	}

	// Handle email value on change from input element.
	const handleEmail = (emailValue) => {
		setEmail(emailValue);
	}

	// Handle password value on change from input element.
	const handlePassword = (passwordValue) => {
		setPassword(passwordValue);
	}

	// Handle password confirm value on change from input element.
	const handlePasswordConfirm = (passwordConfirmValue) => {
		setPasswordConfirm(passwordConfirmValue);
	}

	return ( 
		<div className="sign-up">
			<form className='sign-up_form' onSubmit={handleSubmit}>

				<h4 className='sign-up_title'>Sign up</h4>

				<input className='sign-up_input n' type="text" placeholder='Name' onChange={e => handleName(e.target.value)}/>

				<input className='sign-up_input e' type="email" placeholder='Email' onChange={e => handleEmail(e.target.value)}/>

				<input className='sign-up_input p' type="password" placeholder='Password' onChange={e => handlePassword(e.target.value)}/>

				<input className='sign-up_input pc' type="password" placeholder='Password Confirm' onChange={e => handlePasswordConfirm(e.target.value)}/>

				<button className='sign-up_button'>Sign up</button>

			</form>
		</div>
	);
}

export default SignUp;