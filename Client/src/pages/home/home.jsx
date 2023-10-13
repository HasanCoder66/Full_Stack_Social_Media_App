import React from 'react';
import TopBar from '../../components/topbar/topbar'
import Sidebar from '../../components/sidebar/sidebar'
import Rightbar from '../../components/rightbar/rightbar'
import Feed from '../../components/feed/feed'
import './home.css'

function MainHome () {
  
  return (
    <>
    <TopBar/>
    <div className="homeContainer">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div>
    
    
    </>
  )
}

export default MainHome;