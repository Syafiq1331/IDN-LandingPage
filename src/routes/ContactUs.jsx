import React from "react";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import SocialMedia from "../components/SocialMedia";

const ContactPage = () => {
 return (
  <div>
   <div className="min-h-screen">
    <Navbar />
    <SocialMedia />
   </div>
   <Footer />
  </div>
 );
};

export default ContactPage;
