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
import Appliedjobs from './Component/Appliedjobs/Appliedjobs';
import Blog from './Component/Blog/Blog';
import Jobdetails from './Component/JobDetails/Jobdetails';
import jobLoader from './JobLoader/JobLoader';
import { Toaster } from 'react-hot-toast';
import Error from './Component/Error/Error';
import Statistic from './Component/Statistic/Statistic';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <MeanSection></MeanSection>,
        loader: () => fetch('/Job.json'),
      },
      {
        path: "/:jobId",
        element: <Jobdetails></Jobdetails>,
        loader: ({ params }) => fetch("/Job.json")

      },
      {
        path: "/statistics",
        element: <Statistic></Statistic>
      },
      {
        path: "/appliedjobs",
        element: <Appliedjobs></Appliedjobs>,
        loader: jobLoader
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path:"/*",
        element: <div>444444</div>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />
      <Toaster/>
    </>
  </React.StrictMode>,
)
