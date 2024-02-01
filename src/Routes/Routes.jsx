import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Pages/Home/Home';
import ErrorRoutePage from '../Pages/Error/ErrorRoute';
import ComponentCheck from '../Module/DeleteLater/ComponentCheck';
import { RegisterUser } from '../Pages/RegisterUser/RegisterUser';

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage/>,
    	errorElement: <ErrorRoutePage />
	},
	{
		path: "/practice",
		element: <ComponentCheck/>,
		errorElement: <ErrorRoutePage />
	},
	{
		path: "/home",
		element: <HomePage/>,
    	errorElement: <ErrorRoutePage />
	},
	{
		path: "/registerUser",
		element: <RegisterUser/>,
    	errorElement: <ErrorRoutePage />
	}
	// {
	// 	path: "/profile",
	// 	element: <Profile />,
    // errorElement: <ErrorRoutePage />
	// },
]);

export default router;