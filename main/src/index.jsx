import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './root/root'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/home'
import './index.css'
import Carousel from './pages/carousel/carousel'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: '/carousel',
        element: <Carousel />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
