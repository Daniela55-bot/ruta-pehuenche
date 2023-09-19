import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Servicios from './Components/Servicios';
import Cabañas from './Components/Cabañas';
import Bencineras from './Components/Bencineras';
import Gasolina from './Components/Gazolina';
import Bencinuno from './Components/Bencinuno';

const router = createBrowserRouter([
{
  path:'/',
  element:<Home />,
},
{
  path:'/Servicios',
  element:<Servicios />,
},
{
  path:'/Cabañas',
  element:<Cabañas />,
  
},
{
  path:'/Bencineras',
  element:<Bencineras />,
  
},
{
  path:'/Gasolina',
  element:<Gasolina />,
  
},
{
  path:'/Bencinuno',
  element:<Bencinuno />,
  
},

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();