
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



axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true;

function App() {
  
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App

