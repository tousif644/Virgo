import React from 'react';
import avatar from '../assets/img/testimonial-img-1.jpg'
import mark from "../assets/img/quote-svgrepo-com.svg"
const Hero2 = () => {
    return (
        <div className='font-[Inter]  p-8'>
            <img src={avatar} alt="" className='rounded-full w-24 shadow-lg mx-auto' />
            <div className=''>
                <div className='w-8/12 mx-auto'>
                    <img src={mark} alt="" width={65} className="" />
                    <p className='text-4xl  font-[Inter] text-[#323639] text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi atque doloremque beatae! Doloremque perspiciatis aliquid repellat quasi praesentium, minima nobis assumenda ex?</p>
                </div>
                <div className='my-12 text-center'>
                    <p className='font-bold text-xl text-[#323639]'>EMILY EWING</p>
                    <p className='text-[#737678]'>Designer at CompanyX</p>
                </div>
            </div>
        </div>
    );
};

export default Hero2;