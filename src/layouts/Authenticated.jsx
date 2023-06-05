import React from 'react';
import { Outlet } from 'react-router-dom';

// Components import.
import NavBar from '../components/NavBar';

const Authenticated = () => {
	return ( 
		<React.Fragment>
			<NavBar />
			<Outlet/>
		</React.Fragment>
	 );
}
 
export {Authenticated as AuthenticatedLayout} ;