import React from 'react';
import diagonalImage from "../assets/img/hero-diagonal-img-1.jpg"
const Hero = () => {
    return (
        <div className='text-white flex items-center justify-center h-screen text-center'>
            <div>
                <h1 className='text-2xl mb-3 font-[Inter] text-[#CDD0D5]'>Welcome</h1>
                <h1 className='cody text-6xl font-bold my-6 drop-shadow-lg	'> <span className='italic'>CodyHouse</span>
                    <span className='italic mx-2 my-6'> UI</span> Starter <br /> <span>Template</span></h1>
                <h2 className='text-2xl font-[Inter]  text-[#CDD0D5]'>Virgo is a free HTML, CSS, JS template powered by CodyFrame.</h2>
                <button className='btn btn-secondary'>Download</button>
                <button className="text-2xl mx-4">Learn More</button>
            </div>
        </div>
    );
};

export default Hero;