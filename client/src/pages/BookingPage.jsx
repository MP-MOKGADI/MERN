
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../axios";

export default function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/bookings/${id}`, { withCredentials: true })
      .then((res) => setBooking(res.data))
      .catch((err) => {
        console.error(err);
        setBooking(null);
      });
  }, [id]);

  if (booking === null)
    return <p className="text-pink-500 text-center mt-6">Booking not found.</p>;
  if (!booking)
    return <p className="text-pink-500 text-center mt-6">Loading booking details...</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-pink-500 text-center">Booking Details</h2>

      <div className="border-2 border-pink-300 p-6 rounded-xl shadow-lg max-w-2xl mx-auto bg-white">
        {/* Place ID */}
        <p className="mb-4 text-gray-700">
          <strong>Place ID:</strong> {booking.place._id || booking.place}
        </p>

        {/* Booking Details */}
        <p className="mb-1"><strong>Check-in:</strong> {new Date(booking.checkInDate).toLocaleDateString()}</p>
        <p className="mb-1"><strong>Check-out:</strong> {new Date(booking.checkOutDate).toLocaleDateString()}</p>
        <p className="mb-1"><strong>Guests:</strong> {booking.numberOfGuests}</p>
        <p className="mb-1"><strong>Full Name:</strong> {booking.fullName}</p>
        <p className="mb-1"><strong>Phone:</strong> {booking.phone}</p>
        <p className="mb-4 font-semibold text-pink-600"><strong>Total Price:</strong> R{booking.price}</p>

        <button
          onClick={() => navigate(-1)}
          className="mt-4 w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition font-semibold"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
