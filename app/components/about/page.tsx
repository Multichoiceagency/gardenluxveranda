import React from 'react';
import Image from 'next/image';
import { Check, Phone } from 'lucide-react';

const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side with images */}
          <div className="lg:w-1/2 relative h-[300px] lg:h-[500px] w-full">
            {/* Main large image - visible on all screens */}
            <div className="absolute inset-0 lg:right-0 lg:bottom-0 lg:w-[400px] lg:h-[600px] z-20">
              <Image 
                src="/images/about-img-1.jpg" 
                alt="Gardener"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            {/* Smaller overlapping image - hidden on mobile */}
            <div className="hidden lg:block absolute left-0 right-20 top-0 w-[400px] h-[250px] z-30">
              <Image 
                src="/images/about-img-2.jpg" 
                alt="Gardener working"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            {/* SVG overlay - adjusted for mobile */}
            <div className="absolute left-1/2 top-1/2 lg:left-40 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] lg:w-[336px] lg:h-[365px] z-10">
              <svg width="336" height="365" viewBox="0 0 336 365" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M222.003 167.759C260.808 126.16 249.666 101.156 249.666 101.156C270.633 122.019 277.873 145.12 277.873 145.12C275.565 161.541 244.984 185.396 244.984 185.396C223.411 198.022 231.557 202.764 231.557 202.764C233.971 206.924 255.543 194.296 255.543 194.296C273.777 181.13 286.255 163.264 286.255 163.264C289.983 174.148 288.998 198.665 288.998 198.665C294.741 243.125 250.024 256.123 250.024 256.123C233.494 265.109 223.973 256.637 223.973 256.637C206.999 231.307 193.908 236.442 193.908 236.442C189.504 241.785 195.093 246.801 195.093 246.801C204.544 260.436 204.774 268.928 204.774 268.928C207.086 285.752 188.337 302.832 188.337 302.832C180.824 304.43 174.225 301.385 167.655 301.439C159.584 301.503 147.678 305.025 141.107 303.496C132.156 301.415 127.251 296.705 121.257 293.452C110.197 287.448 105.839 282.04 105.839 282.04C120.913 282.072 137.131 277.15 137.131 277.15C180.815 259.18 170.03 244.243 170.03 244.243C165.269 242.961 160.094 248.467 160.094 248.467C124.332 281.767 88.4019 267.973 88.4019 267.973C72.9304 251.996 60.3641 226.645 60.3641 226.645C60.3641 226.645 60.8076 226.917 61.2599 227.181C87.3944 242.412 138.861 229.963 138.861 229.963C158.084 225.526 154.377 218.758 154.377 218.758C150.857 212.25 138.1 219.101 138.1 219.101C104.107 228.695 62.0769 210.812 62.0769 210.812C49.4395 183.504 50.9708 159.471 50.9708 159.471C61.617 176.395 106.18 184.704 106.18 184.704C129.971 195.855 143.453 187.279 143.453 187.279C145.356 176.834 129.148 174.008 129.148 174.008C87.6354 172.102 57.0305 139.525 57.0305 139.525C63.0859 127.69 67.4366 117.53 70.526 108.85C76.0637 119.213 84.7715 132.166 96.2276 138.774C96.2276 138.774 116.757 150.311 120.607 142.023C120.607 142.023 120.837 132.415 87.8661 115.695C87.8661 115.695 79.4207 112.999 71.8632 104.955C82.0415 74.0938 75.4434 63.6774 75.4434 63.6774C84.2224 73.6551 130.081 64.1461 130.081 64.1461C140.468 83.9786 138.986 112.441 138.986 112.441C135.495 134.849 146.528 134.873 146.528 134.873C155.84 135.779 157.832 123.281 157.832 123.281C157.731 79.5503 134.673 53.0713 134.673 53.0713C159.824 49.7586 175.579 58.4991 175.579 58.4991C198.16 100.668 186.609 126.629 186.609 126.629C181.09 135.334 175.917 151.87 175.917 151.87C171.11 164.01 180.765 169.21 180.765 169.21C192.984 165.698 198.093 142.532 198.093 142.532C208.116 101.651 193.164 60.5102 193.164 60.5102C216.999 65.7264 234.842 84.7125 234.842 84.7125C247.942 111.845 233.308 132.448 233.308 132.448C214.786 161.522 211.129 178.564 211.129 178.564C210.504 186.685 222.003 167.759 222.003 167.759Z" fill="#0B3D2C"/>
                <path d="M167.222 192.939C172.335 203.68 178.146 213.913 184.404 223.952C190.675 233.969 197.455 243.69 204.823 252.996C212.187 262.302 220.144 271.194 228.836 279.42C233.164 283.554 237.748 287.437 242.46 291.182C247.206 294.89 252.186 298.329 257.334 301.548L262.359 292.931C257.441 290.139 252.623 287.12 247.978 283.805C243.363 280.451 238.831 276.943 234.509 273.157C225.832 265.629 217.736 257.347 210.162 248.584C202.585 239.821 195.516 230.575 188.922 220.989C182.353 211.409 176.132 201.468 170.715 191.254L167.222 192.939Z" fill="#0B3D2C"/>
              </svg>
            </div>
          </div>

          {/* Right side content */}
          <div className="lg:w-1/2 lg:pl-16 mt-8 lg:mt-0">
            <div className="flex items-center mb-4">
              <span className="text-5xl font-bold text-green-800 mr-4">58+</span>
              <span className="text-xl text-green-700">Years Of<br />Experience</span>
            </div>

            <div className="flex items-center mb-6">
              <span className="text-green-600 mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 3V5C21 14.627 14.627 21 5 21H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 3C12.627 3 19 9.373 19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="text-green-600 font-semibold">About Us</span>
            </div>

            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Sowing dreams, <span className="text-green-600">growing landscapes</span>
            </h2>

            <p className="text-gray-600 mb-6">
              We transform your landscaping dreams into reality, crafting beautiful, tranquil
              outdoor spaces that reflect your vision and enhance your lifestyle. Let us grow
              beauty and joy in every garden.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {['We Are Experience Gardeing', 'We Adapt Your Need'].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <Image 
                  src="/images/ceo-avatar.jpg" 
                  alt="Arlene McCoy"
                  width={48}
                  height={48}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-green-800">Arlene McCoy</p>
                  <p className="text-sm text-gray-600">CEO & Founder</p>
                </div>
              </div>
              <div className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg">
                <Phone className="mr-2" />
                <div>
                  <p className="text-xs">Call Us Any Time</p>
                  <p className="font-semibold">(+01) 789 987 645</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;