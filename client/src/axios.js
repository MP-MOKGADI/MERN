import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://mern-4-bage.onrender.com", 
  withCredentials: true,
});

export default axiosInstance;
