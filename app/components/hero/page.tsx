'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 300); // Delay text appearance
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-svh w-full flex items-center justify-start px-8 lg:px-24">
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

      {/* Content */}
      <div
        className={`relative z-10 text-left text-white max-w-3xl mx0-auto transition-opacity duration-1000 ${
          textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 '
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
          {/* Apply different font weights */}
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

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/explore"
            className="px-6 py-3 bg-green-500 text-white rounded-full flex items-center space-x-2 hover:bg-green-600 transition"
          >
            <span>Explore More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
          <Link
            href="/how-it-works"
            className="px-6 py-3 bg-white text-green-600 rounded-full flex items-center space-x-2 hover:bg-gray-100 transition"
          >
            <span>How It Works</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
