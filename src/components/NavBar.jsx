import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

// Services imports.
import CheckAndLog  from '../services/CheckAndLog';

// Styles and images imports.
import './css/navbar.css';
import DoGo_profile_picture from '../assets/dogo_profile.png';

const NavBar = () => {

	const [toggleMenu, setToggleMenu] = useState(false);

	const [user, setUser] = useState(null);

	// Set state based on the return of CheckAndLog().
	useEffect(() => {
		const user = CheckAndLog();

		setUser(user);
	},[]);

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
		if (!user) {
			// Display navigation for guest user.
			return guestUser.map(link =>
				<Link className='navigation-link' key={link.url_name} to={link.to}>{link.url_name}</Link>
			);
		}
		else if (user)
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
		if (user) {
			return <div key={1} className='profile-dropDown'>
				<img className='profile-image' src={user !== null && user.image !== null ? user.image : DoGo_profile_picture}/>
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
		if (user !== null && user.isAdmin === true) {
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