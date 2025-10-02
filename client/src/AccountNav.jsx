// import { Navigate,useLocation } from "react-router-dom";

// export default function AccountNav() {
//     const {pathname}=useLocation();
//     // const isACtive = pathname ==='/account' && type === 'profile';
//     let subpage = pathname.split('/')?.[2];
//     if (subpage === undefined) {
//         subpage = 'profile';
//     }
    
//     function linkClasses(type = null) {
//     let classes = ' inline-flex gap-1 bg-gray-200 px-4 py-2 rounded-full ml-2';
//     if (type === subpage) {
//       classes = ' inline-flex gap-1 bg-pink-400 text-white px-4 py-2 rounded-full';
//     }
//     return classes;
//   }

//   }

//     return(
//         <div>
//             <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
//         <Link to={'/account'} className={linkClasses('profile')}>
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//         </svg>

//           My Profile
//         </Link>
//         <Link to={'/account/bookings'} className={linkClasses('bookings')}>
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
//         </svg>

//           My Bookings
//         </Link>
//         <Link to={'/account/places'} className={linkClasses('places')}>
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
//         </svg>

//           My Accommodations
//         </Link>
//       </nav>

//         </div>
//     );
// }
// import {Link, useLocation} from "react-router-dom";

// export default function AccountNav() {
//   // const {pathname} = useLocation();
//   // let subpage = pathname.split('/')?.[2];
//   // if (subpage === undefined) {
//   //   subpage = 'profile';
//   // }
//   // function linkClasses (type=null) {
//   //   let classes = 'inline-flex gap-1 py-2 px-6 rounded-full';
//   //   if (type === subpage) {
//   //     classes += ' bg-primary text-white';
//   //   } else {
//   //     classes += ' bg-gray-200';
//   //   }

//    const {pathname}=useLocation();
//     // const isACtive = pathname ==='/account' && type === 'profile';
//     let subpage = pathname.split('/')?.[2];
//     if (subpage === undefined) {
//         subpage = 'profile';
//     }
    
//     function linkClasses(type = null) {
//     let classes = ' inline-flex gap-1 bg-gray-200 px-4 py-2 rounded-full ml-2';
//     if (type === subpage) {
//       classes = ' inline-flex gap-1 bg-pink-400 text-white px-4 py-2 rounded-full';
//     }
//     return classes;
//   }
//   return (
//     <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
//       <Link className={linkClasses('profile')} to={'/account'}>
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
//         </svg>
//         My profile
//       </Link>
//       <Link className={linkClasses('bookings')} to={'/account/bookings'}>
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
//         </svg>
//         My bookings
//       </Link>
//       <Link className={linkClasses('places')} to={'/account/places'}>
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
//         </svg>
//         My accommodations
//       </Link>
//     </nav>
//   );
// }

// import { Link, useLocation } from "react-router-dom";

// export default function AccountNav() {
//   const { pathname } = useLocation();
//   let subpage = pathname.split("/")?.[2]; // e.g. "places", "bookings"
//   if (subpage === undefined) {
//     subpage = "profile";
//   }

//   // function linkClasses(type = null) {
//   //   let classes =
//   //     "inline-flex gap-1 px-4 py-2 rounded-full ml-2 bg-gray-200";
//   //   if (type === subpage) {
//   //     classes =
//   //       "inline-flex gap-1 px-4 py-2 rounded-full ml-2 bg-pink-400 text-white";
//   //   }
//   //   return classes;
//   // }
//   function linkClasses (type=null) {
//     let classes = 'inline-flex gap-1 py-2 px-6 rounded-full';
//     if (type === subpage) {
//       classes += ' bg-pink-400 text-white';
//     } else {
//       classes += ' bg-gray-200';
//     }
//     return classes;
//   }

//   return (
//     <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
//       <Link className={linkClasses("profile")} to="/account">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
//           />
//         </svg>
//         My profile
//       </Link>

//       <Link className={linkClasses("bookings")} to="/account/bookings">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
//           />
//         </svg>
//         My bookings
//       </Link>

//       <Link className={linkClasses("places")} to="/account/places">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
//           />
//         </svg>
//         My accommodations
//       </Link>
//     </nav>
//   );
// }


import { Link, useLocation } from "react-router-dom";

export default function AccountNav() {
  const { pathname } = useLocation();
  const subpage = pathname.split("/")[2] || "profile"; // get current subpage

  function linkClasses(type) {
    let classes =
      "inline-flex gap-1 py-2 px-6 rounded-full transition-all duration-200";
    if (type === subpage) {
      classes += " bg-pink-400 text-white";
    } else {
      classes += " bg-gray-200 hover:bg-gray-300";
    }
    return classes;
  }

  return (
    <nav className="w-full flex justify-center mt-8 gap-3 mb-8 flex-wrap">
      <Link className={linkClasses("profile")} to="/account">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.12a7.5 7.5 0 0115 0A17.93 17.93 0 0112 21.75c-2.676 0-5.216-.58-7.5-1.63z"
          />
        </svg>
        Profile
      </Link>

      <Link className={linkClasses("bookings")} to="/account/bookings">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        My Bookings
      </Link>

      <Link className={linkClasses("places")} to="/account/places">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
          />
        </svg>
        My Accommodations
      </Link>
    </nav>
  );
}
