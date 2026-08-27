import {supabase} from "../../services/supabaseClient"
import {useState} from "react"
import { useNavigate } from 'react-router-dom';

const Header = ({children} : {children: React.ReactNode}) => {
    const navigate = useNavigate()
    const [ errors, setErrors] = useState("")
    async function signOut() {
        const { error } = await supabase.auth.signOut()
        if (error) {
            setErrors(error.message)
        } else {
            navigate("/login")
        }
    }
  
    return (
    <div className="h-full">
        <div className="p-6 flex justify-between items-center h-24 w-full z-50 border-2">
            <div>Jste prihlasen jako : {children}</div>
            <button onClick={signOut}><a>Odhlasit se{errors}</a></button>
        </div>
        
    </div>
    
  )
}

export default Header