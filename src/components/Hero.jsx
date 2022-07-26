import React from "react";
import image from "../asset/Images/profile.jpeg"

const Hero = () => {
	return (
		<div className="container mx-auto px-8 relative">
					<div class="hero min-h-screen">
						<div class="hero-content flex-col lg:flex-row-reverse">
							<img src={image} class="max-w-sm rounded-lg shadow-2xl" />
							<div className="text-center md:text-left">
								<h1 class="text-5xl font-bold text-blue-900 font-montserrat">Internet <br></br> Development Network</h1>
								<p class="py-6 font-slate-800">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
								<button class="btn btn-info text-white rounded-full">see our activities</button>
							</div>
						</div>
					</div>
        </div>
	)
}

export default Hero;