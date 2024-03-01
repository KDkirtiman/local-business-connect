import { createBrowserRouter } from 'react-router-dom';
import ErrorRoutePage from '../Pages/Error/Error';
import Landing from '../Pages/Landing/Landing';
import { UserDashboard } from '../Pages/UserDashboard/UserDashboard';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <UserDashboard />,
    errorElement: <ErrorRoutePage />
  },
  // {
  //   path: "/",
  //   element: <Landing />,
  //   errorElement: <ErrorRoutePage />
  // },
  {
    path: "/dashboard",
    element: <UserDashboard />,
    errorElement: <ErrorRoutePage />
  }
]);

export default router;
