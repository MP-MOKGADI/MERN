// import { Link } from 'react-router-dom'
// import { useContext } from 'react'
// import { UserContext } from '../UserContext.jsx'


// export default function Header() {
//   const { user } = useContext(UserContext);
//   return(
//          <div>
//       <header className=' flex justify-between '>
//         <Link to='/' className='flex items-center gap-2'>
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 -rotate-90">
//              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
//              </svg>
//           <span className='font-bold text-xl'>airbnb</span>

//         </Link>
//         <div className='flex border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300 gap-3 items-center'>
//           <div>Anywhere</div>
//           <div className="border-l border-gray-300"></div>
//           <div>Any week</div>
//           <div className="border-l border-gray-300"></div>
//           <div>Add guests</div>
//           <button className='bg-pink-400 text-white p-2 rounded-full'>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
//                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//             </svg>

//           </button>
//         </div>
//         <Link  to={user ? '/account' : '/login'} className='flex border border-gray-300 rounded-full py-2 px-4  gap-3 items-center'>
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//           </svg>
//           <div className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden'>
//            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 relative top-1">
//                 <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
//             </svg>


//           </div>

//           {!!user && (
//             <div>{user.name}</div>
//           )}

//         </Link>
//       </header>

//     </div>
//     )
// }



import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../UserContext.jsx'

export default function Header() {
  // const { user } = useContext(UserContext);
  const { user, ready } = useContext(UserContext);

  return (
    <div>
      <header className="flex justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 -rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
          <span className="font-bold text-xl">airbnb</span>
        </Link>

        {/* Search bar */}
        <div className="flex border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300 gap-3 items-center">
          <div>Anywhere</div>
          <div className="border-l border-gray-300"></div>
          <div>Any week</div>
          <div className="border-l border-gray-300"></div>
          <div>Add guests</div>
          <button className="bg-pink-400 text-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>

        {/* Account/Login */}
        <Link
          to={user ? "/account" : "/login"}
          className="flex border border-gray-300 rounded-full py-2 px-4 gap-3 items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 relative top-1"
            >
              <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
            </svg>
            {ready && user ? user.name[0] : "?"}
          </div>

          {ready && user && <div>{user.name}</div>}
        </Link>
      </header>
    </div>
  );
}






// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "../UserContext.jsx";

// export default function Header() {
//   const { user, ready } = useContext(UserContext);

//   return (
//     <header className="flex justify-between items-center p-4 border-b shadow-sm">
//       {/* Logo */}
//       <Link to="/" className="flex items-center gap-2">
//         <span className="font-bold text-xl">airbnb</span>
//       </Link>

//       {/* Search bar */}
//       <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md items-center">
//         <div>Anywhere</div>
//         <div className="border-l border-gray-300"></div>
//         <div>Any week</div>
//         <div className="border-l border-gray-300"></div>
//         <div>Add guests</div>
//         <button className="bg-pink-400 text-white p-2 rounded-full">
//           🔍
//         </button>
//       </div>

//       {/* Account/Login */}
//       <Link
//         to={user ? "/account" : "/login"}
//         className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4"
//       >
//         {/* Avatar */}
//         <div className="bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
//           {ready && user ? user.name[0] : "?"}
//         </div>
//         {/* Name */}
//         {ready && user && <div>{user.name}</div>}
//       </Link>
//     </header>
//   );
// }


