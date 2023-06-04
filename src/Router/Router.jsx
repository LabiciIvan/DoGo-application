import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Error view available to all layouts.
import Error from '../views/error/Error.jsx';

// Guest Layouts import and views.
import {GuestLayout} from '../layouts/Guest.jsx';
import Home from '../views/guest/home/Home.jsx';
import About from '../views/guest/about/About.jsx';
import SignIn from '../views/guest/signin/SignIn.jsx';
import SignUp from '../views/guest/signup/SignUp.jsx';

// Authenticated Layouts import and views.
import { AuthenticatedLayout } from '../layouts/Authenticated.jsx';
import Account from '../views/authenticated/account/Account.jsx';
import Signal from '../views/authenticated/signal/Signal.jsx';
import Dashboard from '../views/authenticated/dashboard/Dashboard.jsx';

// Admin Layouts import and views.
import { AdminLayout } from '../layouts/Admin.jsx';
import { AdminDashboard } from '../views/admin/dashboard/Dashboard.jsx';
import Settings from '../views/admin/settings/Settings.jsx';


const Router = () => {

    const router = createBrowserRouter([
        // Guest layout section.
        {
            path: '/',
            element: <GuestLayout/>,
            errorElement: <Error/>,
            children: [
                // Guest section views.
                {
                    path: '/',
                    element: <Home/>,
                },
                {
                    path: 'about',
                    element: <About/>,
                },
                {
                    path: 'authentication/sign-in',
                    element: <SignIn/>,
                },
                {
                    path: 'authentication/sign-up',
                    element: <SignUp/>,
                },
            ]
        },
        // Authenticated layout section.
        {
            path: '/authenticated/',
            element: <AuthenticatedLayout/>,
            errorElement: <Error/>,
            children: [
                // Authenticated section views.
                {
                    path: 'account',
                    element: <Account/>,
                },
                {
                    path: 'signal',
                    element: <Signal/>,
                },
                {
                    path: 'dashboard',
                    element: <Dashboard/>,
                }
            ]
        },
        // Admin layout section.
        {
            path: '/admin/',
            element: <AdminLayout/>,
            errorElement: <Error/>,
            // Admin section views.
            children: [
                {
                    path: 'dashboard',
                    element: <AdminDashboard/>,
                },
                {
                    path: 'settings',
                    element: <Settings/>,
                }
            ]
        },
    ])

    return ( 
        <RouterProvider router={router} />
     );
}
 
export default Router;