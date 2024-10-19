import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useAuthContext } from "@asgardeo/auth-react";

const Reservations = () => {
  const [reservasions, setReservasions] = useState([]);
  const [error, setError] = useState(null);

  const { state } = useAuthContext();
  const username = state.username;

  useEffect(() => {
    const fetchReservasions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/reservasion/getReservasions/${username}`
        );
        setReservasions(response.data.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch reservations");
      }
    };
    fetchReservasions();
  }, [username]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8000/api/v1/reservasion/deleteReservasion/${id}`
      );
      setReservasions((prevReservasions) =>
        prevReservasions.filter((reservasion) => reservasion._id !== id)
      );
    } catch (err) {
      console.error("Error deleting reservation:", err);
      setError("Failed to delete reservation");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Reservations
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {reservasions.length > 0 ? (
          <ul className="space-y-4">
            {reservasions.map((reservasion) => (
              <li
                key={reservasion._id}
                className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-700">
                    Username: {reservasion.username}
                  </p>
                  <p className="text-gray-600">
                    Vehicle No: {reservasion.vehicle_no}
                  </p>
                  <p className="text-gray-600">
                    Mileage: {reservasion.mileage} km
                  </p>
                  <p className="text-gray-600">
                    Reserved on: {reservasion.date} at {reservasion.time}
                  </p>
                  <p className="text-gray-600">
                    Location: {reservasion.location}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(reservasion._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No reservations found</p>
        )}
      </div>
    </div>
  );
};

export default Reservations;
