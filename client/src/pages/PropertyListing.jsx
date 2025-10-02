// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import axios from "axios";

// export default function PropertyListing() {
//   const { state } = useLocation();
//   const { location, checkIn, checkOut } = state || {};

//   const [places, setPlaces] = useState([]);

//   useEffect(() => {
//     // Fetch all properties from your backend
//     axios.get("http://localhost:3000/places").then((response) => {
//       setPlaces(response.data);
//     });
//   }, []);

//   // Filter properties by location (case-insensitive)
//   const filteredPlaces = location
//     ? places.filter((place) =>
//         place.address?.toLowerCase().includes(location.toLowerCase())
//       )
//     : places;

//   return (
//     <div className="p-6">
//       {/* Header */}
//       <h1 className="text-2xl font-semibold mb-2">
//         {location ? `Stays in ${location}` : "All Properties"}
//       </h1>
//       <p className="text-gray-500 mb-6">
//         {checkIn && checkOut ? `${checkIn} → ${checkOut}` : "Any dates"}
//       </p>

//       {/* Properties grid */}
//       <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {filteredPlaces.length > 0 ? (
//           filteredPlaces.map((place) => (
//             <Link to={`/place/${place._id}`} key={place._id}>
//               <div className="bg-gray-500 mb-2 rounded-2xl overflow-hidden">
//                 {place.addedPhotos?.[0] && (
//                   <img
//                     className="rounded-2xl object-cover aspect-square"
//                     src={`http://localhost:3000/uploads/${place.addedPhotos[0]}`}
//                     alt={place.title}
//                   />
//                 )}
//               </div>
//               <div>
//                 <h3 className="font-bold">{place.address}</h3>
//                 <h2 className="text-sm text-gray-500">{place.title}</h2>
//                 <div className="mt-2">
//                   <span className="font-bold">R{place.price}</span> / night
//                 </div>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p className="text-gray-600">No properties found for "{location}"</p>
//         )}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

export default function PropertyListing() {
  const { state } = useLocation();
  const { location, checkIn, checkOut } = state || {};

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // Fetch all properties from the public route
    axios.get("http://localhost:3000/places")
      .then((response) => {
        setPlaces(response.data);
      })
      .catch((err) => {
        console.error("Error fetching properties:", err);
      });
  }, []);

  // Filter properties by location (case-insensitive)
  const filteredPlaces = location
    ? places.filter((place) =>
        place.address?.toLowerCase().includes(location.toLowerCase())
      )
    : places;

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-2">
        {location ? `Stays in ${location}` : "All Properties"}
      </h1>
      <p className="text-gray-500 mb-6">
        {checkIn && checkOut ? `${checkIn} → ${checkOut}` : "Any dates"}
      </p>

      {/* Properties grid */}
      <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => (
            <Link to={`/place/${place._id}`} key={place._id}>
              <div className="bg-gray-500 mb-2 rounded-2xl overflow-hidden">
                {place.addedPhotos?.[0] && (
                  <img
                    className="rounded-2xl object-cover aspect-square"
                    src={`http://localhost:3000/uploads/${place.addedPhotos[0]}`}
                    alt={place.title}
                  />
                )}
              </div>
              <div>
                <h3 className="font-bold">{place.address}</h3>
                <h2 className="text-sm text-gray-500">{place.title}</h2>
                <div className="mt-2">
                  <span className="font-bold">R{place.price}</span> / night
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-600">
            No properties found{location ? ` for "${location}"` : ""}.
          </p>
        )}
      </div>
    </div>
  );
}
