import React from 'react';

const Button = () => {
  return (
    <div className="relative flex items-center justify-center p-4">
      <a
        href="#"
        className="text-lg sm:text-xl md:text-4xl lg:text-5xl font-bold pb-5 text-transparent bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text
         animate-[shine_3s_linear_infinite] px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 md:py-4 whitespace-nowrap text-center"
      >
        Designing Vibrant & Eco-Friendly Workspaces!
      </a>
    </div>
  );
};

export default Button;

// Add this to your global CSS or Tailwind config for animation
// @keyframes shine {
//   0% { background-position: 0; }
//   60% { background-position: 180px; }
//   100% { background-position: 180px; }
// }
