import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from './pages/landing';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Mpesachoice from './pages/Mpesa-choice'
import Paypalchoice from './pages/Paypal-choice'




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/mpesa-choice" element={<Mpesachoice/>} />
        <Route path="/paypal-choice" element={<Paypalchoice/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
