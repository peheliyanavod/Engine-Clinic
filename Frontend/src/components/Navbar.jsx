import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a
          className="text-xl font-semibold text-gray-800 hover:text-gray-600"
          href="/"
        >
          Engine-Clinic
        </a>
        <button
          className="block lg:hidden text-gray-800 focus:outline-none"
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
        <div className="hidden lg:flex items-center space-x-4">
          <a className="text-gray-800 hover:text-gray-600" href="/">
            Home
          </a>
          <a className="text-gray-800 hover:text-gray-600" href="/about">
            About
          </a>
          <a className="text-gray-800 hover:text-gray-600" href="/contact">
            Contact
          </a>
          <a className="text-gray-800 hover:text-gray-600" href="/services">
            Services
          </a>
          {!isAuthenticated && (
            <>
              <button
                className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 focus:outline-none"
                onClick={loginWithPopup}
              >
                Login
              </button>
            </>
          )}
          {isAuthenticated && (
            <>
              <a
                className="text-gray-800 hover:text-gray-600"
                href="/reservasions"
              >
                Reservations
              </a>
              <a
                className="text-gray-800 hover:text-gray-600"
                href="/addReservasion"
              >
                Add Reservation
              </a>
              <a className="text-gray-800 hover:text-gray-600" href="/profile">
                Profile
              </a>
              <button
                className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 focus:outline-none"
                onClick={logout}
              >
                Logout
              </button>
            </>
          )}
        </div>
        {/* <div className="hidden lg:flex">
          <form className="flex space-x-2">
            <input
              className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 focus:outline-none"
              type="submit"
            >
              Search
            </button>
          </form>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
