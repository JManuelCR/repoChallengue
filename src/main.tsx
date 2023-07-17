import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.scss'
import CeratePost from './pages/CreatePost'
import Post from './pages/Post'
import NotFound from './pages/NotFound'



const router =  createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path:'/login',
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <NotFound />,
  },
  {
    path: '/create',
    element: <CeratePost />,
    errorElement: <NotFound />
  },
  {
    path: '/post',
    element: <Post />,
    errorElement: <NotFound />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
