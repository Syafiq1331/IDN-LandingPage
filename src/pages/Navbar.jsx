import React from "react";
import logo from "../asset/Icons/logo.png";
import menu from "../asset/Icons/menu.png";
import { Link } from "react-router-dom";

// const navs = ["Home", "About", "Academic", "Event", "PMB", "Contact Us"];

const Navbar = () => {
 return (
  <div className="container mx-auto sticky inset-x-px z-50 px-8 font-montserrat">
   <div className="navbar">
    <div className="flex-1">
     <img src={logo} alt="logo" className="w-40" />
    </div>
    <div className="dropdown md:hidden">
     <label tabindex="0" className="btn m-1">
      <img src={menu} alt="" className="w-8" />
     </label>
     <div
      tabindex="0"
      className="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content right-5 "
     >
      <div className="card-body">
       <Link
        to="/"
        className="tab hover:text-blue-800 text-blue-400 active:tab-bordered "
       >
        {" "}
        Home{" "}
       </Link>
       <Link to="/About" className="tab hover:text-blue-800 text-blue-400">
        {" "}
        About{" "}
       </Link>
       <Link to="/Academic" className="tab hover:text-blue-800 text-blue-400">
        {" "}
        Academic{" "}
       </Link>
       <Link to="/Event" className="tab hover:text-blue-800 text-blue-400">
        {" "}
        Event{" "}
       </Link>
       <Link to="/PMB" className="tab hover:text-blue-800 text-blue-400">
        {" "}
        PMB{" "}
       </Link>
       <Link to="/Contact-Us" className="tab hover:text-blue-800 text-blue-400">
        {" "}
        Contact Us{" "}
       </Link>
      </div>
     </div>
    </div>
    <div className="hidden md:contents">
     <div className="tabs mr-5 md:mr-12 font-sans">
      <Link
       to="/"
       className="tab hover:text-blue-800 text-blue-400 active:tab-bordered "
      >
       {" "}
       Home{" "}
      </Link>
      <Link to="/About" className="tab hover:text-blue-800 text-blue-400">
       {" "}
       About{" "}
      </Link>
      <Link to="/Academic" className="tab hover:text-blue-800 text-blue-400">
       {" "}
       Academic{" "}
      </Link>
      <Link to="/Event" className="tab hover:text-blue-800 text-blue-400">
       {" "}
       Event{" "}
      </Link>
      <Link to="/PMB" className="tab hover:text-blue-800 text-blue-400">
       {" "}
       PMB{" "}
      </Link>
      <Link to="/Contact-Us" className="tab hover:text-blue-800 text-blue-400">
       {" "}
       Contact Us{" "}
      </Link>
     </div>
     <div>
      <a className="btn btn-info rounded-full text-white px-10 normal-case hover:bg-blue-600">
       Login
      </a>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Navbar;
