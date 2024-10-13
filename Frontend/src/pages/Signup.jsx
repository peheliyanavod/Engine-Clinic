import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    contact: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data: res } = await axios.post(
        "http://localhost:8000/api/v1/auth/signup",
        data
      );
      navigate("/login");
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
    <div className="mx-20 px-20">
      <h1 className="text-4xl text-center py-4">Sign In</h1>

      {error && <div className="error">{error}</div>}

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleSignup}
      >
        <div className="col-span-2 flex flex-col">
          <label htmlFor="name" className="font-semibold mb-1">
            Name
          </label>
          <div className="relative">
            <input
              type="text"
              className="pl-2 border border-gray-300 p-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="name"
              value={data.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

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
          <label htmlFor="username" className="font-semibold mb-1">
            Username
          </label>
          <div className="relative">
            <input
              type="text"
              className="pl-2 border border-gray-300 p-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="username"
              value={data.username}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-span-2 flex flex-col">
          <label htmlFor="contact" className="font-semibold mb-1">
            Contact contact
          </label>
          <div className="relative">
            <input
              type="text"
              className="pl-2 border border-gray-300 p-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="contact"
              value={data.contact}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="country" className="font-semibold mb-1">
            Country
          </label>
          <select
            className="border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="country"
            value={data.country}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Choose...
            </option>
            <option value="Srilanka">Sri Lanka</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>
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

        <div className="col-span-2 flex flex-col">
          <label htmlFor="confirmPassword" className="font-semibold mb-1">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type="password"
              className="pl-2 border border-gray-300 p-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="confirmPassword"
              value={data.confirmPassword}
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
            Submit
          </button>
          <a href="/login">You already have an account?</a>
        </div>
      </form>
    </div>
  );
};

export default Signin;
