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
        

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            <span className="font-light">Maak van </span>
            <span className="font-bold">jouw tuin </span>
            <span className="font-light">Vakantie in eigen tuin</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl mb-8 max-w-2xl">
          Specialisten in veranda’s en overkappingen.
          Wij creëren extra leefruimte voor uw omgeving, 
          Van fabriek tot aan consument.
          Wij produceren alles in onze eigen fabriek
          </p>

          {/* Animated Buttons */}
          <div className="flex flex-wrap gap-4">
            <AnimatedButton text="Gratis offerte" variant="green" href="/explore" />
            <AnimatedButton text="Onze verandas" variant="white" href="/how-it-works" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;