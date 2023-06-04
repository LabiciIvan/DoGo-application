import React from 'react';
import './home.css';

const Home = () => {

    const appName = import.meta.env.VITE_APP_NAME;

    return ( 
        <div className="home">Welcome to {appName}</div>
     );
}
 
export default Home;