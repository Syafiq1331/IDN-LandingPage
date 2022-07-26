import React from 'react'
import logo from '../asset/Icons/logo.png'
import menu from '../asset/Icons/menu.png'
import { NavLink } from "react-router-dom";

const navs = [
    'Home', 'About', 'Academic', 'Event', 'PMB', 'Contact Us'
]

// const routes = [
//     '/', '/about', '/academic', '/event', '/pmb', '/contact-us'
// ]

// const navs = [
//     {nav = 'Home', route  = '/'}
//     {nav = 'About', route  = 'about'}
//     {nav = 'Academic', route  = 'academic'}
//     {nav = 'Event', route  = 'event'}
//     {nav = 'PMB', route  = 'pmb'}
//     {nav = 'Contact Us'route  = 'contact-us'}
// ]

const Navbar = () => {
    return (
        <div className="container mx-auto sticky inset-x-px z-50 px-8 font-montserrat">
            <div className="navbar">
                <div className="flex-1">
                    <img src={logo} alt="logo" className="w-40"/>
                </div>
                <div class="dropdown md:hidden">
                    <label tabindex="0" class="btn m-1"><img src={menu} alt="" className='w-8'/></label>
                    <div tabindex="0" class="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content right-5 ">
                        <div class="card-body">
                            <NavLink to="/" className="tab hover:text-lime-400 text-white active:tab-bordered "> Home </NavLink>
                            <NavLink to="/About" className="tab hover:text-lime-400 text-white"> About </NavLink>
                            <NavLink to="/Academic" className="tab hover:text-lime-400 text-white"> Academic </NavLink>
                            <NavLink to="/Event" className="tab hover:text-lime-400 text-white"> Event </NavLink>
                            <NavLink to="/PMB" className="tab hover:text-lime-400 text-white"> PMB </NavLink>
                            <NavLink to="/Contact-Us" className="tab hover:text-lime-400 text-white"> Contact Us </NavLink>
                        </div>
                    </div>
                </div>  
                <div className='hidden md:contents'>
                    <div className="tabs mr-5 md:mr-12 font-sans" >
                    {/* {
                        navs.map((nav, index) => {
                            return (
                                <NavLink key={index} className="tab hover:text-blue-800 text-blue-400"> {nav} </NavLink>
                            )
                        })
                    } */}


                    <NavLink to="/" className="tab hover:text-blue-800 text-blue-400 active:tab-bordered "> Home </NavLink>
                    <NavLink to="/About" className="tab hover:text-blue-800 text-blue-400"> About </NavLink>
                    <NavLink to="/Academic" className="tab hover:text-blue-800 text-blue-400"> Academic </NavLink>
                    <NavLink to="/Event" className="tab hover:text-blue-800 text-blue-400"> Event </NavLink>
                    <NavLink to="/PMB" className="tab hover:text-blue-800 text-blue-400"> PMB </NavLink>
                    <NavLink to="/Contact-Us" className="tab hover:text-blue-800 text-blue-400"> Contact Us </NavLink>

                    </div>
                    <div>
                        <a className="btn btn-info rounded-full text-white px-10 normal-case hover:bg-blue-600">Login</a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Navbar;