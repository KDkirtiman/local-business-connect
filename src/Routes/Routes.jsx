import { createBrowserRouter } from 'react-router-dom';
import ErrorRoutePage from '../Pages/Error/Error';
import Landing from '../Pages/Landing/Landing';
import { UserDashboard } from '../Pages/UserDashboard/UserDashboard';
import { Profile } from '../Pages/Profile/Profile';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Profile />,
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
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorRoutePage />
  }
]);

export default router;
