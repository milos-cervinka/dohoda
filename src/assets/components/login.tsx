import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-gray-800">
      <div className="w-full max-w-md p-6 border-2 border-olive-300 rounded-lg shadow-md flex items-center justify-center flex-col gap-4">
        <h1 className="text-2xl font-bold text-olive-300">Přihlášení</h1>
        <form className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="text-olive-300 placeholder:text-olive-500 w-full px-4 py-2 border border-olive-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="text-olive-300 placeholder:text-olive-500 w-full px-4 py-2 border border-olive-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-red-800 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>
          <p className="text-olive-300">
            <Link to="/register">Don't have an account? Register</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login