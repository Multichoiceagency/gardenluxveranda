import React from 'react';

const GardenTransformationSection = () => {
  return (
    <div className="relative bg-[#F0FFF0] text-[#0A3D2B]">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/api/placeholder/1200/400')"}}></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8  flex flex-col md:flex-row items-stretch">
        <div className="flex-1 mb-8 md:mb-0 md:mr-8">
          <div className="flex items-center mb-4">
            <span className="text-6xl font-bold mr-4">3.6k+</span>
            <span className="text-xl">Happy<br />Customers</span>
          </div>
          <p className="mb-4">
            Let's bring your dream garden to life! Whether you're looking for a complete landscape overhaul or simple garden maintenance.
          </p>
        </div>

        <div className="bg-[#0A3D2B] text-white p-6 mb-32 rounded-lg flex-1 flex flex-col justify-between ">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Klaar voor vakantie in eigen tuin?
            </h2>
            
            <div className="flex items-center justify-center mb-6">
              <div className="border-t border-gray-400 flex-grow"></div>
              <div className="mx-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3L8 7l4 4-4 4 4 4 4-4-4-4 4-4z"></path>
                </svg>
              </div>
              <div className="border-t border-gray-400 flex-grow"></div>
            </div>
            
            <p className="mb-6">
              Contact us today for a free consultation and discover how we can turn your vision into reality.
            </p>
          </div>
          
          <button className="bg-white text-[#0A3D2B] py-2 px-4 rounded-full font-bold flex items-center justify-center">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GardenTransformationSection;