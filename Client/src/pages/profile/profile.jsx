import "./profile.css";

import TopBar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Rightbar from "../../components/rightbar/rightbar";
import Feed from "../../components/feed/feed";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user , setUser] = useState({})
  useEffect(()=>{
    const fetchUser = async () => {
     const res = await axios.get(`http://localhost:8800/api/user/?userName=hasan`)
    //  console.log(res)
    // ${post?.post?.userId}
    setUser(res.data)
    }
    fetchUser()
    }, [])
  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
                <img className='profileCoverImg' src={user?.coverPicture || "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg" }alt="" />
              
                <img className='profileUserImg'  src={user?.profilePicture || "https://media.istockphoto.com/id/1457970648/photo/a-blonde-baby-boy-in-a-crib-at-home-with-blue-and-white-cotton-bedding-stands-holding-on-to.webp?b=1&s=612x612&w=0&k=20&c=oNCjKgPhPmvzWAuOJRbJPT91gG48OfMf96aclPvcm3Y=" }
                />
                
                
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user?.userName}</h4>
                <span className="profileInfoDesc">{user?.desc} || Hello Social Media Community!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed userName='hasan' />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
