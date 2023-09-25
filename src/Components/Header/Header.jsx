import { useState } from "react";
import "./Header.css";
import {BiMenuAltRight} from 'react-icons/bi';

const Header = () => {
  const [toggle, setToggle]=useState(false);
  return (
     <div className="h-wrapper">
      <div className="container flexCenter header">
        {/* Left Side */}
        <div className="logo">
          <img src="../../../public/images/logo.png" alt="" />
        </div>
        {/* Right Side */}
        <div className="menu"><BiMenuAltRight size={30} onClick={()=>{setToggle((prev)=> !prev)}}/></div>
        <div className={`links ${toggle == false ? 'close':''}`}>
          <span className="mainText">Residencies</span>
          <span className="mainText">Our Value</span>
          <span className="mainText">Contact Us</span>
          <span className="mainText">Get Started</span>
          <button className="button">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
