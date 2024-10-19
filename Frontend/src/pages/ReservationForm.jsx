import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
// import { useAuth0 } from "@auth0/auth0-react";


const ReservasionForm = () => {
  // const { user } = useAuth0();

  const [data, setData] = useState({
    vehicle_no: "",
    date: "",
    time: "",
    location: "",
    mileage: "",
    message: "",
    // username: user.name,
  });

  
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleReservasion = async (e) => {
    e.preventDefault();
    setError(""); // Reset the error message

    const selectedDate = new Date(data.date);
    const today = new Date();
    const selectedDay = selectedDate.getDay(); // 0 for Sunday

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
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mx-20 px-20">
        <h1 className="text-4xl text-center py-4">Reservation</h1>

        {error && <div className="error">{error}</div>}

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleReservasion}
        >
          <div className="col-span-2 flex flex-col">
            <label htmlFor="vehicle_no" className="font-semibold mb-1">
              Vehicle Number
            </label>
            <div className="relative">
              <input
                type="text"
                className="pl-2 border border-gray-300 p-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="vehicle_no"
                value={data.vehicle_no}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="col-span-2 flex flex-col">
            <label htmlFor="mileage" className="font-semibold mb-1">
              Mileage
            </label>
            <div className="relative">
              <input
                type="text"
                className="pl-2 border border-gray-300 p-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="mileage"
                value={data.mileage}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="col-span-2 flex flex-col">
            <label htmlFor="date" className="font-semibold mb-1">
              Date
            </label>
            <div className="relative">
              <input
                type="date"
                className="pl-2 border border-gray-300 p-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="date"
                value={data.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="col-span-2 flex flex-col">
            <label htmlFor="time" className="font-semibold mb-1">
              Time
            </label>
            <div className="relative">
              <input
                type="time"
                className="pl-2 border border-gray-300 p-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="time"
                value={data.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>


          <div className="flex flex-col">
            <label htmlFor="location" className="font-semibold mb-1">
              Location
            </label>
            <select
              className="border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="location"
              value={data.location}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Choose...
              </option>
              <option value="Colombo">Colombo</option>
              <option value="Gampaha">Gampaha</option>
              <option value="Kaluthara">Kaluthara</option>
              <option value="Galle">Galle</option>
              <option value="Matara">Matara</option>
              <option value="Hambantota">Hambantota</option>
            </select>
          </div>

          <div className="col-span-2 flex flex-col">
            <label htmlFor="message" className="font-semibold mb-1">
              Message
            </label>
            <div className="relative">
              <input
                type="text"
                className="pl-2 border border-gray-300 p-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="message"
                value={data.message}
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
              Add Reservation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservasionForm;
