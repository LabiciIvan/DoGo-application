import React from 'react';
import { Outlet } from 'react-router-dom';

// Components import.
import NavBar from '../components/NavBar.jsx';

const Guest = () => {
	return ( 
		<React.Fragment>
			<NavBar />
			<Outlet />
		</React.Fragment>
	 );
}
 
export { Guest as GuestLayout };