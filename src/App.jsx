import './App.css';
import router from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App
