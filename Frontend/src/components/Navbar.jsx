import React from "react";
import { useAuthContext } from "@asgardeo/auth-react";
import { FaCarAlt } from "react-icons/fa";

const Navbar = () => {
  const { state, signIn, signOut } = useAuthContext();

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a
          className="flex items-center text-2xl font-bold text-white hover:text-gray-400"
          href="/"
        >
          <FaCarAlt className="mr-2 w-7 h-7 text-green-400" /> 
          Engine-Clinic
        </a>

        <button
          className="block lg:hidden text-white focus:outline-none"
          type="button"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div className="hidden lg:flex items-center space-x-8">
          <a className="text-gray-300 hover:text-gray-400 transition duration-300" href="/">
            Home
          </a>
          <a className="text-gray-300 hover:text-gray-400 transition duration-300" href="/about">
            About
          </a>
          <a className="text-gray-300 hover:text-gray-400 transition duration-300" href="/contact">
            Contact
          </a>
          <a className="text-gray-300 hover:text-gray-400 transition duration-300" href="/services">
            Services
          </a>

          {!state.isAuthenticated && (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 focus:outline-none"
              onClick={() => signIn()}
            >
              Login
            </button>
          )}

          {state.isAuthenticated && (
            <>
              <a className="text-gray-300 hover:text-gray-400 transition duration-300" href="/reservasions">
                Reservations
              </a>
              <a className="text-gray-300 hover:text-gray-400 transition duration-300" href="/addReservasion">
                Add Reservation
              </a>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 focus:outline-none"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
