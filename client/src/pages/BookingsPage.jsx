// import AccountNav from "../AccountNav";
// import {useEffect, useState} from "react";
// import axios from "axios";
// import PlaceImg from "../PlaceImg";
// import {differenceInCalendarDays, format} from "date-fns";
// import {Link} from "react-router-dom";
// import BookingDates from "../BookingDates";

// export default function BookingsPage() {
//   const [bookings,setBookings] = useState([]);
//   useEffect(() => {
//     axios.get('/bookings').then(response => {
//       setBookings(response.data);
//     });
//   }, []);
//   return (
//     <div>
//       <AccountNav />
//       <div>
//         {bookings?.length > 0 && bookings.map(booking => (
//           <Link to={`/account/bookings/${booking._id}`} className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden">
//             <div className="w-48">
//               <PlaceImg place={booking.place} />
//             </div>
//             <div className="py-3 pr-3 grow">
//               <h2 className="text-xl">{booking.place.title}</h2>
//               <div className="text-xl">
//                 <BookingDates booking={booking} className="mb-2 mt-4 text-gray-500" />
//                 <div className="flex gap-1">
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
//                   </svg>
//                   <span className="text-2xl">
//                     Total price: ${booking.price}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
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
//       .get("/api/bookings", { withCredentials: true })
//       .then((res) => setBookings(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div>
//       <AccountNav/>
//       <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
//       {bookings.length === 0 && <p>No bookings yet.</p>}
//       <div className="flex flex-col gap-4">
//         {bookings.map((b) => (
//           <Link
//             key={b._id}
//             to={`/account/bookings/${b._id}`}
//             className="p-4 border rounded-lg shadow hover:bg-gray-50"
//           >
//             <div className="font-semibold">{b.place.title}</div>
//             <div>
//               {new Date(b.checkInDate).toLocaleDateString()} -{" "}
//               {new Date(b.checkOutDate).toLocaleDateString()}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
      
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
//     axios.get("/bookings").then((res) => {
//       setBookings(res.data);
//     });
//   }, []);

//   return (
//     <div>
//       <AccountNav />
//       <div className="max-w-5xl mx-auto px-4">
//         <h2 className="text-2xl font-semibold mb-6">My Bookings</h2>
//         <div className="grid gap-6">
//           {bookings.length > 0 ? (
//             bookings.map((booking) => (
//               <Link
//                 key={booking._id}
//                 to={`/account/bookings/${booking._id}`}
//                 className="block bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
//               >
//                 <div className="flex flex-col md:flex-row">
//                   {booking.place?.photos?.[0] && (
//                     <img
//                       className="w-full md:w-48 h-40 object-cover"
//                       src={booking.place.photos[0]}
//                       alt={booking.place.title}
//                     />
//                   )}
//                   <div className="p-4 flex-1">
//                     <h3 className="text-xl font-semibold">{booking.place?.title}</h3>
//                     <div className="flex items-center gap-2 text-gray-600 mt-1">
//                       <span>
//                         {new Date(booking.checkInDate).toLocaleDateString()} →{" "}
//                         {new Date(booking.checkOutDate).toLocaleDateString()}
//                       </span>
//                       <span>• {booking.numberOfGuests} guest(s)</span>
//                     </div>
//                     <div className="text-gray-800 mt-2 font-semibold">
//                       Total: R{booking.price}
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <p>You have no bookings yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// src/pages/BookingsPage.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AccountNav from "../AccountNav"; // Make sure path is correct

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("/api/bookings").then((res) => {
      setBookings(res.data);
    }).catch((err) => {
      console.error("Failed to load bookings:", err);
    });
  }, []);

  return (
    <div>
      <AccountNav />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">My Bookings</h1>

        {bookings.length === 0 && (
          <p className="text-gray-500">You have no bookings yet.</p>
        )}

        <div className="grid gap-6">
          {bookings.map((booking) => (
            <Link
              key={booking._id}
              to={`/account/bookings/${booking._id}`}
              className="block border rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="flex gap-4">
                {booking.place.photos?.[0] && (
                  <img
                    src={booking.place.photos[0]}
                    alt={booking.place.title}
                    className="w-48 h-32 object-cover"
                  />
                )}
                <div className="p-4 flex-1">
                  <h2 className="text-xl font-semibold mb-2">{booking.place.title}</h2>

                  <div className="flex gap-4 text-gray-600 mb-2">
                    <div>
                      <span className="font-semibold">Check-in:</span>{" "}
                      {new Date(booking.checkInDate).toLocaleDateString()}
                    </div>
                    <div>
                      <span className="font-semibold">Check-out:</span>{" "}
                      {new Date(booking.checkOutDate).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex gap-4 text-gray-600 mb-2">
                    <div>
                      <span className="font-semibold">Guests:</span> {booking.numberOfGuests}
                    </div>
                    <div>
                      <span className="font-semibold">Total Price:</span> R{booking.price}
                    </div>
                  </div>

                  <div className="text-gray-500 text-sm">
                    Booking for: {booking.fullName}, Phone: {booking.phone}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
