import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data: res } = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        data
      );
      navigate("/");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <Navbar />

      <div className="mx-20 px-20">
        <h1 className="text-4xl text-center py-4">Login</h1>

        {error && <div className="error">{error}</div>}

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleLogin}
        >
          <div className="col-span-2 flex flex-col">
            <label htmlFor="email" className="font-semibold mb-1">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                className="pl-2 border border-gray-300 p-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="col-span-2 flex flex-col">
            <label htmlFor="password" className="font-semibold mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="pl-2 border border-gray-300 p-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="col-span-2">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Login
            </button>
            <a href="/signup">Don't you have an account?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
