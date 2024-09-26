'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import AnimatedButton from '../AnimatedButton'; // Make sure this path is correct

const Hero = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-start">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/veranda.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Left-to-right gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b3d2c]/80 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
        <div
          className={`text-left text-white max-w-2xl transition-opacity duration-1000 ${
            textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          {/* Small Title */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-green-600 p-2 rounded-full">
              {/* Example Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v10m0 0l3.5-3.5M12 18l-3.5-3.5"
                />
              </svg>
            </div>
            <p className="text-lg font-semibold">Beautiful Garden</p>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            <span className="font-light">Transform </span>
            <span className="font-bold">your outdoor space </span>
            <span className="font-light">into a lush paradise</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl mb-8 max-w-2xl">
            Whether you're dreaming of a vibrant garden, a serene patio, or a
            functional outdoor living space, our team of skilled landscapers and
            gardeners is here to bring your vision to life.
          </p>

          {/* Animated Buttons */}
          <div className="flex flex-wrap gap-4">
            <AnimatedButton text="Explore More" variant="green" href="/explore" />
            <AnimatedButton text="How It Works" variant="white" href="/how-it-works" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;