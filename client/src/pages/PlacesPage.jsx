


// import { Link, useParams,Navigate } from "react-router-dom";
// import PlacesFormPage from "./PlacesFormPage.jsx";
// import { useState,useEffect } from "react";

// import Perks from "../Perks.jsx";
// import axios from "axios";
// import PhotoUploader from "../PhotoUploader.jsx";
// import AccountNav from "../AccountNav.jsx";



// export default function PlacesPage() {
//   const[places,setPlaces] = useState([]);
//   useEffect(() => {
//     axios.get('/places').then(({data}) => {
//       setPlaces(data);
//     });
//   }, []);

//   return (
//     <div>
//       <AccountNav/>
      
//         <div className="text-center">
//           LIST OF all added places
//           <br />
//           <Link
//             to="/account/places/new"
//             className="inline-flex gap-1 bg-pink-400 text-white px-6 py-2 rounded-full"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="size-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M12 4.5v15m7.5-7.5h-15"
//               />
//             </svg>
//             Add New Place
//           </Link>
//         </div>
//         <div>
//           {places.length > 0 && places.map(place => (
//            <Link to={`/account/places/${place._id}`} className="flex bg-gray-200 p-4 rounded-2xl mb-4 cursor-pointer" key={place._id}>
              
//               <div className="w-32 h-32 bg-gray-100 mr-4 rounded-2xl gap-4 p-4 grow shrink-0">
//                 {place.photos.length > 0 && (
//                   <img src={"http://localhost:3000/uploads/" + place.photos[0]} alt="" />
//                 )}
//               </div>
//               <div className="grow-0 shrink">
//               <h2 className="text-xl font-semibold">{place.title}</h2>
//               <p className="text-sm mt-2">{place.description}</p>
//               </div>
//           </Link>
//           ))}
//         </div>
      

      
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import AccountNav from "../AccountNav";

// export default function PlacesPage() {
//   const [places, setPlaces] = useState([]); 

//   useEffect(() => {
    
//     axios.get("/places").then(({ data }) => {
//       setPlaces(data);
//     });
//   }, []);

//   return (
//     <div>
//       <AccountNav />

//       <div className="text-center mt-4">
//         <h1 className="text-2xl font-semibold">List of All Added Places</h1>
//         <Link
//           to="/account/places/new"
//           className="inline-flex gap-1 bg-pink-400 text-white px-6 py-2 rounded-full mt-4"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 4.5v15m7.5-7.5h-15"
//             />
//           </svg>
//           Add New Place
//         </Link>
//       </div>

//       <div className="mt-6 space-y-4">
//         {places.length === 0 && (
//           <p className="text-gray-500 text-center">No places added yet.</p>
//         )}

//         {places.map((place) => (
//           <Link
//             to={`/account/places/${place._id}`}
//             className="flex bg-gray-200 p-4 rounded-2xl cursor-pointer hover:bg-gray-300 transition"
//             key={place._id}
//           >
            
//       {Array.isArray(place.addedPhotos) && place.addedPhotos.length > 0 ? (
//         <div className="w-32 h-32 bg-gray-100 mr-4 rounded-2xl flex overflow-hidden shrink-0">
//           {place.addedPhotos.map((photo, index) => (
//             <img
//               key={index}
//               src={`http://localhost:3000/uploads/${photo}`}
//               alt={place.title || "Place image"}
//               className="w-full h-32 object-cover"
//               onError={(e) => (e.target.src = "/placeholder.png")}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="h-32 flex items-center justify-center bg-gray-100 text-gray-400">
//           No Images
//         </div>
//       )}


//             {/* Details */}
//             <div className="flex flex-col justify-between grow-0 shrink">
//               <div>
//                 <h2 className="text-xl font-semibold">{place.title}</h2>
//                 <p className="text-gray-600 text-sm mt-1">{place.description}</p>
//               </div>

//               {/*  perks  */}
//               {Array.isArray(place.perks) && place.perks.length > 0 && (
//                 <div className="mt-2 flex flex-wrap gap-2">
//                   {place.perks.map((perk) => (
//                     <span
//                       key={perk}
//                       className="bg-gray-300 text-gray-800 text-xs px-2 py-1 rounded-full"
//                     >
//                       {perk}
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }



// import { Link, useParams,Navigate } from "react-router-dom";
// import PlacesFormPage from "./PlacesFormPage.jsx";
// import { useState,useEffect } from "react";

// import Perks from "../Perks.jsx";
// import axios from "axios";
// import PhotoUploader from "../PhotoUploader.jsx";
// import AccountNav from "../AccountNav.jsx";



// export default function PlacesPage() {
//   const[places,setPlaces] = useState([]);
//   useEffect(() => {
//     axios.get('/places').then(({data}) => {
//       setPlaces(data);
//     });
//   }, []);

//   return (
//     <div>
//       <AccountNav/>
      
//         <div className="text-center">
//           LIST OF all added places
//           <br />
//           <Link
//             to="/account/places/new"
//             className="inline-flex gap-1 bg-pink-400 text-white px-6 py-2 rounded-full"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="size-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M12 4.5v15m7.5-7.5h-15"
//               />
//             </svg>
//             Add New Place
//           </Link>
//         </div>
//         <div>
//           {places.length > 0 && places.map(place => (
//            <Link to={`/account/places/${place._id}`} className="flex bg-gray-200 p-4 rounded-2xl mb-4 cursor-pointer" key={place._id}>
              
//               <div className="w-32 h-32 bg-gray-100 mr-4 rounded-2xl gap-4 p-4 grow shrink-0">
//                 {place.photos.length > 0 && (
//                   <img src={"http://localhost:3000/uploads/" + place.photos[0]} alt="" />
//                 )}
//               </div>
//               <div className="grow-0 shrink">
//               <h2 className="text-xl font-semibold">{place.title}</h2>
//               <p className="text-sm mt-2">{place.description}</p>
//               </div>
//           </Link>
//           ))}
//         </div>
      

      
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import AccountNav from "../AccountNav";

// export default function PlacesPage() {
//   const [places, setPlaces] = useState([]); // initialize with empty array

//   useEffect(() => {
//     // Fetch all places for this user
//     axios.get("/places").then(({ data }) => {
//       setPlaces(data);
//     });
//   }, []);

//   return (
//     <div>
//       <AccountNav />

//       <div className="text-center mt-4">
//         <h1 className="text-2xl font-semibold">List of All Added Places</h1>
//         <Link
//           to="/account/places/new"
//           className="inline-flex gap-1 bg-pink-400 text-white px-6 py-2 rounded-full mt-4"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 4.5v15m7.5-7.5h-15"
//             />
//           </svg>
//           Add New Place
//         </Link>
//       </div>

//       <div className="mt-6 space-y-4">
//         {places.length === 0 && (
//           <p className="text-gray-500 text-center">No places added yet.</p>
//         )}

//         {places.map((place) => (
//           <Link
//             to={`/account/places/${place._id}`}
//             className="flex bg-gray-200 p-4 rounded-2xl cursor-pointer hover:bg-gray-300 transition"
//             key={place._id}
//           >
//             {/* Photo container */}
//             {/* <div className="w-32 h-32 bg-gray-100 mr-4 rounded-2xl flex items-center justify-center overflow-hidden">
//               {Array.isArray(place.addedPhotos) && place.addedPhotos.length > 0 ? (
//                 <img
//                   src={`http://localhost:3000/uploads/${place.addedPhotos[0]}`}
//                   alt={place.title || "Place image"}
//                   className="object-cover w-full h-full rounded-2xl"
//                 />
//               ) : (
//                 <span className="text-gray-400 text-sm">No Image</span>
//               )}
//             </div> */}
//             {/* Images */}
//       {Array.isArray(place.addedPhotos) && place.addedPhotos.length > 0 ? (
//         <div className="w-32 h-32 bg-gray-100 mr-4 rounded-2xl flex overflow-hidden shrink-0">
//           {place.addedPhotos.map((photo, index) => (
//             <img
//               key={index}
//               src={`http://localhost:3000/uploads/${photo}`}
//               alt={place.title || "Place image"}
//               className="w-full h-32 object-cover"
//               onError={(e) => (e.target.src = "/placeholder.png")}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="h-32 flex items-center justify-center bg-gray-100 text-gray-400">
//           No Images
//         </div>
//       )}


//             {/* Details */}
//             <div className="flex flex-col justify-between grow-0 shrink">
//               <div>
//                 <h2 className="text-xl font-semibold">{place.title}</h2>
//                 <p className="text-gray-600 text-sm mt-1">{place.description}</p>
//               </div>

//               {/* Optional perks display */}
//               {Array.isArray(place.perks) && place.perks.length > 0 && (
//                 <div className="mt-2 flex flex-wrap gap-2">
//                   {place.perks.map((perk) => (
//                     <span
//                       key={perk}
//                       className="bg-gray-300 text-gray-800 text-xs px-2 py-1 rounded-full"
//                     >
//                       {perk}
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AccountNav from "../AccountNav";

export default function PlacesPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = () => {
    axios.get("/places").then(({ data }) => {
      setPlaces(data);
    });
  };

  const handleDelete = async (placeId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this place?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`/places/${placeId}`);
      setPlaces((prev) => prev.filter((place) => place._id !== placeId));
    } catch (err) {
      console.error("Error deleting place:", err);
      alert("Failed to delete this place. Please try again.");
    }
  };

  return (
    <div>
      <AccountNav />

      <div className="text-center mt-4">
        <h1 className="text-2xl font-semibold">List of All Added Places</h1>
        <Link
          to="/account/places/new"
          className="inline-flex gap-1 bg-pink-400 text-white px-6 py-2 rounded-full mt-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add New Place
        </Link>
      </div>

      <div className="mt-6 space-y-4">
        {places.length === 0 && (
          <p className="text-gray-500 text-center">No places added yet.</p>
        )}

        {places.map((place) => (
          <div
            key={place._id}
            className="flex bg-gray-200 p-4 rounded-2xl items-center justify-between hover:bg-gray-300 transition"
          >
            
            <Link
              to={`/account/places/${place._id}`}
              className="flex items-center grow gap-4"
            >
              {/* Image */}
              {Array.isArray(place.addedPhotos) && place.addedPhotos.length > 0 ? (
                <div className="w-32 h-32 bg-gray-100 rounded-2xl flex overflow-hidden shrink-0">
                  <img
                    src={`http://localhost:3000/uploads/${place.addedPhotos[0]}`}
                    alt={place.title || "Place image"}
                    className="w-full h-32 object-cover"
                    onError={(e) => (e.target.src = "/placeholder.png")}
                  />
                </div>
              ) : (
                <div className="h-32 w-32 flex items-center justify-center bg-gray-100 text-gray-400 rounded-2xl">
                  No Images
                </div>
              )}

              {/* Details */}
              <div className="flex flex-col justify-between">
                <h2 className="text-xl font-semibold">{place.title}</h2>
                <p className="text-gray-600 text-sm mt-1">{place.description}</p>
                {Array.isArray(place.perks) && place.perks.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {place.perks.map((perk) => (
                      <span
                        key={perk}
                        className="bg-gray-300 text-gray-800 text-xs px-2 py-1 rounded-full"
                      >
                        {perk}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>

            {/* Delete Button */}
            <button
              onClick={() => handleDelete(place._id)}
              className="ml-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow-md transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
