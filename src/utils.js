import { generatePath } from "react-router-dom";
import routes from "./routes";

export const url =(path,params = {}) =>{
    let lastRoute,url
    //url(home.blog.categories) olduğunu düşün
    //lastRoute = {Home...}
    //url = /
     path.split('.').map(p => {
        if (!lastRoute) { 
            lastRoute = routes.find(r => r.name == p) //lastRoute home oldu
            url = lastRoute.path //url / oldu
        }else{
            lastRoute = lastRoute.children.find(r => r.name == p) //childrenlardan blogu buldu
            url += lastRoute.path + "/"
        }
    }) 

    return generatePath(url,params)
}