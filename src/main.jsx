import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import{createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import Projects from './pages/Projects.jsx'
import Blogs from './pages/Blogs.jsx'
import PropDrill from './Blogs/PropDrill.jsx'
import ContextAPI from './Blogs/ContextAPI.jsx'
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
  },{
    path:"/props-drilling",
    element:<PropDrill/>
  },{
      path:"/context",
      element:<ContextAPI/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
