import React from "react";
import Navbar from "../components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Home = () => {
  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  function callAPI() {
    axios
      .get("http://localhost:8000/normal")
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.message));
  }

  async function callProtectedAPI() {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.get("http://localhost:8000/protected", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <Navbar />
      
    </div>
  );
};

export default Home;
