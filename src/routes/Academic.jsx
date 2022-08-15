import React from "react";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import Organization from "../components/Organization";

const AcademicPage = () => {
 return (
  <>
   <div className="min-h-screen">
    <Navbar />
    <Organization />
   </div>
   <Footer />
  </>
 );
};

export default AcademicPage;
