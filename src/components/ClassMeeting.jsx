import React from 'react';
import futsal from '../asset/Icons/futsal.png';
import cooking from '../asset/Icons/cooking.png';
import ngoding from '../asset/Icons/ngoding.png';

const ClassMeeting = () => {
    return (
        <div className="container mx-auto text-slate-800 mt-20">
            <h1 className='text-center font-bold text-4xl'>Class Meeting</h1>
            <div className="border-2 w-16 mx-auto rounded my-2"></div>

            <div className="py-10 flex justify-center items-center">
                <img src={futsal} alt="" />
                <div className='w-1/2 pl-5'>
                    <h4 className='font-semibold text-4xl'>Futsal</h4>
                    <p className='py-3 text-xl'>Futsal is an association football-based game played on a hard court smaller than a football pitch, and mainly indoors. It has similarities to five-a-side football and indoor soccer.</p>

                    <p className='text-xl'>cor. Zaid AL- Maghfur <br />
                        08xx xxxx xxxx</p>
                </div>
            </div>

            <div className="py-10 flex justify-center items-center">
                <div className='w-1/2 pr-5'>
                    <h4 className='font-semibold text-4xl'>Cooking</h4>
                    <p className='py-3 text-xl'>Cooking, cookery, or culinary arts is the art, science and craft of using heat to prepare food for consumption. Cooking techniques and ingredients vary widely, from grilling food over an open fire to using electric stoves, to baking in various types of ovens, reflecting local conditions.</p>

                    <p className='text-xl'>cor. Zaid AL- Maghfur <br />
                        08xx xxxx xxxx</p>
                </div>
                <img src={cooking} alt="" />
            </div>

            <div className="py-10 flex justify-center items-center">
                <img src={ngoding} alt="" />
                <div className='w-1/2 pl-5'>
                    <h4 className='font-semibold text-4xl'>Programming</h4>
                    <p className='py-3 text-xl'>Computer programming is the process of performing a particular computation (or more generally, accomplishing a specific computing result), usually by designing and building an executable computer program. Programming involves tasks such as analysis, generating algorithms,</p>

                    <p className='text-xl'>cor. Zaid AL- Maghfur <br />
                        08xx xxxx xxxx</p>
                </div>
            </div>
        </div>
    )
}

export default ClassMeeting;