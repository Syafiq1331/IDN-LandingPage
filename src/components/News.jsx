import React from "react";

const News = () => {
 return (
  <div className="container mx-auto px-8 relative h-[1200px] item-center">
   <div className="m-10 border-b-4">
    <h1 className="text-center text-4xl font-montserrat font-bold">NEWS</h1>
   </div>

   {/* Carousel */}
   <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
     <img src="https://placeimg.com/800/400/arch" className="w-full" />
     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">
       ❮
      </a>
      <a href="#slide2" className="btn btn-circle">
       ❯
      </a>
     </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
     <img src="https://placeimg.com/800/400/arch" className="w-full" />
     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">
       ❮
      </a>
      <a href="#slide3" className="btn btn-circle">
       ❯
      </a>
     </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
     <img src="https://placeimg.com/800/400/arch" className="w-full" />
     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">
       ❮
      </a>
      <a href="#slide4" className="btn btn-circle">
       ❯
      </a>
     </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
     <img src="https://placeimg.com/800/400/arch" className="w-full" />
     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">
       ❮
      </a>
      <a href="#slide1" className="btn btn-circle">
       ❯
      </a>
     </div>
    </div>
   </div>
   {/* end Carousel */}
  </div>
 );
};
export default News;
