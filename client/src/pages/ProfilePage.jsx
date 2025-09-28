// import { useContext ,useState} from 'react';
// import { UserContext } from '../UserContext.jsx';
// import { Navigate, useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import PlacesPage from './PlacesPage.jsx';
// import AccountNav from '../AccountNav.jsx';






// export default function ProfilePage() {
//   const[redirect,setRedirect]=useState(null);
//   const { ready, user, setUser } = useContext(UserContext);
//   let { subpage } = useParams();
//   if (subpage == undefined) {
//     subpage = "profile";
//   }

//    async function logout() {
//     await axios.post('/logout');
//      setRedirect('/');
//     setUser(null);
//   }
  

//   if (!ready) {
//     return 'Loading...';
//   }

//   if (ready && !user && !redirectx) {
//     return <Navigate to="/login" />;
//   }

  


//   \
  
//   return (
//     <div>
//       {/* <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
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
//       </nav> */}
//       <AccountNav/>
//       {subpage === 'profile' && (
//           <div className="text-center max-w-lg mx-auto ">
//             Logged in as {user.name} ({user.email}) <br/>
//             <button onClick={logout} className='gap-1 bg-pink-400 text-white px-4 py-2 rounded-full'> Logout</button>
//           </div>
//       )}
//             {subpage === 'places' && (
//               <div>
//                 <PlacesPage/>
                
//               </div>
//             )}
//           </div>
//         );
//       }

// import {useContext, useState} from "react";
// import {UserContext} from "../UserContext.jsx";
// import {Link, Navigate, useParams} from "react-router-dom";
// import axios from "axios";
// import PlacesPage from "./PlacesPage";
// import AccountNav from "../AccountNav";

// export default function ProfilePage() {
//   const [redirect,setRedirect] = useState(null);
//   const {ready,user,setUser} = useContext(UserContext);
//   let {subpage} = useParams();
//   if (subpage === undefined) {
//     subpage = 'profile';
//   }

//   async function logout() {
//     await axios.post('/logout');
//     setRedirect('/');
//     setUser(null);
//   }

//   if (!ready) {
//     return 'Loading...';
//   }

//   if (ready && !user && !redirect) {
//     return <Navigate to={'/login'} />
//   }

//   if (redirect) {
//     return <Navigate to={redirect} />
//   }
//   return (
//     <div>
//       <AccountNav />
//       {subpage === 'profile' && (
//         <div className="text-center max-w-lg mx-auto">
//           Logged in as {user.name} ({user.email})<br />
//           <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
//         </div>
//       )}
//       {subpage === 'places' && (
//         <PlacesPage />
//       )}
//     </div>
//   );
// }
import {useContext, useState} from "react";
import {UserContext} from "../UserContext.jsx";
import {Link, Navigate, useParams} from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";

export default function ProfilePage() {
  const [redirect,setRedirect] = useState(null);
  const {ready,user,setUser} = useContext(UserContext);
  let {subpage} = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }

  async function logout() {
    await axios.post('/logout');
    setRedirect('/');
    setUser(null);
  }

  if (!ready) {
    return 'Loading...';
  }

  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }
  return (
    <div>
      <AccountNav />
      {subpage === 'profile' && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button onClick={logout} className="pink-400 max-w-sm mt-2">Logout</button>
        </div>
      )}
      {subpage === 'places' && (
        <PlacesPage />
      )}
    </div>
  );
}