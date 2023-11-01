import { useEffect } from 'react';
import {getPosts,getPostDetail,getUsers} from './services'

function App() {

  useEffect(()=>{
    getPosts().then(res => console.log(res))
    getPostDetail(2).then(res => console.log(res))
    getUsers().then(res => console.log(res))
  })

 return(
  <>

  </>
 )

}

export default App;
