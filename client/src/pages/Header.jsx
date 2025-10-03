
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../UserContext.jsx";

export default function Header() {
  const { user, ready } = useContext(UserContext);
  const location = useLocation();
  const isHome = location.pathname === "/"; 

  
  const [locationInput, setLocationInput] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    if (!locationInput) return;
    navigate("/properties", { state: { location: locationInput, checkIn, checkOut } });
  }

  return (
    <header
      className={`flex justify-between items-center p-4 sticky top-0 z-50 shadow-sm transition-colors duration-300 ${
        isHome ? "bg-black" : "bg-white"
      }`}
    >
    
      <Link to="/" className={`flex items-center gap-2 text-2xl font-bold ${isHome ? "text-white" : "text-black"}`}>
        <img
          src="https://svg2raster.fileformat.info/vlz.jsp?svg=%2Flogos%2Fairbnb%2Fairbnb-icon.svg"
          alt="Airbnb Logo"
          className="w-6 h-6 md:w-8 md:h-8"
        />
        Airbnb
      </Link>

      
      <div className="flex flex-1 max-w-xl mx-4 rounded-full shadow-md overflow-hidden bg-white">
        <input
          type="text"
          placeholder="Where are you going?"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
          className="flex-1 px-4 py-2 outline-none text-sm"
        />
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="px-4 py-2 outline-none text-sm"
        />
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="px-4 py-2 outline-none text-sm"
        />
        <button
          onClick={handleSearch}
          className="bg-pink-500 text-white px-4 flex items-center justify-center hover:bg-pink-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>

      
      <Link
        to={user ? "/account" : "/login"}
        className={`flex items-center gap-2 border rounded-full px-4 py-2 hover:shadow-md transition ${
          isHome ? "text-white border-gray-700" : "text-black border-gray-300"
        }`}
      >
        <div className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
          {ready && user ? user.name[0].toUpperCase() : "?"}
        </div>
        {ready && user && <span className="hidden md:block">{user.name}</span>}
      </Link>
    </header>
  );
}






