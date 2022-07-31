import React from 'react'
import logo from '../img/logo.png'

const navs = [
    'Home', 'About', 'Academic', 'Event', 'PMB', 'Contact Us'
]


function Navbar() {
    return (
        <div className="container mx-auto absolute inset-x-px z-50 px-8">
            <div className="navbar">
                <div className="flex-1">
                    <img src={logo} alt="" class="w-40"/>
                </div>
                <div class="tabs mr-12 font-sans" >
                    {
                        navs.map((nav, index) => {
                            return (
                                <a className="tab hover:font-medium text-blue-400" key={index}> {nav} </a>
                            )
                        })
                    }

                    {/* {
                        navs.map((nav, index) => {
                            return (
                                <li key={index} className="menu-item">
                                    <NavLink to={`/${nav}`} className="tab hover:font-medium text-blue-400"> {nav} </NavLink>
                                </li>
                            )
                        })
                    } */}

                    {/* <a class="tab font-bold text-blue-800 border-blue-100 tab-bordered tab-active ">Home</a>
                    <a class="tab hover:font-medium text-blue-400">About</a>
                    <a class="tab hover:font-medium text-blue-400">Academic</a>
                    <a class="tab hover:font-medium text-blue-400">Event</a>
                    <a class="tab hover:font-medium text-blue-400">PMB</a>
                    <a class="tab hover:font-medium text-blue-400">Contact Us</a> */}

                </div>
                <div>
                    <a className="btn btn-info rounded-full text-white px-10 normal-case hover:btn-hoverBlue ">Login</a>
                </div>
            </div>
        </div>
      )
  }


export default Navbar;