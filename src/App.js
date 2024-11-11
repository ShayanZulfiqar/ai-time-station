import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import '../src/assets/style/tailwind.css'
import Login from "./pages/Login";
import HowItWork from "./pages/HowItWork";
import Pricing from "./pages/Pricing";
import Download from "./pages/Download";
import Support from "./pages/Support";
import ContactPage from "./pages/ContactPage";
import Privacy from "./pages/Privacy";
import TermServices from "./pages/TermServices";


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
        <Route path="/Download" element={<Download/>}/>
        <Route path="/Support" element={<Support/>}/>
        <Route path="/ContactPage" element={<ContactPage/>}/>
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="/TermServices" element={<TermServices/>}/>
      </Routes>
    </Router>
    
    </>
  )
}
export default App;