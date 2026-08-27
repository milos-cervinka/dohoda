import { supabase } from "../services/supabaseClient"
import { useState, useEffect } from "react"
import Header  from "../components/layout/Header"

function Home() {
  const [info, setInfo] = useState("") 

  useEffect(() => {
    async function userInfo() {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (user?.email) {
        setInfo(user.email)
      }
    }

    userInfo()
  }, [])

  return (
    <>
      <Header>
          <p>{info}</p>
      </Header>
      <div id="userInfo">IDK</div>
    </>
  )
}

export default Home