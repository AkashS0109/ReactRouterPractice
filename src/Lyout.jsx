import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
export default function Lyout() {
  return (
   <>
    <Header/>
    <Outlet/>
    <Footer/>
   </>
  )
}

//The React Router <Outlet/> 
// component (from react-router-dom ) 
// is used within the parent route 
// element to indicate where a child route element
//  should be rendered.
// HERE PARENT ROUTE IS <layout/>
// The <Outlet> component in React Router DOM is used to render child routes within a parent route.
//  This allows nested UI to appear when child routes are rendered. 