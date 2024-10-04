import React from 'react';
import { useState, useEffect } from 'react';
// import inn from '../Assets/logo.png';
import slide1 from '../Assets/slide1.png'
import slide2 from '../Assets/slide2.png'
import slide3 from '../Assets/slide3.png'



export default function ProductSlide() {

    const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { 
      image: slide1, 
      description: 'Welcome to Menlong Global Concept Property',
     
    },
    // { 
    //   image: man, 
    //   description: 'Own or Rent a Home with Ease',
      
    // },
    // { 
    //   image: land, 
    //   description: 'Get Legitimate Lands & Documents',
      
    // },
    { 
      image: slide2, 
      description: 'Get Legitimate Lands & Documents',
      
    },
    { 
      image: slide3, 
      description: 'Get Legitimate Lands & Documents',
      
    },
    
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full max-w-full mx-auto ">
    <div className="overflow-hidden relative">
      <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} className="w-full max-h-[20rem] caro-img" />
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-0 p-4 text-white text-center">
        {/* <p className="text-lg font-semibold bottom-0 left-0 right-0 md:top-56 top-28  absolute font-mono md:text-4xl">{slides[currentIndex].description} </p>  */}
      </div>
    </div>
    <button 
      onClick={prevSlide} 
      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
    >
      &#10094;
    </button>
    <button 
      onClick={nextSlide} 
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
    >
      &#10095;
    </button>
  </div>

  )
}
