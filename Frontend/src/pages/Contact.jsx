import React from "react";
import Navbar from "../components/Navbar";
import {useAuth0} from '@auth0/auth0-react';


const Contact = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      <Navbar />
      Contact
      {isAuthenticated && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
