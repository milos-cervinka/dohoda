import { useEffect, useState } from 'react'
import { supabase } from '../services/supabaseClient'
import { type User } from '../types/User'


function Home() {
  const [users, setUsers] = useState<User[]>([])

  async function getusers() {
    const { data, error } = await supabase.from('user').select('id, name, pass')

    if (error) {
      console.error(error)
      return
    }

    setUsers(data ?? [])
  }

  useEffect(() => {
    getusers()
  }, [])

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}: {user.pass}</li>
      ))}
    </ul>
  )
}

export default Home

/*const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-gray-800">
        <div className="w-full max-w-md p-6 border-2 border-olive-300 rounded-lg shadow-md flex items-center justify-center flex-col gap-4">
            <h1 className="text-3xl font-bold text-olive-300">Home</h1>
            <form>
                <input type="text" placeholder="name" className="text-olive-300"></input>
                <input type="text" placeholder="pass" className="text-olive-300"></input>
                <br></br>
                <input type="submit" value="Submit" className="text-olive-300 bg-red-800 hover:bg-red-700"></input>
            </form>
        </div>
    </div>
  )
}

export default Home
*/