import React from 'react'


const News = () => {
    return (

			<div className="container mx-auto px-8 relative h-[1200px] item-center">
				<div className='m-10 border-b-4'>
					<h1 className="text-center text-4xl font-montserrat font-bold">NEWS</h1>
				</div>

				{/* Carousel */}
				<div class="carousel w-full">
					<div id="slide1" class="carousel-item relative w-full">
						<img src="https://placeimg.com/800/400/arch" class="w-full" />
						<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide4" class="btn btn-circle">❮</a> 
							<a href="#slide2" class="btn btn-circle">❯</a>
						</div>
					</div> 
					<div id="slide2" class="carousel-item relative w-full">
						<img src="https://placeimg.com/800/400/arch" class="w-full" />
						<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide1" class="btn btn-circle">❮</a> 
							<a href="#slide3" class="btn btn-circle">❯</a>
						</div>
					</div> 
					<div id="slide3" class="carousel-item relative w-full">
						<img src="https://placeimg.com/800/400/arch" class="w-full" />
						<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide2" class="btn btn-circle">❮</a> 
							<a href="#slide4" class="btn btn-circle">❯</a>
						</div>
					</div> 
					<div id="slide4" class="carousel-item relative w-full">
						<img src="https://placeimg.com/800/400/arch" class="w-full" />
						<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide3" class="btn btn-circle">❮</a> 
							<a href="#slide1" class="btn btn-circle">❯</a>
						</div>
					</div>
				</div>
				{/* end Carousel */}
			</div>
    );
}				
export default News;