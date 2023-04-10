import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import MeanSection from './Component/MeanSection/MeanSection';
import Statistics from './Component/Statistics/Statistics';
import Appliedjobs from './Component/Appliedjobs/Appliedjobs';
import Blog from './Component/Blog/Blog';
import Jobcatagory from './Component/JobCatagory/Jobcatagory';
import Jobdetails from './Component/JobDetails/Jobdetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element: <MeanSection></MeanSection>,
        loader: () => fetch('Job.json'),
      },
      {
        path:"/Jobdetails",
        element: <Jobdetails></Jobdetails>
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/appliedjobs",
        element: <Appliedjobs></Appliedjobs>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
