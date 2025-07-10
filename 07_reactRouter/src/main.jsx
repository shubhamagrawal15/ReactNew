import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './Components/Header/Header.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import './index.css'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'
import { githubInfoLoader } from './Components/Github/Github.jsx'

// slightly lengthy
/*
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,


    children:[
      {
        path:"",
        element:<Home/>

      },
      {
        path:"about",
        element:<About/>

      },
      {
        path:"contacts",
        element:<Contact/>
      }
    ]

  }

])
*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
     <Route path='' element={<Home/>} />
     <Route path='about' element={<About/>}/>
     <Route path='contacts' element={<Contact/>} />
     <Route path='user/:userid' element={<User/>} />


     <Route
      path='github'
      element={<Github/>}
      loader={githubInfoLoader}

     />
    
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
