import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './css/navbar.css';
import profile_picture from '../assets/dogo_profile.png';

const NavBar = () => {

	const isLogged = true;

	const [toggleMenu, setToggleMenu] = useState(false);

	const [user, setUser] = useState(
		{
			name: 'John Doe',
			isAdmin: true,
			image: profile_picture
		}
	);

	// Displayed for guests.
	const guestUser = [
		{
			url_name : 'Sign-in',
			to: '/authentication/sign-in',
		},
		{
			url_name : 'Sign-up',
			to: '/authentication/sign-up',
		},
	];

	// Displayed for logged.
	const loggedUser = [
		{
			url_name : 'Dashboard',
			to: '/authenticated/dashboard',
		},
		{
			url_name : 'Signal',
			to: '/authenticated/signal',
		},
	];

	// Displayed for admin.
	const adminUser = [
		{
			url_name : 'Dashboard Admin',
			to: '/admin/dashboard',
		},
		{
			url_name : 'Settings',
			to: '/admin/settings',
		},
	];

	// Decides what users can see.
	const navigationCentralize = () => {
		if (!isLogged) {
			// Display navigation for guest user.
			return guestUser.map(link =>
				<Link className='navigation-link' key={link.url_name} to={link.to}>{link.url_name}</Link>
			);
		}
		else if (isLogged)
		{
			// Display navigation for logged user.
			return loggedUser.map(link => 
				<Link className='navigation-link' key={link.url_name} to={link.to}>{link.url_name}</Link>
			);
		}
	}

	// Logged user profile icon menu.
	const profileIconMenu = () => {
		// This is displayed only if user is logged.
		if (isLogged) {
			return <div key={1} className='profile-dropDown'>
				<img className='profile-image' src={user.image}/>
				<i className="bi bi-caret-down-fill" onClick={toggleDropDownMenu}></i>

				<div className={toggleMenu === true ? 'profile-menu_on' : 'profile-menu_off'}>
					<Link className='navigation-link profile-menu' to={'/authenticated/account'}>Account</Link>
					{showAdminLinks()}
					<Link className='navigation-link profile-menu' to={'/'}>Sign out</Link>
				</div>
			</div>
		}
	}

	// Control the drop down menu by adding true / false.
	const toggleDropDownMenu = () => {
		setToggleMenu(!toggleMenu);
	}

	// Outputs the links for admin.
	const showAdminLinks = () => {
		if (user.isAdmin === true) {
			return adminUser.map(link => 
				<Link className='navigation-link profile-menu' key={link.url_name} to={link.to}>{link.url_name}</Link>
			);
		}
	}

	return ( 
		<div className="NavBar">
		
			<Link className='navigation-link' to={'/'}>Home</Link>

			<Link className='navigation-link' to={'/about'}>About</Link>

			{navigationCentralize()}
			{profileIconMenu()}

		</div>
	 );
}
 
export default NavBar;