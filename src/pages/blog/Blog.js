import { Link } from "react-router-dom";
import { url } from "../../utils";


export default function Blog() {


    const posts = [
        {
            id:1,
            title:'post 1',
            url:'post-1',
        },
        {
            id:2,
            title:'post 2',
            url:'post-2-cankiri-bilmem-ne'
        }
    ]


    return (
            <div>
                {posts.map(p => (
                    <li key={p.id}>
                        <Link to={url('home.blog.post',{
                            id:p.id,
                            url:p.url
                        })}>{p.title}</Link>
                    </li>       
                ))}
            </div>
    )
}