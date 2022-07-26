import React from 'react'

const Card = (props) => {
    return (
        <div class="card w-96 bg-base-100 py-5 text-slate-800">
            <figure><img src={props.image} alt="Shoes" className='w-24' /></figure>
            <div class="card-body text-center">
                <h2 class="font-semibold text-2xl">{props.title}</h2>
                <p className='py-3 text-[14px]'>{props.desc}</p>
            </div>
        </div>
    )
}

export default Card