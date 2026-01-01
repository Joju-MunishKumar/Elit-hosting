import React from 'react'
import Nav from './Components/mainComp/Nav'
import { Route, Routes, useLocation} from 'react-router-dom'
import Home from './Components/Pages/Home'
import Auth from './Components/Pages/Auth'
import Contact from './Components/Pages/Contact'
import About from './Components/Pages/About'
import Domain from './Components/Pages/Domain'
import Hosting from './Components/Pages/Hosting'
import Footer from './Components/Pages/Footer'

const mystyles={
  "min-height":"100vh",
  "display":"flex",
  "flex-direction":"column"
}
function App() {
      const location = useLocation();
  return (
    <>
    
    <h1>{location.pathname}</h1>

    <div style={mystyles}>
      { location.pathname === "/auth" 
      ? <>
      {/* <Nav /> */}
      {/* Add top margin to avoid content being hidden by navbar */}
     <Routes >
          <Route path="/auth" element={<Auth/>}/>
      </Routes>
      {/* <Footer/> */}
      </> 
      : <>
      <Nav />
      {/* Add top margin to avoid content being hidden by navbar */}
     <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/hosting" element={<Hosting/>}/>
          <Route path="/domain" element={<Domain/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/auth" element={<Auth/>}/>
      </Routes>
      <Footer/>
      </>   }
    </div>
    </>
  )
}

export default App
