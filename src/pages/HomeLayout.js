import { NavLink,Outlet} from "react-router-dom";
import { url } from "../utils";

export default function HomeLayout() {
    return (
        <>
        <nav>
           <NavLink to={url('home')}>Anasayfa</NavLink>
           <NavLink to={url('home.contact')}>İletisim</NavLink>
           <NavLink to={url('home.blog')}>Blog</NavLink>
           <NavLink to={url('home.profile')}>Profile</NavLink>
        </nav>

        <Outlet/>
        </>

    )
}