
import { Link, Navigate } from "react-router-dom"
import { useState, useContext } from "react"
import axios from "axios"
import { UserContext } from "../UserContext.jsx"

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const { data } = await axios.post('/login', {
        email,
        password
      });
      setUser(data);
      alert('Login successful');
      setRedirect(true);
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  }

  
  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-2xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            className="border p-2 w-full mb-4"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="border p-2 w-full mb-4"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="bg-blue-500 w-full text-white p-2 rounded-full">Login</button>
          <div className="text-center py-4">
            DON&apos;T have an account yet?{" "}
            <Link to="/register" className="underline text-black">
              REGISTER NOW!!
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
