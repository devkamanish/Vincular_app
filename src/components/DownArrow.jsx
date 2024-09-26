import React from 'react';

const DownArrow = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-bounce">
        <svg
          className="w-8 h-8 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default DownArrow;
