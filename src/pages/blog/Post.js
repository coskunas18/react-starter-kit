import { useParams } from "react-router-dom"

export default function Post() {


    const {url,id} = useParams(); //url app.js te yazdığımız post/:url den geliyor.

    return(
        <div>
            Post page = {url} - {id}
        </div>
    )
    
}