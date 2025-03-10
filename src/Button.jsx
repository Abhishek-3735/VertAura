import React from 'react';

const Button = () => {
  return (
    <div className="relative flex items-center justify-center p-4 text-center">
      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-5 text-transparent bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text animate-[shine_3s_linear_infinite] px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 md:py-4">
        <span className="inline sm:hidden">Designing Vibrant &<br /> Eco-Friendly Workspaces!</span>
        <span className="hidden sm:inline">Designing Vibrant & Eco-Friendly Workspaces!</span>
      </h2>
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
