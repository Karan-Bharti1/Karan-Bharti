import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import{createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import Projects from './pages/Projects.jsx'
import Blogs from './pages/Blogs.jsx'
const router=createBrowserRouter([
  {
      path: '/',
    element: <App />
  },{
    path:"/projects",
    element:<Projects/>
  },{
    path:"/blogs",
    element:<Blogs/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
