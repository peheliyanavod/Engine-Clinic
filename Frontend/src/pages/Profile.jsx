import React from "react";
import Navbar from "../components/Navbar";
import { useAuthContext } from "@asgardeo/auth-react";

const Profile = () => {
  const { state, signIn, signOut } = useAuthContext();
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-10">
        {/* <img
          src={user.picture}
          alt={user.username}
          className="w-24 h-24 rounded-full shadow-lg"
        /> */}
        <h2 className="mt-4 text-xl font-semibold text-gray-800">
          {state.username}
        </h2>
        <p className="mt-2 text-gray-600">{state.email}</p>
        <button
          className="bg-green-500 text-white px-3 py-1 my-5 rounded-md hover:bg-green-600 focus:outline-none"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>

      {/* <div>
        {state.isAuthenticated ? (
          <div>
            <ul>
              <li>{state.username}</li>
            </ul>

            <button onClick={() => signOut()}>Logout</button>
          </div>
        ) : (
          <button onClick={() => signIn()}>Login</button>
        )}
      </div> */}
    </div>
  );
};

export default Profile;
