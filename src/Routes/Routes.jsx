import { createBrowserRouter } from 'react-router-dom';
import ErrorRoutePage from '../Pages/Error/Error';
import App from '../App';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorRoutePage />
  },
]);

export default router;
