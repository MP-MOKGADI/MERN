

// import { useEffect,useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Header from './Header';

// export default function IndexPage() {
//   const [places, setPlaces] = useState([]); 

//   useEffect(() => {
//     axios.get('/places').then(response => {
//       setPlaces(response.data);
//     });
//   }, []);

//   return (
//     <div className='mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
//       {places.length > 0 &&
//         places.map(place => (

//           <Link to={'/place/'+place._id} key={place._id} >
//             <div className='bg-gray-500 mb-2 rounded-2xl flex '>
//               {place.addedPhotos?.[0] && (
//               <img
//                   className='rounded-2xl object-cover aspect-square'
//                 src={`http://localhost:3000/uploads/${place.addedPhotos[0]}`}
//                 alt={place.title}
//               />
//             )} 

//             </div>
            
//             <div>
//               <h3 className='font-bold'>{place.address}</h3>
//               <h2 className='text-sm text-gray-500'>{place.title}</h2>
//               <div className='mt-2'>
//                 <span className='font-bold'>R{place.price} </span> per night
//                 </div>
              
//             </div>
//           </Link>
//         ))}
//     </div>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function IndexPage() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const navigate = useNavigate();

  function handleSearch() {
    if (!location) return; // prevent empty search
    navigate("/properties", {
      state: { location, checkIn, checkOut, guests },
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-pink-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Find your next stay</h1>
        <p className="text-lg">Explore amazing homes and unique experiences</p>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-center -mt-8 px-4">
        <div className="flex flex-wrap md:flex-nowrap bg-white shadow-lg rounded-full p-2 w-full max-w-4xl gap-2">
          <input
            type="text"
            placeholder="Where are you going?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 px-4 py-2 rounded-full outline-none text-sm border border-gray-200"
          />
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="px-4 py-2 rounded-full outline-none text-sm border border-gray-200"
          />
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="px-4 py-2 rounded-full outline-none text-sm border border-gray-200"
          />
          <input
            type="number"
            min="1"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-20 px-4 py-2 rounded-full outline-none text-sm border border-gray-200"
          />
          <button
            onClick={handleSearch}
            className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* Featured Properties Section */}
      <div className="mt-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <img
              src="https://source.unsplash.com/400x250/?house"
              alt="Property"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Cozy Apartment</h3>
              <p className="text-gray-500 text-sm">Cape Town, South Africa</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <img
              src="https://source.unsplash.com/400x250/?villa"
              alt="Property"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Luxury Villa</h3>
              <p className="text-gray-500 text-sm">Durban, South Africa</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <img
              src="https://source.unsplash.com/400x250/?hotel"
              alt="Property"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Modern Loft</h3>
              <p className="text-gray-500 text-sm">Johannesburg, South Africa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
