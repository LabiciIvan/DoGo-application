import React from 'react';
import { Outlet } from 'react-router-dom';

// Components import.
import NavBar from '../components/NavBar';

const Authenticated = () => {
	return ( 
		<div className="authenticated-layout">
			<NavBar />
			<Outlet/>
		</div>
	 );
}
 
export {Authenticated as AuthenticatedLayout} ;