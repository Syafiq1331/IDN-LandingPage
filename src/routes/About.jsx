import React from "react";
import Navbar from "../pages/Navbar";
import About from "../components/About";
import Footer from "../pages/Footer";

const AboutPage = () => {
 return (
  <>
   <div className="min-h-screen">
    <Navbar />
    <About />
   </div>
   <Footer />
  </>
 );
};

export default AboutPage;
