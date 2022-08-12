import React from "react";
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";

const PMB = () => {
 return (
  <div className="container mx-auto text-slate-800 my-20">
   <div className="min-h-screen">
    <Navbar />
    <h1 className="items-center justify-center text-2xl">Comming Soon</h1>
   </div>
   <Footer />
  </div>
 );
};

export default PMB;
