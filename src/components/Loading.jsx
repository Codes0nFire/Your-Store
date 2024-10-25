import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="flex flex-col items-center space-y-6">
        <svg
          className="animate-spin h-16 w-16 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.6))' }}
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
        <h1
          className="text-3xl font-bold text-white"
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            letterSpacing: '0.05em',
          }}
        >
          Loading, please wait...
        </h1>
        <p className="text-white opacity-80">This might take a few seconds</p>
      </div>
    </div>
  );
};

export default Loading;
