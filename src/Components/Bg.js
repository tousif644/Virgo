import React from 'react';
import "./Bg.css";
import Hero from './Hero';
const Bg = () => {
    const myStyle = {
        backgroundImage: `url(${require('../assets/img/hero-diagonal-img-1.jpg')})`,
        height: '100vh',
        marginTop: '-70px',
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        clipPath: `polygon(0% 0%,100% 0%,100% 100%,0% calc(100% - var(--diagonal-section-offset)))`
    };
    return (
        <div style={myStyle} className="diagonal-section-bottom">
            <div className=''>
                <Hero></Hero>
            </div>
        </div>
    );
};

export default Bg;