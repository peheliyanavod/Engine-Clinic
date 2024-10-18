import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../components/Navbar";

const Profile = () => {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0();
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-10">
        <img
          src={user.picture}
          alt={user.name}
          className="w-24 h-24 rounded-full shadow-lg"
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-800">
          {user.name}
        </h2>
        <p className="mt-2 text-gray-600">{user.email}</p>
        <button
          className="bg-green-500 text-white px-3 py-1 my-5 rounded-md hover:bg-green-600 focus:outline-none"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
