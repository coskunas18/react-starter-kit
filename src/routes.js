import PrivateRoute from "./components/PrivateRoute"
import Page404 from "./pages/404"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import HomeLayout from "./pages/HomeLayout"
import Profile from "./pages/Profile"
import AuthLayout from "./pages/auth/AuthLayout"
import Login from "./pages/auth/Login"
import BlogLayout from "./pages/blog"
import Blog from "./pages/blog/Blog"
import Categories from "./pages/blog/Categories"
import Post from "./pages/blog/Post"


const routes = [
    {
        path:'/',
        name:'home',
        element:<HomeLayout/>,
        children:[
            {
                index:true,
                name:'index',
                element:<Home/> //yani homelayoutta başlangıçta home açılacak
            },
            {
                path:'contact',
                name:'contact',
                element:<Contact/>
            },
            {
                name:'blog',
                path:'blog',
                auth:true,
                element:<BlogLayout/>,
                children:[
                    {
                        index:true,
                        name:'blog',
                        element:<Blog/>
                    },
                    {
                        name:'categories',
                        path:'categories',
                        element:<Categories/>
                    },
                    {
                        name:'post',
                        path:'post/:url/:id',
                        element:<Post/>
                    }
                ]
            },
            {
                name:'profile',
                path:'profile',
                auth:true,
                element:<Profile/>
            }

        ]
    },
    {
        name:'auth',
        path:'auth',
        element:<AuthLayout/>,
        children:[
            {
                name:'login',
                path:'login',
                element:<Login/>
            }
        ]
    },
    {
        name:'notFound',
        path:'*',
        element:<Page404/>
    },
];

const authMap = routes => routes.map(route => {

    if (route?.auth) { //routelerde auth diye bir şey var mı ve true mu ?
        route.element = <PrivateRoute>{route.element}</PrivateRoute> //eper true ise privateroute comp. içine verdik
    }

    if (route?.children) { //routenin childreni varsa aynı işlemi yapacak
        route.children = authMap(route.children)
    }

    return route

})


export default authMap(routes)