import React from 'react';
import { ArrowRight } from 'lucide-react';

const GardenInformatie: React.FC = () => {
  return (
    <section className="relative bg-[#F0FFF0] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="flex items-baseline">
              <span className="text-7xl font-bold text-[#0A3D2B]">3.6k+</span>
              <span className="ml-4 text-xl text-[#0A3D2B]">Happy<br />Customers</span>
            </div>
            <p className="mt-4 text-[#0A3D2B] max-w-xl">
              Let's bring your dream garden to life! Whether you're looking for a complete landscape overhaul or simple garden maintenance.
            </p>
          </div>

          <div className="w-full md:w-5/12 bg-[#0A3D2B] text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Ready To Transform Your Outdoor Space?
            </h2>
            
            <div className="flex items-center justify-center mb-4">
              <div className="border-t border-gray-400 flex-grow"></div>
              <div className="mx-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12h20M12 2c-2.4 5.4-2.4 14.6 0 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="border-t border-gray-400 flex-grow"></div>
            </div>
            
            <p className="mb-6 text-sm">
              Contact us today for a free consultation and discover how we can turn your vision into reality.
            </p>
            
            <div className="flex items-center justify-between">
              <button className="bg-white text-[#0A3D2B] py-2 px-4 rounded-full text-sm font-semibold">
                Learn More
              </button>
              <div className="bg-[#0D4D36] rounded-full p-2">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GardenInformatie;