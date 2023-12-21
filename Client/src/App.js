import React from "react";
import MainHome from './pages/home/home'
import Profile from "./pages/profile/profile";
import Login from './components/login/login'
import Register from './components/register/register';
import TopBar from '../src/components/topbar/topbar'
// import Sidebar from '../src/components/sidebar/sidebar'
// import Rightbar from '../src/components/rightbar/rightbar'
// import Feed from '../src/components/feed/feed'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect as Redirect,
  Navigate,
} from "react-router-dom";
// shaziaashraf
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainHome/>} />
        </Routes>
        
        <Routes>
          <Route path="/Login" element={<Login/>} />
        </Routes>

        <Routes>
          <Route path="/Register" element={<Register/>} />
        </Routes>

        <Routes>
          <Route path="/Profile/:username" element={<Profile/>} />
        </Routes>


      </Router>
      {/* <MainHome/> */}
      {/* //   <Login/> */}
      {/* <Register/> */}
      {/* <Profile/> */}
      </>
  );
}

export default App;
