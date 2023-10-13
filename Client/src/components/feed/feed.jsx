import Share from '../share/Share'
import Post from '../../components/post/post';
import "./feed.css";
import { useEffect, useState } from 'react';
import axios from 'axios'

function Feed({userName}) {
const [posts , setPosts] = useState([])

useEffect(()=>{
const fetchPosts = async () => {
 const res = 
 userName 
? await axios.get('http://localhost:8800/api/post/timeline/64f46eab1b897fa613372889')
: await axios.get('http://localhost:8800/api/post/timeline/64f46eab1b897fa613372889')
//  console.log(res)
setPosts(res.data)
}
fetchPosts()
}, [])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {posts.map((p)=>(

          <Post key={p._id} post = {p}/>
        ))}
      </div>
    </div>
  );
}

export default Feed;
