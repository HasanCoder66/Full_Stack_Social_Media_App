import "./profile.css";

import TopBar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Rightbar from "../../components/rightbar/rightbar";
import Feed from "../../components/feed/feed";

function Profile() {
  useEffect(()=>{
    const fetchPosts = async () => {
     
    
    setPosts(res.data)
    }
    fetchPosts()
    }, [])
  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
                <img className='profileCoverImg' src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg" alt="" />
              
                <img className='profileUserImg' src="https://media.istockphoto.com/id/1457970648/photo/a-blonde-baby-boy-in-a-crib-at-home-with-blue-and-white-cotton-bedding-stands-holding-on-to.webp?b=1&s=612x612&w=0&k=20&c=oNCjKgPhPmvzWAuOJRbJPT91gG48OfMf96aclPvcm3Y=" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Muhammad Hasan Ashraf</h4>
                <span className="profileInfoDesc">Hello Social Media Community!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed userName='hammad' />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
