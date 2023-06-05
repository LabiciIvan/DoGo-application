import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './css/navbar.css';

const NavBar = () => {

	const [menu, setMenu] = useState(false);

	const toggleMenu = () => {
		setMenu(!menu);
	}

	return ( 
		<div className="navigation-bar __nav-bg">
			<div className="main-bar">
				<Link className='navigation-link-wrapper navigation-link __home' to={'/'}>Home</Link>
				<i className="bi bi-list __list --icon" onClick={toggleMenu}></i>
			</div>

			<div className={menu ? 'menu-on __nav-bg' : 'menu-off __nav-bg'}>
				<i className="bi bi-x __close --icon" onClick={toggleMenu}></i>

				<div className="navigation-link-wrapper __user-name">
					<Link className='navigation-link' to={'/authenticated/account'}>Hello user.</Link>
				</div>

				<div className="navigation-link-wrapper __about">
					<Link className='navigation-link' to={'/about'}>About</Link>
				</div>

				<div className="navigation-link-wrapper __sign-in">
					<Link className='navigation-link' to={'/authentication/sign-in'}>Sign-in</Link>
				</div>

				<div className="navigation-link-wrapper __sign-up">
					<Link className='navigation-link' to={'/authentication/sign-up'}>Sign-up</Link>
				</div>

				<div className="navigation-link-wrapper __account">
					<Link className='navigation-link' to={'/authenticated/account'}>Account</Link>
				</div>

				<div className="navigation-link-wrapper __signal">
					<Link className='navigation-link' to={'/authenticated/signal'}>Signal</Link>
				</div>

				<div className="navigation-link-wrapper __dashboard">
					<Link className='navigation-link' to={'/authenticated/dashboard'}>Dashboard</Link>
				</div>

				<div className="navigation-link-wrapper __management">
					<Link className='navigation-link' to={'/admin/dashboard'}>Management</Link>
				</div>

				<div className="navigation-link-wrapper __settings">
					<Link className='navigation-link' to={'/admin/settings'}>Settings</Link>
				</div> 
			</div>
		</div>
	 );
}
 
export default NavBar;