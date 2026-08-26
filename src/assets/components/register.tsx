import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');
  
  async function signUpNewUser(e:React.FormEvent) {
      e.preventDefault();
      setError('');

      if (password !== repeatPassword) {
        setError('Passwords do not match');
        return;
      }

      const {error} = await supabase.auth.signUp({
        email: email,
        password: password,
      })
      error ? setError(error.message) : setError("You can login")
      
    }

  
  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-gray-800">
      <div className="w-full max-w-md p-6 border-2 border-olive-300 rounded-lg shadow-md flex items-center justify-center flex-col gap-4">
        <h1 className="text-2xl font-bold text-olive-300">Registrace</h1>
        <form
        onSubmit={signUpNewUser} 
        className="w-full flex flex-col gap-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            value={email}
            placeholder="Email"
            className="text-olive-300 placeholder:text-olive-500 w-full px-4 py-2 border border-olive-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            placeholder="Password"
            className="text-olive-300 placeholder:text-olive-500 w-full px-4 py-2 border border-olive-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            onChange={(e) => setRepeatPassword(e.target.value)}
            type="password"
            value={repeatPassword}
            placeholder="Repeat password"
            className="text-olive-300 placeholder:text-olive-500 w-full px-4 py-2 border border-olive-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-red-800 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Register
          </button>
          <p className="text-olive-300">
            <Link to="/login">Already have an account? Login</Link>
          </p>
        </form>
        {error && <div className="text-red-600">{error}</div>}
      </div>
    </div>
  )
}

export default Register