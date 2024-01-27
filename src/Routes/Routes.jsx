import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Module/Home/Home';
import ErrorRoutePage from '../Pages/Error/ErrorRoute';

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage/>,
    errorElement: <ErrorRoutePage />
	},
	{
		path: "/home",
		element: <HomePage/>,
    errorElement: <ErrorRoutePage />
	},
	// {
	// 	path: "/profile",
	// 	element: <Profile />,
    // errorElement: <ErrorRoutePage />
	// },
]);

export default router;