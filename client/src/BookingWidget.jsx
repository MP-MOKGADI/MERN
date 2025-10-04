
import { useState, useContext, useEffect } from "react";
import { differenceInCalendarDays } from "date-fns";
import { useNavigate, Navigate } from "react-router-dom";
import axiosInstance from "./axios";
import { UserContext } from "./UserContext";

export default function BookingWidget({ place }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [redirect, setRedirect] = useState("");
  const [error, setError] = useState("");

  
  useEffect(() => {
    if (user) {
      setFullName(user.name || "");
      setPhone(user.phone || "");
    }
  }, [user]);

  
  if (!place) return <p>Loading place details...</p>;

  
  let numberOfNights = 0;
  if (checkInDate && checkOutDate) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOutDate),
      new Date(checkInDate)
    );
  }

  
  async function bookThisPlace() {
    if (!user) {
      navigate("/login");
      return;
    }

    if (!checkInDate || !checkOutDate) {
      setError("Please select check-in and check-out dates");
      return;
    }

    if (!fullName || !phone) {
      setError("Please fill in your full name and phone number");
      return;
    }

    try {
      const response = await axiosInstance.post(
        "/api/bookings",
        {
          place: place._id,
          checkInDate,
          checkOutDate,
          numberOfGuests,
          fullName,
          phone,
          price: numberOfNights * place.price,
        },
        { withCredentials: true }
      );

      const bookingId = response.data._id;
      setRedirect(`/account/bookings/${bookingId}`);
    } catch (err) {
      console.error("Booking failed:", err);
      setError("Booking failed. Please check your input and try again.");
    }
  }

  
  if (redirect) return <Navigate to={redirect} />;

  return (
    <div className="bg-white shadow p-6 rounded-2xl">
      <div className="text-2xl font-semibold text-center mb-4">
        Price: <span>R{place.price}</span> / night
      </div>

      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-3">{error}</div>
      )}

      <div className="bg-gray-100 p-4 rounded-xl mb-3">
        <label className="block font-semibold mb-1">Check-in</label>
        <input
          type="date"
          className="w-full rounded-lg border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-200"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </div>

      <div className="bg-gray-100 p-4 rounded-xl mb-4">
        <label className="block font-semibold mb-1">Check-out</label>
        <input
          type="date"
          className="w-full rounded-lg border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-200"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </div>

      {numberOfNights > 0 && (
        <div className="py-3 px-4 mb-4">
          <label className="block font-semibold mb-1">Your Full Name</label>
          <input
            type="text"
            className="w-full rounded-lg border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-200 mb-3"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label className="block font-semibold mb-1">Your Phone Number</label>
          <input
            type="tel"
            className="w-full rounded-lg border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-200 mb-3"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label className="block font-semibold mb-1">Number of Guests</label>
          <input
            type="number"
            className="w-full rounded-lg border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-200"
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
            min={1}
          />
        </div>
      )}

      <button
        onClick={bookThisPlace}
        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition flex justify-center items-center"
      >
        {numberOfNights > 0 && (
          <span className="mr-2">R {numberOfNights * place.price}</span>
        )}
        Book Now
      </button>
    </div>
  );
}

