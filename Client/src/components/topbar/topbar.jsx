import "../topbar/topbar.css";
import { BsFillPersonFill , BsFillChatFill ,  } from "react-icons/bs";
import { AiOutlineSearch ,   } from "react-icons/ai";
import { GrNotification  ,   } from "react-icons/gr";
import {Link} from 'react-router-dom';
function TopBar() {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <Link style={{textDecoration:"none"}} to="/">
        <span  className="logo">Social Media App</span>
        </Link>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <AiOutlineSearch  className="searchIcon"/>
          <input
            placeholder="search your friends and post and any videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">HomePage</span>
          <span className="topBarLink">Timeline</span>
        </div>
      
      <div className="topBarIcons">
        <div className="topBarIconItem">
            <BsFillPersonFill />
        <span className="topBarIconBadge">1</span>
        </div>
        <div className="topBarIconItem">
            <BsFillChatFill />
        <span className="topBarIconBadge">2</span>
        </div>
        <div className="topBarIconItem">
            <GrNotification />
        <span className="topBarIconBadge">3</span>
        </div>
         
      </div>
     <img src="https://scontent.fkhi4-3.fna.fbcdn.net/v/t39.30808-6/344859260_9764027536941505_5188833060278820647_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeH7vxBxRC8BIXXDfKxmKp_QIQqlHeM23VkhCqUd4zbdWUQP10T73idj9leNJ4HhuNE3NEJ2L2biQphwS3SpwqfO&_nc_ohc=KSLLFlmD278AX9dVKnQ&_nc_oc=AQn48tA_Tomd7KdENjtjsbppSrfMFN53kGD35gxfcT39YM7CvMx0908Ay3yRhWq-G8A&_nc_zt=23&_nc_ht=scontent.fkhi4-3.fna&oh=00_AfDVPgHUPcr-hrySLZX4jQRorcpMeHHE7z8tXCHzVBtXWw&oe=650BAE1F" alt="userImage" className="topBarImg" />
     </div>
    </div>
  );
}

export default TopBar;
