import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient'

const Register = () => {
  const send = async (name: string, pass: string) => {
    try {
      const { error } = await supabase
        .from('user')
        .insert({ name, pass });
        if (error) {
          console.error('Error inserting user:', error);
        }
    } catch (error) {
      console.error('Error inserting user:', error);
    }
  }
  
  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-gray-800">
      <div className="w-full max-w-md p-6 border-2 border-olive-300 rounded-lg shadow-md flex items-center justify-center flex-col gap-4">
        <h1 className="text-2xl font-bold text-olive-300">Registrace</h1>
        <form 
          className="w-full flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            if ((e.target as any).password.value == (e.target as any)['repeat-password'].value) {
              send(e.bubbles ? (e.target as any).username.value : '', e.bubbles ? (e.target as any).password.value : '');
            } else {
              const errorSpace = document.getElementById('errorSpace');
              if (errorSpace) {
                errorSpace.textContent = 'Passwords do not match';
              }
            }
          }}
          >
          <input
            id="username"
            type="text"
            placeholder="Username"
            className="text-olive-300 placeholder:text-olive-500 w-full px-4 py-2 border border-olive-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="text-olive-300 placeholder:text-olive-500 w-full px-4 py-2 border border-olive-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            id="repeat-password"
            type="password"
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
        <div className="text-red-600" id="errorSpace"></div>
      </div>
    </div>
  )
}

export default Register