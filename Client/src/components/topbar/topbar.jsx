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
     <img src="data:image/jpeg;base64,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" alt="userImage" className="topBarImg" />
     </div>
    </div>
  );
}

export default TopBar;
