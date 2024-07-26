import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ListUser from './ListUser/index.tsx'
import Layout from './Layout/index.tsx'
import CreateUser from './CreateUser/index.tsx'
import Fibonacci from './Fibonacci/index.tsx'
import Collatz from './Collatz/index.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/listuser", element: <Layout> <ListUser /> </Layout> },
  { path: "/createUser", element: <Layout> <CreateUser /> </Layout> },
  { path: "/Fibonacci", element: <Layout> <Fibonacci /> </Layout> },
  { path: "/Collatz", element: <Layout> <Collatz /> </Layout> },
  { path: "/Dashboard", element: <App /> },

]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
