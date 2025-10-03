


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import AccountNav from "../AccountNav"; // Make sure path is correct

// export default function BookingsPage() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     axios.get("/api/bookings").then((res) => {
//       setBookings(res.data);
//     }).catch((err) => {
//       console.error("Failed to load bookings:", err);
//     });
//   }, []);

//   return (
//     <div>
//       <AccountNav />

//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-2xl font-semibold mb-6">My Bookings</h1>

//         {bookings.length === 0 && (
//           <p className="text-gray-500">You have no bookings yet.</p>
//         )}

//         <div className="grid gap-6">
//           {bookings.map((booking) => (
//             <Link
//               key={booking._id}
//               to={`/account/bookings/${booking._id}`}
//               className="block border rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
//             >
//               <div className="flex gap-4">
//                 {booking.place.photos?.[0] && (
//                   <img
//                     src={booking.place.photos[0]}
//                     alt={booking.place.title}
//                     className="w-48 h-32 object-cover"
//                   />
//                 )}
//                 <div className="p-4 flex-1">
//                   <h2 className="text-xl font-semibold mb-2">{booking.place.title}</h2>

//                   <div className="flex gap-4 text-gray-600 mb-2">
//                     <div>
//                       <span className="font-semibold">Check-in:</span>{" "}
//                       {new Date(booking.checkInDate).toLocaleDateString()}
//                     </div>
//                     <div>
//                       <span className="font-semibold">Check-out:</span>{" "}
//                       {new Date(booking.checkOutDate).toLocaleDateString()}
//                     </div>
//                   </div>

//                   <div className="flex gap-4 text-gray-600 mb-2">
//                     <div>
//                       <span className="font-semibold">Guests:</span> {booking.numberOfGuests}
//                     </div>
//                     <div>
//                       <span className="font-semibold">Total Price:</span> R{booking.price}
//                     </div>
//                   </div>

//                   <div className="text-gray-500 text-sm">
//                     Booking for: {booking.fullName}, Phone: {booking.phone}
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import AccountNav from "../AccountNav";

// export default function BookingsPage() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/api/bookings")
//       .then((res) => setBookings(res.data))
//       .catch((err) => console.error("Failed to load bookings:", err));
//   }, []);

//   function handleDelete(id) {
//     if (!window.confirm("Are you sure you want to delete this booking?")) return;

//     axios
//       .delete(`/api/bookings/${id}`, { withCredentials: true })
//       .then(() => {
//         setBookings((prev) => prev.filter((booking) => booking._id !== id));
//       })
//       .catch((err) => console.error("Failed to delete booking:", err));
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen p-6">
//       <AccountNav />

//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6 text-pink-500 text-center">My Bookings</h1>

//         {bookings.length === 0 && (
//           <p className="text-gray-600 text-center mt-6">You have no bookings yet.</p>
//         )}

//         <div className="grid gap-6">
//           {bookings.map((booking) => (
//             <div
//               key={booking._id}
//               className="border border-gray-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
//             >
//               <div className="flex flex-col md:flex-row gap-4">
//                 {booking.place.photos?.[0] && (
//                   <img
//                     src={booking.place.photos[0]}
//                     alt={booking.place.title}
//                     className="w-full md:w-48 h-40 md:h-32 object-cover rounded-l-2xl md:rounded-l-none md:rounded-t-2xl"
//                   />
//                 )}
//                 <div className="p-4 flex-1 bg-white">
//                   {/* Place title */}
//                   <h2 className="text-2xl font-semibold mb-1 text-gray-800">{booking.place.title}</h2>

//                   {/* Address / location */}
//                   {booking.place.address && (
//                     <p className="text-gray-600 mb-2">{booking.place.address}</p>
//                   )}

//                   {/* Booking details */}
//                   <div className="flex flex-wrap gap-4 text-gray-700 mb-2">
//                     <div>
//                       <span className="font-semibold">Check-in:</span>{" "}
//                       {new Date(booking.checkInDate).toLocaleDateString()}
//                     </div>
//                     <div>
//                       <span className="font-semibold">Check-out:</span>{" "}
//                       {new Date(booking.checkOutDate).toLocaleDateString()}
//                     </div>
//                   </div>

//                   <div className="flex flex-wrap gap-4 text-gray-700 mb-2">
//                     <div>
//                       <span className="font-semibold">Guests:</span> {booking.numberOfGuests}
//                     </div>
//                     <div>
//                       <span className="font-semibold">Total Price:</span> R{booking.price}
//                     </div>
//                   </div>

//                   <div className="text-gray-700 text-sm mb-4">
//                     Booking for: {booking.fullName}, Phone: {booking.phone}
//                   </div>

//                   {/* Delete button */}
//                   <button
//                     onClick={() => handleDelete(booking._id)}
//                     className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition font-semibold"
//                   >
//                     Delete Booking
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import axios from "axios";
import AccountNav from "../AccountNav";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("/api/bookings")
      .then((res) => setBookings(res.data))
      .catch((err) => console.error("Failed to load bookings:", err));
  }, []);

  function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;

    axios
      .delete(`/api/bookings/${id}`, { withCredentials: true })
      .then(() => {
        setBookings((prev) => prev.filter((booking) => booking._id !== id));
      })
      .catch((err) => console.error("Failed to delete booking:", err));
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <AccountNav />

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-pink-500 text-center">
          My Bookings
        </h1>

        {bookings.length === 0 && (
          <p className="text-gray-600 text-center mt-6">You have no bookings yet.</p>
        )}

        <div className="grid gap-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="border border-gray-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Place photo */}
                {booking.place.photos?.[0] && (
                  <img
                    src={booking.place.photos[0]}
                    alt={booking.place.title}
                    className="w-full md:w-48 h-40 md:h-32 object-cover rounded-l-2xl md:rounded-l-none md:rounded-t-2xl"
                  />
                )}

                {/* Booking details */}
                <div className="p-4 flex-1 bg-white flex flex-col justify-between">
                  <div>
                    {/* Booking ID */}
                    <p className="text-gray-800 font-semibold mb-1">
                      Booking ID: {booking._id}
                    </p>

                    {/* Place title */}
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                      {booking.place.title}
                    </h2>

                    {/* Booking info */}
                    <div className="flex flex-wrap gap-4 text-gray-800 mb-2">
                      <div>
                        <span className="font-semibold">Check-in:</span>{" "}
                        {new Date(booking.checkInDate).toLocaleDateString()}
                      </div>
                      <div>
                        <span className="font-semibold">Check-out:</span>{" "}
                        {new Date(booking.checkOutDate).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-gray-800 mb-2">
                      <div>
                        <span className="font-semibold">Guests:</span>{" "}
                        {booking.numberOfGuests}
                      </div>
                      <div>
                        <span className="font-semibold">Total Price:</span> R{booking.price}
                      </div>
                    </div>

                    <div className="text-gray-800 text-sm mb-2">
                      Booking for: {booking.fullName}, Phone: {booking.phone}
                    </div>
                  </div>

                  {/* Delete button aligned right */}
                  <div className="flex justify-end">
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition font-semibold"
                    >
                      Delete Booking
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
