import { Route, Routes } from "react-router-dom"

import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home";
import SignIn from "./components/Hero/SignIn";
import SignUp from "./components/Hero/SignUp";
import Footer from "./components/Footer";
import { FaRegCopyright } from "react-icons/fa6";
const App = () => {
  const navitems=[
    {
      href:"/",
      content:"Home"
    },
    {
      href:"/about",
      content:"About"
    }
  ]
  
  return (
    <>
   <NavBar logo="Your Name" navItems={navitems} btn="Sign In"/>
   <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignIn />} /> 
        <Route path="/signup" element={<SignUp />} /> 
   </Routes>
   <Footer icon= <FaRegCopyright /> info="2025 Blogs , vica web solutions"/>
    </>
  )
}

export default App
