import React, { useState, useEffect } from 'react';
import mobileImage from './preview.jpg';
import left from './left.png';
import './BuyerResults.css';
const BuyerResults = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 650 ? mobileImage : mobileImage;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);
  return (
    <div className="BuyerResults" style={{backgroundImage: `url(${imageUrl})` }}>
    <div className="BuyerResults-content">
         
        <h1><img
        src={left}
        height={43}
        width={43}
        />Looking for an item nearby</h1>
    </div>
</div>
  );
}

export default BuyerResults;
