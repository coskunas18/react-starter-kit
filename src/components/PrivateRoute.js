import { Navigate, useLocation,} from "react-router-dom";
import { useAuth } from "../context/AuthContext"

export default function PrivateRoute({children}) {
    //Kullanıcı oturum açmış mı?
    //eğer oturum açmamışsa yönlendirme işmei yap!
    //eğer oturum açmışsa childreni return et.

    const {user} = useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate replace={true} to="/auth/login" state={{ 
            return_url:location.pathname
         }} />
    }



    return children

}