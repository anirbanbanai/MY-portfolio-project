import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Skillone from './Components/Skillone';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader: ()=>fetch(`http://localhost:5000/user`)
      },
      {
        path:"/abt",
        element:<AboutMe></AboutMe>
      },
      {
        path:'/skill1',
        element:<Skillone></Skillone>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
