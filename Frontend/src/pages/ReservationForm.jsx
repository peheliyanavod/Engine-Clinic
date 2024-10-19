import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuthContext } from "@asgardeo/auth-react";

const ReservasionForm = () => {
  const { state } = useAuthContext();

  const [data, setData] = useState({
    vehicle_no: "",
    date: "",
    time: "",
    location: "",
    mileage: "",
    message: "",
    username: state.username,
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleReservasion = async (e) => {
    e.preventDefault();
    setError("");

    const selectedDate = new Date(data.date);
    const today = new Date();
    const selectedDay = selectedDate.getDay();

    const selectedTime = data.time;
    const [hour, minutes] = selectedTime.split(":");
    const timeInMinutes = parseInt(hour) * 60 + parseInt(minutes);

    // Validate Date
    if (selectedDate <= today) {
      setError("Date must be in the future.");
      return;
    }
    if (selectedDay === 0) {
      setError("Sundays are not available for booking.");
      return;
    }

    // Validate Time
    const startOfDay = 9 * 60; // 9:00 AM in minutes
    const endOfDay = 18 * 60; // 6:00 PM in minutes

    if (timeInMinutes < startOfDay || timeInMinutes > endOfDay) {
      setError("Please select a time between 9:00 AM and 6:00 PM.");
      return;
    }

    try {
      const { data: res } = await axios.post(
        "http://localhost:8000/api/v1/reservasion/addReservasion",
        data
      );
      navigate("/reservasions");
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
      <div className="flex justify-center items-center mt-10">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl text-center font-semibold text-gray-800 mb-6">
            Make a Reservation
          </h1>

          {error && (
            <div className="text-red-500 mb-4 text-center">{error}</div>
          )}

          <form onSubmit={handleReservasion} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="vehicle_no" className="font-semibold mb-2">
                Vehicle Number
              </label>
              <input
                type="text"
                name="vehicle_no"
                className="pl-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={data.vehicle_no}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="mileage" className="font-semibold mb-2">
                Mileage
              </label>
              <input
                type="text"
                name="mileage"
                className="pl-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={data.mileage}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="date" className="font-semibold mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                className="pl-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={data.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="time" className="font-semibold mb-2">
                Time
              </label>
              <input
                type="time"
                name="time"
                className="pl-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={data.time}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="location" className="font-semibold mb-2">
                Location
              </label>
              <select
                name="location"
                className="pl-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={data.location}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Location
                </option>
                <option value="Colombo">Colombo</option>
                <option value="Gampaha">Gampaha</option>
                <option value="Kaluthara">Kaluthara</option>
                <option value="Galle">Galle</option>
                <option value="Matara">Matara</option>
                <option value="Hambantota">Hambantota</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                className="pl-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={data.message}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Reservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservasionForm;
