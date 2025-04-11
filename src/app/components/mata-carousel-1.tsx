'use client';

import React, { useState } from 'react';
import Image from "next/image";
import styles from '../WorkCarousel.module.css'; // Import CSS module for styling


const MataCarousel = () => {
  // Array of slides, each with a unique layout
  const slides = [
    {
      id: 1,
      content: (
            <div className='flex flex-wrap items-center justify-center w-full h-full max-w-6xl'>
            <Image
                src="/sbal2025-mata-1.webp"
                width={1302}
                height={1843}
                placeholder="blur"
                blurDataURL="/"
                loading="lazy"
                className=" items-center md:max-w-64 lg:max-w-md"
                alt="Screenshots of the dashboard project showing desktop version"
                />
            
        </div>
      ),
    },
    {
        id: 2,
        content: (
        <div className='flex flex-wrap items-center justify-center w-full h-full max-w-6xl'>
       
     
            <Image
                  src="/sbal2025-mata-8.webp"
                  width={2590}
                  height={1800}
                    loading="lazy"
                    // layout="fill"
                    // objectFit="cover"
                    className=" items-center "
                  alt="Screenshots of the dashboard project showing desktop version"
                />
      
          
        
       </div>
        ),
      },
 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div 
        className='flex justify-center content-center w-full h-full'
    
    >
        
        
      {/* Render the current slide */}
        {/* {slides[currentIndex].content}    */}
        <div className={styles.slides}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
          >
            {slide.content}
          </div>
        ))}
      </div>
        
      {/* Navigation buttons */}
      <button onClick={handlePrev} className="absolute top-0 left-0 w-3/6 h-full z-10 cursor-w-resize"></button>
      <button onClick={handleNext} className="absolute top-0 right-0 w-3/6 h-full z-10 cursor-e-resize"></button>
    </div>

  );
};

export default MataCarousel;
