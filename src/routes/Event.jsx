import React from "react";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import ClassMeeting from "../components/ClassMeeting";

const EventPage = () => {
 return (
  <>
   <div className="min-h-screen">
    <Navbar />
    <ClassMeeting />
   </div>
   <Footer />
  </>
 );
};

export default EventPage;
