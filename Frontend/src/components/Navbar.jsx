import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/book"><button>Book Now</button></a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar