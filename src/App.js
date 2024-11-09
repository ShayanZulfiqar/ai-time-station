import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import '../src/assets/style/tailwind.css'
import Login from "./pages/Login";
import HowItWork from "./pages/HowItWork";
import Pricing from "./pages/Pricing";


const App = () => {
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/HowItWork" element={<HowItWork/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
      </Routes>
    </Router>
    
    </>
  )
}
export default App;