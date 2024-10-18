import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../components/Navbar";

const Profile = () => {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0();
  return (
    <div>
      <Navbar/>
      <ul>
        <img src={user.picture} alt={user.name} />
        <h2>Name : {user.name}</h2>
        <h2>Email : {user.email}</h2>
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

        <button onClick={logout}>Logout</button>
      </ul>
    </div>
  );
};

export default Profile;
