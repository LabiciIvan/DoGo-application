import React from 'react';
import { Outlet } from 'react-router-dom';

// Components import.
import NavBar from '../components/NavBar.jsx';

const Guest = () => {
	return ( 
		<div className="guest-layout">
			<NavBar />
			<Outlet />
		</div>
	 );
}
 
export { Guest as GuestLayout };