import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
export default function RegisterPage() {
const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function registerUser(ev) {
    ev.preventDefault();
    try{
      await axios.post('/register', {
      name,
      email,
      password
    });
    alert('Registration successful. Now you can log in');
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  }

    
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-2xl text-center mb-4">Register</h1>
      <form  className="max-w-md mx-auto" onSubmit={registerUser}>
        <input type="text" placeholder="Name"  className="border p-2 w-full mb-4 " 
        value={name} 
        onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="your@email.com" className="border p-2 w-full mb-4 "
         value={email} 
         onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="password" className="border p-2 w-full mb-4 " 
        value={password}
         onChange={e => setPassword(e.target.value)} />
        <button className="bg-blue-500  w-full text-white p-2 rounded-full">Register</button>
        <div className="text-center py-4 ">Already have an account?  <Link to="/login" className="underline text-black">LOGIN NOW!!</Link></div>
      </form>
      </div>
      
    </div>
  )
}
