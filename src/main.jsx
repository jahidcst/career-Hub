import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './component/Home'
import Blogs from './component/Blog/Blog'
import ErrorPage from './component/ErrorPage'
import Statistics from './component/Statistics/Statistics'
import AppliedJob from './component/AppliedJobs/AppliedJob'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/public/data.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied jobs',
        element: <AppliedJob></AppliedJob>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
