import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AnimatedButtonProps {
  text: string;
  variant?: 'green' | 'white';
  href?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  text, 
  variant = 'green', 
  href = '#' 
}) => {
  return (
    <div className="relative inline-block group">
      <a
        href={href}
        className={`
          inline-flex items-center justify-center px-6 py-3 rounded-full
          font-semibold text-sm transition-all duration-300 ease-in-out
          ${variant === 'green' 
            ? 'bg-green-500 text-white hover:bg-green-600' 
            : 'bg-white text-green-700 hover:bg-gray-100 border border-green-700'}
          pr-12
        `}
      >
        {text}
      </a>
      <div className={`
        absolute top-1/2 right-1 transform -translate-y-1/2
        w-8 h-8 rounded-full flex items-center justify-center
        transition-all duration-300 ease-in-out
        ${variant === 'green' ? 'bg-green-400' : 'bg-green-700'}
        group-hover:bg-opacity-80
      `}>
        <ArrowRight 
          className={`w-5 h-5 transition-all duration-300 ease-in-out
          ${variant === 'green' ? 'text-white' : 'text-white'}
          transform group-hover:translate-x-1`}
        />
      </div>
    </div>
  );
};

export default AnimatedButton;