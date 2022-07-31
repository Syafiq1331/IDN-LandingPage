import React from 'react';
import logo from '../asset/Icons/socialMediaPost.png';
import { twitter, facebook, instagram, telephone, whatsapp } from './SocialMediaIcons';


const SocialMedia = () => {
    return (
        <div className="container mx-auto text-slate-800 my-20">
            <div className="px-20 flex justify-around items-center">
                <div>
                    <div>
                        <h4 className='text-4xl font-bold'>Our Media Social</h4>
                        <ul className='flex flex-col py-3'>
                            <li className='flex items-center my-2'>
                                <img src={twitter} className='w-10 mx-2' /><a href="#" target="_blank" className='hover:text-sky-500'>idncampus.jonggol</a>
                            </li>
                            <li className='flex items-center my-2'>
                                <img src={facebook} className='w-10 mx-2' /><a href="#" target="_blank" className='hover:text-sky-500'>IDNJonggol</a>
                            </li>
                            <li className='flex items-center my-2'>
                                <img src={instagram} className='w-10 mx-2' /><a href="#" target="_blank" className='hover:text-sky-500'>@idncampus.jonggol</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='text-4xl font-bold'>Contact</h4>
                        <ul className='flex flex-col py-3'>
                            <li className='flex items-center my-1'>
                                <img src={telephone} className='w-10 mx-2' /><a href="#" target="_blank" className='hover:text-sky-500'>021 xxxx xxxx</a>
                            </li>
                            <li className='flex items-center my-1'>
                                <img src={whatsapp} className='w-10 mx-2' /><a href="#" target="_blank" className='hover:text-sky-500'>08xx xxxx xxxx (Ikhwan)</a>
                            </li>
                            <li className='flex items-center my-1'>
                                <img src={whatsapp} className='w-10 mx-2' /><a href="#" target="_blank" className='hover:text-sky-500'>08xx xxxx xxxx (Akhwat)</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <img src={logo} alt="" className='w-[26rem]' />
            </div>
        </div>
    )
}

export default SocialMedia