import { createBrowserRouter } from 'react-router-dom';
import ErrorRoutePage from '../Pages/Error/Error';
import Landing from '../Pages/Landing/Landing';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Landing/>,
    errorElement: <ErrorRoutePage />
  },
]);

export default router;
