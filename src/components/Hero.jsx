// src/components/Hero.jsx
import React from 'react';

function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white py-24">
      {/* Decorative SVG blob in the background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-[500px] opacity-20 rotate-12"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#60A5FA"
            d="M40.7,-67.5C51.8,-59.3,60.6,-51.5,64.7,-41.1C68.9,-30.7,68.4,-17.8,66.2,-5.6C64,6.6,60.1,17.9,55.6,29.5C51.1,41.1,46.1,53,37.5,58.7C28.8,64.3,16.4,63.7,4.6,57.7C-7.2,51.6,-14.3,40.1,-24.5,33.1C-34.7,26.1,-48,23.6,-54.9,16.1C-61.9,8.5,-62.6,-4.2,-60.4,-17.8C-58.1,-31.3,-52.8,-45.6,-42.5,-53.9C-32.2,-62.1,-16.1,-64.2,-0.3,-63.8C15.5,-63.4,31,-60.4,40.7,-67.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover Your Next <span className="text-blue-300">Career Move</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Zidio Dev Portal connects top talent with visionary companies. Your future starts here.
        </p>
      </div>
    </section>
  );
}

export default Hero;
