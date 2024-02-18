import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';

function Application() {

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default Application;
