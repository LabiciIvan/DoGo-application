import React from 'react';
import { Outlet } from 'react-router-dom';

// Components imports.
import NavBar from '../components/NavBar';

const Admin = () => {
	return ( 
		<React.Fragment>
			<NavBar/>
			<Outlet/>
		</React.Fragment>
	 );
}
 
export {Admin as AdminLayout};