import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signin from './pages/Signin';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signin" element={<Signin/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
