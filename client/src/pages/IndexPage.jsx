

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function IndexPage() {
//   const [location, setLocation] = useState("");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [guests, setGuests] = useState(1);

//   const navigate = useNavigate();

//   function handleSearch() {
//     if (!location) return; // prevent empty search
//     navigate("/properties", {
//       state: { location, checkIn, checkOut, guests },
//     });
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="relative bg-pink-500 text-white py-20 text-center">
//         <h1 className="text-4xl font-bold mb-4">Find your next stay</h1>
//         <p className="text-lg">Explore amazing homes and unique experiences</p>
//       </div>

//       {/* Search Bar */}
//       <div className="flex flex-col md:flex-row items-center justify-center -mt-8 px-4">
//         <div className="flex flex-wrap md:flex-nowrap bg-white shadow-lg rounded-full p-2 w-full max-w-4xl gap-2">
//           <input
//             type="text"
//             placeholder="Where are you going?"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="flex-1 px-4 py-2 rounded-full outline-none text-sm border border-gray-200"
//           />
//           <input
//             type="date"
//             value={checkIn}
//             onChange={(e) => setCheckIn(e.target.value)}
//             className="px-4 py-2 rounded-full outline-none text-sm border border-gray-200"
//           />
//           <input
//             type="date"
//             value={checkOut}
//             onChange={(e) => setCheckOut(e.target.value)}
//             className="px-4 py-2 rounded-full outline-none text-sm border border-gray-200"
//           />
//           <input
//             type="number"
//             min="1"
//             value={guests}
//             onChange={(e) => setGuests(e.target.value)}
//             className="w-20 px-4 py-2 rounded-full outline-none text-sm border border-gray-200"
//           />
//           <button
//             onClick={handleSearch}
//             className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
//           >
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Featured Properties Section */}
//       <div className="mt-12 px-6">
//         <h2 className="text-2xl font-semibold mb-6">Featured Properties</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white shadow-md rounded-xl overflow-hidden">
//             <img
//               src="https://source.unsplash.com/400x250/?house"
//               alt="Property"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="font-semibold">Cozy Apartment</h3>
//               <p className="text-gray-500 text-sm">Cape Town, South Africa</p>
//             </div>
//           </div>
//           <div className="bg-white shadow-md rounded-xl overflow-hidden">
//             <img
//               src="https://source.unsplash.com/400x250/?villa"
//               alt="Property"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="font-semibold">Luxury Villa</h3>
//               <p className="text-gray-500 text-sm">Durban, South Africa</p>
//             </div>
//           </div>
//           <div className="bg-white shadow-md rounded-xl overflow-hidden">
//             <img
//               src="https://source.unsplash.com/400x250/?hotel"
//               alt="Property"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="font-semibold">Modern Loft</h3>
//               <p className="text-gray-500 text-sm">Johannesburg, South Africa</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




export default function IndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      
      <div className="relative h-[90vh] w-full flex items-center justify-center px-6">
        <div className="max-w-6xl w-full mx-auto rounded-2xl overflow-hidden shadow-lg relative">
          
          <img
            src="https://i.pinimg.com/736x/83/c5/3c/83c53c8490a44d4956a1cfddf196422c.jpg"
            alt="Cozy house"
            className="w-full h-[90vh] object-cover transform scale-100 animate-slow-zoom"
          />

          
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>

          
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-16 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>

          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl animate-fadeIn">
              YOU DO NOT KNOW WHERE ARE GOING
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 animate-fadeIn delay-500 flex items-center justify-center gap-2">
          I am here to assist
          <span className="inline-block w-8 h-8 md:w-10 md:h-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="w-full h-full">
            <path
             fillRule="evenodd"
             d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z"
             clipRule="evenodd"
            />
            </svg>
          </span>
         </p>

          </div>
        </div>
      </div>

      {/* inspiration section */}
      <div className="mt-16 px-6">
        <div className="max-w-6xl mx-auto bg-white text-black rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Inspiration for your next trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="https://i.pinimg.com/736x/03/ea/ac/03eaacc5da0e36d8aaee1dfe60a23309.jpg"
              alt="Beach"
              className="rounded-xl shadow-md object-cover w-full h-60"
            />
            <img
              src="https://i.pinimg.com/736x/de/18/5e/de185e748c000812f41f8b7f62e82cb3.jpg"
              alt="Mountain"
              className="rounded-xl shadow-md object-cover w-full h-60"
            />
            <img
              src="https://i.pinimg.com/736x/94/b4/20/94b420d6ca60cf5ea8cd5f312752759b.jpg"
              alt="City"
              className="rounded-xl shadow-md object-cover w-full h-60"
            />
          </div>
        </div>
      </div>

      {/* Food Section */}
      <div className="mt-16 px-6">
        <div className="max-w-6xl mx-auto bg-white text-black rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Food & Culinary Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="https://i.pinimg.com/1200x/e3/84/8a/e3848a4e7c9545c0cb7cc18a0778d4ed.jpg"
              alt="Food"
              className="rounded-xl shadow-md object-cover w-full h-60"
            />
            <img
              src="https://i.pinimg.com/1200x/ca/e9/99/cae99990e50f42f1677c72550ce536b0.jpg"
              alt="Restaurant"
              className="rounded-xl shadow-md object-cover w-full h-60"
            />
            <img
              src="https://i.pinimg.com/736x/07/c4/00/07c4001e886279da340a46f14bc6ec35.jpg"
              alt="Wine"
              className="rounded-xl shadow-md object-cover w-full h-60"
            />
          </div>
        </div>
      </div>

      
<footer className="mt-20 bg-black text-gray-300 py-12 border-t border-gray-700">
  
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
    <div>
      <h3 className="font-semibold text-lg mb-2 text-white">About</h3>
      <p className="text-sm text-gray-400">
        Learn about our mission to connect travelers with unforgettable stays.
      </p>
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-2 text-white">Support</h3>
      <p className="text-sm text-gray-400">
        Need help? Our team is here to assist with bookings, cancellations, and more.
      </p>
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-2 text-white">Community</h3>
      <p className="text-sm text-gray-400">
        Join a global community of explorers sharing unique stays and experiences.
      </p>
    </div>
  </div>

  
  <div className="text-center text-gray-400 text-sm flex flex-col md:flex-row items-center justify-center gap-2">
    <p>© {new Date().getFullYear()} Your Airbnb Clone. All rights reserved.</p>
    <p className="flex items-center gap-1">
      Made with 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-5 h-5 md:w-6 md:h-6 inline-block">
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
      </svg>
      by Mokgadi
    </p>
  </div>
</footer>


      {/* animation */}
      <style>
        {`
          @keyframes slow-zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
          }
          .animate-slow-zoom {
            animation: slow-zoom 20s ease-in-out infinite alternate;
          }

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1.5s ease forwards;
          }
          .delay-500 {
            animation-delay: 0.5s;
          }
        `}
      </style>
    </div>
  );
}


