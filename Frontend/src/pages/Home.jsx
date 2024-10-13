import React from "react";
import Navbar from "../components/Navbar";
// import HomeImage from '../assets/image-1.jpg';


const Home = () => {
  return (
    <div>
      <div className="h-screen bg-[url('https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] object-cover">
      <Navbar />

      <h1 className="text-white">Welcome to Engine Clinic!</h1>
      </div>
      
     
    </div>
  );
}; 

export default Home;
