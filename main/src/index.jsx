import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './root/root'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/home'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
