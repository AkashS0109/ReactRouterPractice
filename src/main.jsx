import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/Home/About.jsx'
import Layout from './Lyout.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User  from "./Components/ser/user.jsx"
import Github,{githubInfoLoader} from './Components/Github/Github.jsx'


// const router =createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>, 
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

        //OR
  // here <outlet/> refers to home,about contat ,user nad github directory
   // these are child compoentsor routes renders within paent compoennt
        const router =createBrowserRouter(
       createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
         <Route path='about' element={<About/>}/>
         <Route path='contact' element={<Contact/>}/>
         <Route path='User/:userid' element={<User/>}/>
         <Route 
          loader={githubInfoLoader}
         path='github' element={<Github/>}/>
        </Route>
       )




        )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
