import { useAuth } from "../../context/AuthContext"
import { useLocation, useNavigate } from "react-router-dom"

export default function Login()
 {
    const {setUser} = useAuth()
    const navigate = useNavigate();

    const location = useLocation(); 

    const loginHandle = () =>{
        setUser({
            id:1,
            username:'coskunas18'
        })
        navigate(location?.state?.return_url || '/')
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={loginHandle}>Giriş yap</button>
        </div>
    )
}