
import { Route,Routes } from 'react-router-dom'
import './App.css'
import  IndexPage from './pages/IndexPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import Layout from './Layout.jsx'
import axios from 'axios'
import { UserContextProvider, UserContext } from './UserContext.jsx'
import { useContext, useEffect } from 'react'
import PlacesFormPage from './pages/PlacesFormPage.jsx'
import PlacesPage from './pages/PlacesPage.jsx'
import PlacePage from './pages/PlacePageX.jsx'
 import PropertyListing from "./pages/PropertyListing.jsx";
 import BookingsPage from "./pages/BookingsPage";
import BookingPage from "./pages/BookingPage";








axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true;

function App() {
  
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
        
          <Route index element={<IndexPage />} />
          <Route path="/properties" element={<PropertyListing />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />ss
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PlacePage />} />
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} />
          

        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App

// import { Route, Routes } from "react-router-dom";
// import Layout from "./Layout.jsx";
// import HomePage from "./pages/HomePage";
// import IndexPage from "./pages/IndexPage.jsx"; // PropertyListing / all places
// import LoginPage from "./pages/LoginPage.jsx";
// import RegisterPage from "./pages/RegisterPage.jsx";
// import ProfilePage from "./pages/ProfilePage.jsx";
// import PlacesPage from "./pages/PlacesPage.jsx";
// import PlacesFormPage from "./pages/PlacesFormPage.jsx";
// import PlacePage from "./pages/PlacePageX.jsx";
// import { UserContextProvider } from "./UserContext.jsx";

// function App() {
//   return (
//     <UserContextProvider>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           {/* Guest flow */}
//           <Route index element={<HomePage />} />
//           <Route path="/properties" element={<IndexPage />} />
//           <Route path="/property/:id" element={<PlacePage />} />

//           {/* Auth / Host flow */}
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/account" element={<ProfilePage />} />
//           <Route path="/account/places" element={<PlacesPage />} />
//           <Route path="/account/places/new" element={<PlacesFormPage />} />
//           <Route path="/account/places/:id" element={<PlacesFormPage />} />
//         </Route>
//       </Routes>
//     </UserContextProvider>
//   );
// }

// export default App;
