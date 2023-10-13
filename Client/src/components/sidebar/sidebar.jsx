import { MdOutlineRssFeed } from "react-icons/md";
import { FaUserFriends, FaGraduationCap } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
import { BiCalendarEvent } from "react-icons/bi";
import {
  BsBookmarks,
  BsFillQuestionOctagonFill,
  BsFillBagFill,
  BsFillCameraVideoFill,
  BsFillChatSquareFill,
} from "react-icons/bs";

import "./sidebar.css";
import {Users} from '../../dummydata'
import{Friend} from '../friend/friends'


function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <MdOutlineRssFeed className="sideBarIcon" />
            <span className="sideBarListItemText"> Feed </span>
          </li>
        </ul>
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <BsFillChatSquareFill className="sideBarIcon" />
            <span className="sideBarListItemText"> Chats </span>
          </li>
        </ul>
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <FaUserFriends className="sideBarIcon" />
            <span className="sideBarListItemText"> Friends </span>
          </li>
        </ul>
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <SiCoinmarketcap className="sideBarIcon" />
            <span className="sideBarListItemText"> MarketPlace</span>
          </li>
        </ul>
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <BsBookmarks className="sideBarIcon" />
            <span className="sideBarListItemText"> Bookmarks </span>
          </li>
        </ul>
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <BsFillQuestionOctagonFill className="sideBarIcon" />
            <span className="sideBarListItemText"> Questions </span>
          </li>
        </ul>
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <BsFillBagFill className="sideBarIcon" />
            <span className="sideBarListItemText"> Jobs </span>
          </li>
        </ul>
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <BiCalendarEvent className="sideBarIcon" />
            <span className="sideBarListItemText"> Event </span>
          </li>
        </ul>
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <FaGraduationCap className="sideBarIcon" />
            <span className="sideBarListItemText"> Courses </span>
          </li>
        </ul>
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <BsFillCameraVideoFill className="sideBarIcon" />
            <span className="sideBarListItemText"> Videos </span>
          </li>
        </ul>
        <button className="sideBarButton">Show More</button>
        <hr className="sideBarHr" />
        <ul className="sideBarFriendList">
         {Users.map(u => (
          <Friend key={u.id} user={u}/>
         ))}
        </ul>
       
      </div>
    </div>
  );
}

export default Sidebar;
