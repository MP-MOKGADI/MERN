// import {useParams} from "react-router-dom";
// import {useEffect, useState} from "react";
// import axios from "axios";
// import AddressLink from "../AddressLink";
// import PlaceGallery from "../PlaceGallery";
// import BookingDates from "../BookingDates";

// export default function BookingPage() {
//   const {id} = useParams();
//   const [booking,setBooking] = useState(null);
//   useEffect(() => {
//     if (id) {
//       axios.get('/bookings').then(response => {
//         const foundBooking = response.data.find(({_id}) => _id === id);
//         if (foundBooking) {
//           setBooking(foundBooking);
//         }
//       });
//     }
//   }, [id]);

//   if (!booking) {
//     return '';
//   }

//   return (
//     <div className="my-8">
//       <h1 className="text-3xl">{booking.place.title}</h1>
//       <AddressLink className="my-2 block">{booking.place.address}</AddressLink>
//       <div className="bg-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between">
//         <div>
//           <h2 className="text-2xl mb-4">Your booking information:</h2>
//           <BookingDates booking={booking} />
//         </div>
//         <div className="bg-primary p-6 text-white rounded-2xl">
//           <div>Total price</div>
//           <div className="text-3xl">${booking.price}</div>
//         </div>
//       </div>
//       <PlaceGallery place={booking.place} />
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BookingPage() {
  const { id } = useParams();
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

  if (booking === null) return <p>Booking not found.</p>;
  if (!booking) return <p>Loading booking details...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
      <div className="border p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg">{booking.place.title}</h3>
        <p>
          <strong>Check-in:</strong>{" "}
          {new Date(booking.checkInDate).toLocaleDateString()}
        </p>
        <p>
          <strong>Check-out:</strong>{" "}
          {new Date(booking.checkOutDate).toLocaleDateString()}
        </p>
        <p>
          <strong>Guests:</strong> {booking.numberOfGuests}
        </p>
        <p>
          <strong>Full Name:</strong> {booking.fullName}
        </p>
        <p>
          <strong>Phone:</strong> {booking.phone}
        </p>
        <p>
          <strong>Total Price:</strong> R{booking.price}
        </p>
      </div>
    </div>
  );
}
