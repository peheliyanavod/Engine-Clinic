import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Services from "./pages/Services";
import ReservasionForm from "./pages/ReservationForm";
import Reservations from "./pages/Reservations";
import Profile from "./pages/Profile";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="addReservasion" element={<ReservasionForm/>}/>
      <Route path="reservasions" element={<Reservations/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
