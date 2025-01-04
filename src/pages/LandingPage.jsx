import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import slider1 from '/slider1.png'
import slider2 from '/slider2.png'
import slider3 from '/slider3.png'
import SampleProductsInLandingPage from '../components/SampleProductsInLandingPage'
import { mens } from '../mock-data/mens'

function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
  const slides = [
    slider2,
    slider1,
    slider3,
  ];

  const items = [
    { id: 1, image: "https://via.placeholder.com/150", title: "Jeans" },
    { id: 2, image: "https://via.placeholder.com/150", title: "Shirts" },
    { id: 3, image: "https://via.placeholder.com/150", title: "T-Shirts" },
    { id: 4, image: "https://via.placeholder.com/150", title: "Dresses" },
  ];

  // setTimeout(() => {
  //   setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  // }, 2000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle next slide
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Handle previous slide
  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <Navbar />

      <div >
        <div className="relative overflow-hidden">
          {/* Slider Container */}
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`, // Adjust slide position
            }}
          >
            {/* Slides */}
            {slides.map((slide, index) => (
              <div className="w-screen flex-shrink-0" key={index}>
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full"
            onClick={handlePrev}
          >
            <i class="fa-solid fa-chevron-left"></i>          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full"
            onClick={handleNext}
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-2 ${currentSlide === index ? "bg-gray-600" : "bg-gray-400"
                }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
      <SampleProductsInLandingPage products={mens} title="Mens" />
      <SampleProductsInLandingPage products={items} title="New Arrival" />
      <SampleProductsInLandingPage products={items} title="New Arrival" />

      
    </div>
  );
}

export default LandingPage;
