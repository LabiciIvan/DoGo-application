import React from 'react';
import { Outlet } from 'react-router-dom';

// Components imports.
import NavBar from '../components/NavBar';

const Admin = () => {
	return ( 
		<div className="admin-layout">
			<NavBar/>
			<Outlet/>
		</div>
	 );
}
 
export {Admin as AdminLayout};