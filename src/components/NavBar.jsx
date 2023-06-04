import React from 'react';
import { Link } from 'react-router-dom';

import './css/navbar.css';

const NavBar = () => {
	return ( 
		<div className="navigation-bar">

			<div className="navigation-bar-content">

				<div className="navigation-link-wrapper">
					<Link className='navigation-link' to={'/'}>Home</Link>
				</div>

				<div className="navigation-link-wrapper">
					<Link className='navigation-link' to={'/about'}>About</Link>
				</div>

				<div className="navigation-link-wrapper">
					<Link className='navigation-link' to={'/authentication/sign-in'}>Sign-in</Link>
				</div>

				<div className="navigation-link-wrapper">
					<Link className='navigation-link' to={'/authentication/sign-up'}>Sign-up</Link>
				</div>

				<div className="navigation-link-wrapper">
					<Link className='navigation-link' to={'/authenticated/account'}>Account</Link>
				</div>

				<div className="navigation-link-wrapper">
					<Link className='navigation-link' to={'/authenticated/signal'}>Signal</Link>
				</div>

				<div className="navigation-link-wrapper">
					<Link className='navigation-link' to={'/authenticated/dashboard'}>Dashboard</Link>
				</div>

				<div className="navigation-link-wrapper">
					<Link className='navigation-link' to={'/admin/dashboard'}>Admin-Dashboard</Link>
				</div>

				<div className="navigation-link-wrapper">
					<Link className='navigation-link' to={'/admin/settings'}>Settings</Link>
				</div>

			</div>

		</div>
	 );
}
 
export default NavBar;