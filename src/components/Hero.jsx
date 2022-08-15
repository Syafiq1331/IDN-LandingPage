import React from "react";
import image from "../asset/Images/profile.jpeg";

const Hero = () => {
 return (
  <div classNameName="container mx-auto px-8 relative">
   <div className="hero min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
     <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
     <div classNameName="text-center md:text-left">
      <h1 className="text-5xl font-bold text-blue-900 font-montserrat">
       Internet <br></br> Development Network
      </h1>
      <p className="py-6 font-slate-800">
       Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
       excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id
       nisi.
      </p>
      <button className="btn btn-info text-white rounded-full">
       see our activities
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Hero;
