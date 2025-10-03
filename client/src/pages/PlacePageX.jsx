

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import BookingWidget from "../BookingWidget.jsx";

// export default function PlacePage() {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);
//   const [showAllPhotos, setShowAllPhotos] = useState(false);
//   const [numberOfGuests, setNumberOfGuests] = useState(1);

//   useEffect(() => {
//     if (!id) return;
//     axios.get(`/places/${id}`).then((response) => {
//       setPlace(response.data);
//     });
//   }, [id]);

//   if (!place) return "";

//   // ---------------- FULL SCREEN PHOTO GALLERY -----------------
//   if (showAllPhotos) {
//     return (
//       <div className="absolute inset-0 bg-black text-white min-h-screen z-50 overflow-y-auto">
//         <div className="p-8 grid gap-4">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-3xl font-semibold">
//               Photos of {place.title}
//             </h2>
//             <button
//               onClick={() => setShowAllPhotos(false)}
//               className="bg-white text-black border border-gray-300 rounded-md py-1 px-3 shadow hover:bg-gray-100 transition"
//             >
//               Close
//             </button>
//           </div>
//           {place?.addedPhotos?.length > 0 &&
//             place.addedPhotos.map((photo) => (
//               <div key={photo} className="mb-4">
//                 <img
//                   src={`http://localhost:3000/uploads/${photo}`}
//                   alt=""
//                   className="w-full object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//         </div>
//       </div>
//     );
//   }

//   // ---------------- MAIN PAGE -----------------
//   return (
//     <div className="mt-8 bg-gray-50 p-6 md:p-10 mx-auto max-w-6xl rounded-2xl shadow-sm">
//       {/* TITLE + RATING */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">{place.title}</h1>
//           <div className="flex items-center text-sm text-gray-600 mt-1">
//             ⭐ <span className="ml-1 font-medium">4.8</span>
//             <span className="ml-2 underline cursor-pointer">
//               (120 reviews)
//             </span>
//           </div>
//           <a
//             className="block text-pink-600 hover:text-pink-700 underline mt-1"
//             target="_blank"
//             href={`https://maps.google.com/?q=${place.address}`}
//             rel="noreferrer"
//           >
//             📍 {place.address}
//           </a>
//         </div>
//       </div>

//       {/* PHOTO GALLERY */}
//       <div className="relative mt-6">
//         <div className="grid grid-cols-[2fr_1fr] gap-2 h-[500px] rounded-2xl overflow-hidden">
//           {/* Big left photo */}
//           {place.addedPhotos[0] && (
//             <img
//               onClick={() => setShowAllPhotos(true)}
//               className="w-full h-full object-cover cursor-pointer"
//               src={`http://localhost:3000/uploads/${place.addedPhotos[0]}`}
//               alt=""
//             />
//           )}
//           {/* Right column */}
//           <div className="grid grid-rows-2 gap-2 h-full">
//             {place.addedPhotos[1] && (
//               <img
//                 onClick={() => setShowAllPhotos(true)}
//                 className="w-full h-full object-cover cursor-pointer"
//                 src={`http://localhost:3000/uploads/${place.addedPhotos[1]}`}
//                 alt=""
//               />
//             )}
//             {place.addedPhotos[2] && (
//               <img
//                 onClick={() => setShowAllPhotos(true)}
//                 className="w-full h-full object-cover cursor-pointer"
//                 src={`http://localhost:3000/uploads/${place.addedPhotos[2]}`}
//                 alt=""
//               />
//             )}
//           </div>
//         </div>
//         {/* Button */}
//         <button
//           onClick={() => setShowAllPhotos(true)}
//           className="absolute bottom-4 right-4 bg-white border border-gray-300 rounded-lg py-2 px-4 shadow-md hover:bg-gray-100 transition font-medium text-sm"
//         >
//           Show all photos
//         </button>
//       </div>

//       {/* DESCRIPTION + BOOKING */}
//       <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 mt-10">
//         {/* Left side - details */}
//         <div>
//           <h2 className="text-2xl font-semibold mb-3">About this place</h2>
//           <p className="text-gray-700 leading-7 mb-6">{place.description}</p>

//           <div className="bg-white shadow p-6 rounded-2xl mb-6">
//             <label className="block font-semibold mb-2">
//               Number of Guests
//             </label>
//             <input
//               type="number"
//               min="1"
//               max={place.maxGuests}
//               className="w-full rounded-lg border border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-200 mb-2 px-3 py-2"
//               value={numberOfGuests}
//               onChange={(e) => setNumberOfGuests(e.target.value)}
//             />
//             <p className="text-sm text-gray-500">
//               Max number of guests: {place.maxGuests}
//             </p>
//           </div>

//           {/* Perks */}
//           {place.perks?.length > 0 && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-3">What this place offers</h2>
//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
//                 {place.perks.map((perk) => (
//                   <li key={perk} className="flex items-center gap-2">
//                     ✅ {perk}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>

//         {/* Right side - booking widget */}
//         <div>
//           <BookingWidget place={place} />
//         </div>
//       </div>

//       {/* Extra Info */}
//       <div className="mt-12 border-t pt-6">
//         <h2 className="text-2xl font-semibold mb-3">Extra Info</h2>
//         <p className="text-gray-700 leading-7">{place.extraInfo || place.description}</p>
//       </div>
//     </div>
//   );
// }


// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import BookingWidget from "../BookingWidget.jsx";

// export default function PlacePage() {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);
//   const [showAllPhotos, setShowAllPhotos] = useState(false);
//   const [numberOfGuests, setNumberOfGuests] = useState(1);

  
//   const reviews = [
//     { _id: 1, userName: "Emily Carter", comment: "Loved the stay! Super cozy and clean.", rating: 5 },
//     { _id: 2, userName: "James Wilson", comment: "Great location, walking distance to restaurants.", rating: 4 },
//     { _id: 3, userName: "Sophia Martinez", comment: "The host was amazing and very responsive.", rating: 5 },
//     { _id: 4, userName: "Liam Thompson", comment: "Good place overall, but a bit noisy at night.", rating: 3 },
//     { _id: 5, userName: "Olivia Johnson", comment: "Beautiful apartment, very comfortable beds.", rating: 5 },
//     { _id: 6, userName: "Noah Miller", comment: "Perfect spot for a weekend getaway.", rating: 4 },
//   ];

//   useEffect(() => {
//     if (!id) return;
//     axios.get(`/places/${id}`).then((response) => {
//       setPlace(response.data);
//     });
//   }, [id]);

//   if (!place) return "";

  
//   if (showAllPhotos) {
//     return (
//       <div className="absolute inset-0 bg-black text-white min-h-screen z-50 overflow-y-auto">
//         <div className="p-8 grid gap-4">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-3xl font-semibold">Photos of {place.title}</h2>
//             <button
//               onClick={() => setShowAllPhotos(false)}
//               className="bg-white text-black border border-gray-300 rounded-md py-1 px-3 shadow hover:bg-gray-100 transition"
//             >
//               Close
//             </button>
//           </div>
//           {place?.addedPhotos?.length > 0 &&
//             place.addedPhotos.map((photo) => (
//               <div key={photo} className="mb-4">
//                 <img
//                   src={`http://localhost:3000/uploads/${photo}`}
//                   alt=""
//                   className="w-full object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//         </div>
//       </div>
//     );
//   }

  
//   return (
//     <div className="mt-8 bg-gray-50 p-6 md:p-10 mx-auto max-w-6xl rounded-2xl">
      
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//         <h1 className="text-3xl font-bold text-gray-900">{place.title}</h1>
//         <div className="flex items-center justify-between w-full md:w-auto mt-2 md:mt-0">
//           <div className="flex items-center text-sm text-gray-600">
//             ⭐ <span className="ml-1 font-medium">4.8</span>
//             <span className="ml-2">(120 reviews)</span>
//           </div>
//           <a
//             className="block text-pink-600 hover:text-pink-700 underline ml-auto md:ml-4"
//             target="_blank"
//             href={`https://maps.google.com/?q=${place.address}`}
//             rel="noreferrer"
//           >
//             📍 {place.address}
//           </a>
//         </div>
//       </div>

      
//       <div className="relative mb-10">
//         <div className="grid grid-cols-[2fr_1fr] gap-2 h-[500px] rounded-2xl overflow-hidden">
//           {place.addedPhotos[0] && (
//             <img
//               onClick={() => setShowAllPhotos(true)}
//               className="w-full h-full object-cover cursor-pointer"
//               src={`http://localhost:3000/uploads/${place.addedPhotos[0]}`}
//               alt=""
//             />
//           )}
//           <div className="grid grid-rows-2 gap-2 h-full">
//             {place.addedPhotos[1] && (
//               <img
//                 onClick={() => setShowAllPhotos(true)}
//                 className="w-full h-full object-cover cursor-pointer"
//                 src={`http://localhost:3000/uploads/${place.addedPhotos[1]}`}
//                 alt=""
//               />
//             )}
//             {place.addedPhotos[2] && (
//               <img
//                 onClick={() => setShowAllPhotos(true)}
//                 className="w-full h-full object-cover cursor-pointer"
//                 src={`http://localhost:3000/uploads/${place.addedPhotos[2]}`}
//                 alt=""
//               />
//             )}
//           </div>
//         </div>
//         <button
//           onClick={() => setShowAllPhotos(true)}
//           className="absolute bottom-4 right-4 bg-white rounded-lg py-2 px-4 shadow-md hover:bg-gray-100 transition font-medium text-sm"
//         >
//           Show all photos
//         </button>
//       </div>

      
//       <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 mb-12">
//         <div>
//           <h2 className="text-2xl font-semibold mb-3">About this place</h2>
//           <p className="text-gray-700 leading-7 mb-6">{place.description}</p>

//           {/* <div className="mb-6">
//             <label className="block font-semibold mb-2">Number of Guests</label>
//             <input
//               type="number"
//               min="1"
//               max={place.maxGuests}
//               className="w-full rounded-lg border border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-200 mb-2 px-3 py-2"
//               value={numberOfGuests}
//               onChange={(e) => setNumberOfGuests(e.target.value)}
//             />
//             <p className="text-sm text-gray-500">
//               Max number of guests: {place.maxGuests}
//             </p>
//           </div> */}

//           {/* Perks */}
//           {place.perks?.length > 0 && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-3">What this place offers</h2>
//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
//                 {place.perks.map((perk) => (
//                   <li key={perk} className="flex items-center gap-2">
//                     ✅ {perk}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>

        
//         <div>
//           <BookingWidget place={place} />
//         </div>
//       </div>

      
//       <div className="mb-12">
//         <h2 className="text-2xl font-semibold mb-3">Extra Info</h2>
//         <p className="text-gray-700 leading-7">{place.extraInfo || place.description}</p>
//       </div>

      
//       <div className="mb-12">
//         <h2 className="text-2xl font-semibold mb-6">Reviews</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {reviews.map((review) => (
//             <div
//               key={review._id}
//               className="bg-pink-50 p-4 rounded-lg"
//             >
//               <p className="font-semibold text-gray-800 mb-1">{review.userName}</p>
//               <p className="text-gray-700 text-sm mb-2">{review.comment}</p>
//               <p className="text-sm text-gray-600">⭐ {review.rating}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// import { useParams } from 'react-router-dom';
// import { useEffect,useState } from 'react';
// import axios from 'axios';
// import BookingWidget from "../BookingWidget.jsx";


// export default function PlacePage() {

//     const {id} = useParams();
//     const [place, setPlace] = useState(null);
//     const [showAllPhotos, setShowAllPhotos] = useState(false);
//     const [numberOfGuests, setNumberOfGuests] = useState(1);
//     useEffect(() => {
//         if (!id) {
//           return;
//         }
//         axios.get(`/places/${id}`).then(response => {

//             setPlace(response.data);


//         });
//     }, [id]);
//     if (!place) {
//         return '';
//     }
//     if (showAllPhotos) {
//         return (
//             <div className='absolute inset-0 bg-black text-white min-h-screen'>
//                 <div className='bg-black p-8 grid gap-4'>
//                     <div>
//                         <h2 className='text-3xl mr-48'>Photos of {place.title}</h2>
//                         <button onClick={() => setShowAllPhotos(false)} className='fixed right-8 top-8 shadow shadow-black bg-white text-black border border-gray-300 rounded-md py-1 px-2'>Close</button>
//                     </div>
//                      {place?.addedPhotos?.length > 0 && place.addedPhotos.map(photo => (
//                     <div key={photo} className="mb-4">
//                         <img src={`http://localhost:3000/uploads/${photo}`} alt="" className="w-full object-cover" />
//                     </div>
//                 ))} 

//                 </div>
               
//             </div>
//         )
//     }
    
//     return (
//         <div className='mt-8 bg-gray-100 p-8 mx-8 py-8'>
//             <h1 className='text-3xl '>{place.title}</h1>
//             <a className='block font-semibold underline' target='_blank' href={`https://maps.google.com/?q=${place.address}`} >{place.address}</a>
//             <div className='relative'>
//                 <div className='grid grid-cols-[2fr_1fr] gap-2 mt-4 rounded-2xl overflow-hidden relative h-[500px]'>
//                 <div>
//                     {place.addedPhotos[0] && (
                        
//                         <div>
//                             <img onClick={() => setShowAllPhotos(true)} className='aspect-square object-cover' src={`http://localhost:3000/uploads/${place.addedPhotos[0]}`} alt='' />
//                         </div>
//                     )}
//                 </div>
//                 <div className=' '>
//                      {place.addedPhotos[1] && (
//                         <img onClick={() => setShowAllPhotos(true)} className='aspect-square object-cover' src={`http://localhost:3000/uploads/${place.addedPhotos[1]}`} alt='' />
//                     )}
//                      {place.addedPhotos[2] && (
//                         <div className='border border-gray-300 overflow-hidden'>
//                             <img onClick={() => setShowAllPhotos(true)} className='aspect-square object-cover relative top-2' src={`http://localhost:3000/uploads/${place.addedPhotos[2]}`} alt='' />
//                         </div>
//                     )}

//                 </div>
//                 <button onClick={() => setShowAllPhotos(true)} 
//                 className='absolute  bg-white border border-gray-300 rounded-md py-1 px-3 shadow-md hover:bg-gray-100 transition font-medium text-sm'>
//                     Show more photos</button>
//             </div>
//             {/* <div className='mt-4 mb-4 text-lg leading-6'>
//                 <h2 className='font-semibold text-2xl mb-2'>Description</h2>
//                 {place.description}
//             </div> */}
//                 <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 mt-8 mb-8'>
//                     <div>
//                         <div className='mt-4 mb-4 text-lg leading-6'>
//                             <h2 className='font-semibold text-2xl mb-2'>Description</h2>
//                             {place.description}
//                         </div>
//                         <div className=" shadow p-6 rounded-2xl mr-4">
//                         <label className="block font-semibold mb-2">Number of Guests</label>
//                         <input
//                         type="number"
//                         min="1"
//                         max={place.maxGuests}
//                         className="w-full rounded-lg border border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-200 mb-2"
//                         value={numberOfGuests}
//                         onChange={(e) => setNumberOfGuests(e.target.value)}
//                         />
//                         <p className="text-sm text-gray-500">
//                             Max number of guests: {place.maxGuests}
//                         </p>
                        
//                     </div>

//                     </div>
                    


//                     <div><BookingWidget place={place} /></div>

                   
                    

//                 </div>
//                 <div>
//                     <h2 className='font-semibold text-2xl mb-2'>Extra Info</h2>
//                 </div>
//                 <div className='text-sm text-gray-700 leading-6 mt-2'>{place.description}</div>
//                 <div className='-mx-8 px-8 py-8 '>
//                     {place.perks?.length > 0 && (
//                         <div className='mt-4'>
//                             <h2 className='font-semibold text-2xl mb-2'>Perks</h2>
//                             <ul className='list-disc ml-5'>
//                                 {place.perks.map(perk => (
//                                     <li key={perk}>{perk}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}
//                 </div>

//             </div>
            
//         </div>
//     )
// }

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import BookingWidget from "../BookingWidget.jsx";

// export default function PlacePage() {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);
//   const [showAllPhotos, setShowAllPhotos] = useState(false);
//   const [numberOfGuests, setNumberOfGuests] = useState(1);

//   useEffect(() => {
//     if (!id) return;
//     axios.get(`/places/${id}`).then((response) => {
//       setPlace(response.data);
//     });
//   }, [id]);

//   if (!place) return "";

//   // ---------------- FULL SCREEN PHOTO GALLERY -----------------
//   if (showAllPhotos) {
//     return (
//       <div className="absolute inset-0 bg-black text-white min-h-screen z-50 overflow-y-auto">
//         <div className="p-8 grid gap-4">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-3xl font-semibold">
//               Photos of {place.title}
//             </h2>
//             <button
//               onClick={() => setShowAllPhotos(false)}
//               className="bg-white text-black border border-gray-300 rounded-md py-1 px-3 shadow hover:bg-gray-100 transition"
//             >
//               Close
//             </button>
//           </div>
//           {place?.addedPhotos?.length > 0 &&
//             place.addedPhotos.map((photo) => (
//               <div key={photo} className="mb-4">
//                 <img
//                   src={`http://localhost:3000/uploads/${photo}`}
//                   alt=""
//                   className="w-full object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//         </div>
//       </div>
//     );
//   }

//   // ---------------- MAIN PAGE -----------------
//   return (
//     <div className="mt-8 bg-gray-50 p-6 md:p-10 mx-auto max-w-6xl rounded-2xl shadow-sm">
//       {/* TITLE + RATING */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">{place.title}</h1>
//           <div className="flex items-center text-sm text-gray-600 mt-1">
//             ⭐ <span className="ml-1 font-medium">4.8</span>
//             <span className="ml-2 underline cursor-pointer">
//               (120 reviews)
//             </span>
//           </div>
//           <a
//             className="block text-pink-600 hover:text-pink-700 underline mt-1"
//             target="_blank"
//             href={`https://maps.google.com/?q=${place.address}`}
//             rel="noreferrer"
//           >
//             📍 {place.address}
//           </a>
//         </div>
//       </div>

//       {/* PHOTO GALLERY */}
//       <div className="relative mt-6">
//         <div className="grid grid-cols-[2fr_1fr] gap-2 h-[500px] rounded-2xl overflow-hidden">
//           {/* Big left photo */}
//           {place.addedPhotos[0] && (
//             <img
//               onClick={() => setShowAllPhotos(true)}
//               className="w-full h-full object-cover cursor-pointer"
//               src={`http://localhost:3000/uploads/${place.addedPhotos[0]}`}
//               alt=""
//             />
//           )}
//           {/* Right column */}
//           <div className="grid grid-rows-2 gap-2 h-full">
//             {place.addedPhotos[1] && (
//               <img
//                 onClick={() => setShowAllPhotos(true)}
//                 className="w-full h-full object-cover cursor-pointer"
//                 src={`http://localhost:3000/uploads/${place.addedPhotos[1]}`}
//                 alt=""
//               />
//             )}
//             {place.addedPhotos[2] && (
//               <img
//                 onClick={() => setShowAllPhotos(true)}
//                 className="w-full h-full object-cover cursor-pointer"
//                 src={`http://localhost:3000/uploads/${place.addedPhotos[2]}`}
//                 alt=""
//               />
//             )}
//           </div>
//         </div>
//         {/* Button */}
//         <button
//           onClick={() => setShowAllPhotos(true)}
//           className="absolute bottom-4 right-4 bg-white border border-gray-300 rounded-lg py-2 px-4 shadow-md hover:bg-gray-100 transition font-medium text-sm"
//         >
//           Show all photos
//         </button>
//       </div>

//       {/* DESCRIPTION + BOOKING */}
//       <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 mt-10">
//         {/* Left side - details */}
//         <div>
//           <h2 className="text-2xl font-semibold mb-3">About this place</h2>
//           <p className="text-gray-700 leading-7 mb-6">{place.description}</p>

//           <div className="bg-white shadow p-6 rounded-2xl mb-6">
//             <label className="block font-semibold mb-2">
//               Number of Guests
//             </label>
//             <input
//               type="number"
//               min="1"
//               max={place.maxGuests}
//               className="w-full rounded-lg border border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-200 mb-2 px-3 py-2"
//               value={numberOfGuests}
//               onChange={(e) => setNumberOfGuests(e.target.value)}
//             />
//             <p className="text-sm text-gray-500">
//               Max number of guests: {place.maxGuests}
//             </p>
//           </div>

//           {/* Perks */}
//           {place.perks?.length > 0 && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-3">What this place offers</h2>
//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
//                 {place.perks.map((perk) => (
//                   <li key={perk} className="flex items-center gap-2">
//                     ✅ {perk}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>

//         {/* Right side - booking widget */}
//         <div>
//           <BookingWidget place={place} />
//         </div>
//       </div>

//       {/* Extra Info */}
//       <div className="mt-12 border-t pt-6">
//         <h2 className="text-2xl font-semibold mb-3">Extra Info</h2>
//         <p className="text-gray-700 leading-7">{place.extraInfo || place.description}</p>
//       </div>
//     </div>
//   );
// }


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BookingWidget from "../BookingWidget.jsx";

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  // ---------------- STATIC RANDOM REVIEWS ----------------
  const reviews = [
    { _id: 1, userName: "Emily Carter", comment: "Loved the stay! Super cozy and clean.", rating: 5 },
    { _id: 2, userName: "James Wilson", comment: "Great location, walking distance to restaurants.", rating: 4 },
    { _id: 3, userName: "Sophia Martinez", comment: "The host was amazing and very responsive.", rating: 5 },
    { _id: 4, userName: "Liam Thompson", comment: "Good place overall, but a bit noisy at night.", rating: 3 },
    { _id: 5, userName: "Olivia Johnson", comment: "Beautiful apartment, very comfortable beds.", rating: 5 },
    { _id: 6, userName: "Noah Miller", comment: "Perfect spot for a weekend getaway.", rating: 4 },
  ];

  useEffect(() => {
    if (!id) return;
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return "";

  // ---------------- FULL SCREEN PHOTO GALLERY -----------------
  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-black text-white min-h-screen z-50 overflow-y-auto">
        <div className="p-8 grid gap-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold">Photos of {place.title}</h2>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="bg-white text-black border border-gray-300 rounded-md py-1 px-3 shadow hover:bg-gray-100 transition"
            >
              Close
            </button>
          </div>
          {place?.addedPhotos?.length > 0 &&
            place.addedPhotos.map((photo) => (
              <div key={photo} className="mb-4">
                <img
                  src={`http://localhost:3000/uploads/${photo}`}
                  alt=""
                  className="w-full object-cover rounded-lg"
                />
              </div>
            ))}
        </div>
      </div>
    );
  }

  // ---------------- MAIN PAGE -----------------
  return (
    <div className="mt-8 bg-gray-50 p-6 md:p-10 mx-auto max-w-6xl rounded-2xl">
      {/* TITLE + RATING + LOCATION */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{place.title}</h1>
        <div className="flex items-center justify-between w-full md:w-auto mt-2 md:mt-0">
          <div className="flex items-center text-sm text-gray-600">
            ⭐ <span className="ml-1 font-medium">4.8</span>
            <span className="ml-2">(120 reviews)</span>
          </div>
          <a
            className="block text-pink-600 hover:text-pink-700 underline ml-auto md:ml-4"
            target="_blank"
            href={`https://maps.google.com/?q=${place.address}`}
            rel="noreferrer"
          >
            📍 {place.address}
          </a>
        </div>
      </div>

      {/* PHOTO GALLERY */}
      <div className="relative mb-10">
        <div className="grid grid-cols-[2fr_1fr] gap-2 h-[500px] rounded-2xl overflow-hidden">
          {place.addedPhotos[0] && (
            <img
              onClick={() => setShowAllPhotos(true)}
              className="w-full h-full object-cover cursor-pointer"
              src={`http://localhost:3000/uploads/${place.addedPhotos[0]}`}
              alt=""
            />
          )}
          <div className="grid grid-rows-2 gap-2 h-full">
            {place.addedPhotos[1] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                className="w-full h-full object-cover cursor-pointer"
                src={`http://localhost:3000/uploads/${place.addedPhotos[1]}`}
                alt=""
              />
            )}
            {place.addedPhotos[2] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                className="w-full h-full object-cover cursor-pointer"
                src={`http://localhost:3000/uploads/${place.addedPhotos[2]}`}
                alt=""
              />
            )}
          </div>
        </div>
        <button
          onClick={() => setShowAllPhotos(true)}
          className="absolute bottom-4 right-4 bg-white rounded-lg py-2 px-4 shadow-md hover:bg-gray-100 transition font-medium text-sm"
        >
          Show all photos
        </button>
      </div>

      {/* DESCRIPTION + BOOKING */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-3">About this place</h2>
          <p className="text-gray-700 leading-7 mb-6">{place.description}</p>

          {/* <div className="mb-6">
            <label className="block font-semibold mb-2">Number of Guests</label>
            <input
              type="number"
              min="1"
              max={place.maxGuests}
              className="w-full rounded-lg border border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-200 mb-2 px-3 py-2"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
            />
            <p className="text-sm text-gray-500">
              Max number of guests: {place.maxGuests}
            </p>
          </div> */}

          {/* Perks */}
          {place.perks?.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-3">What this place offers</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                {place.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    ✅ {perk}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Booking Widget */}
        <div>
          <BookingWidget place={place} />
        </div>
      </div>

      {/* Extra Info */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Extra Info</h2>
        <p className="text-gray-700 leading-7">{place.extraInfo || place.description}</p>
      </div>

      {/* ---------------- REVIEWS  ---------------- */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-pink-50 p-4 rounded-lg"
            >
              <p className="font-semibold text-gray-800 mb-1">{review.userName}</p>
              <p className="text-gray-700 text-sm mb-2">{review.comment}</p>
              <p className="text-sm text-gray-600">⭐ {review.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}