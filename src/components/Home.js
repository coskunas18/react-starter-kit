
import Header from "./Header"
import Footer from "./Footer"
import { useAuth } from "../context"

export default function Home() {

    const {user} = useAuth()

    return (
        <>
  <Header/>
    App

    {user && (
        <div style={{ padding:10,border:'1px solid red' }}>
            Bu alan sadece giriş yapılınca gözükür 
            Ad:{user.name}
        </div>
    )}

  <Footer/> 
        </>
    )

}