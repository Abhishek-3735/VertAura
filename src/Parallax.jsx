import React, { useEffect } from 'react';
import hill1 from './Assets/hill1.png';
import hill2 from './Assets/hill2.png';
import hill3 from './Assets/hill3.png';
import hill4 from './Assets/hill4.png';
import hill5 from './Assets/hill5.png';
import leaf from './Assets/leaf.png';
import plant from './Assets/plant.png';
import tree from './Assets/tree.png';

const Parallax = () => {
  useEffect(() => {
    const text = document.getElementById('text');
    const leaf = document.getElementById('leaf');
    const hill1 = document.getElementById('hill1');
    const hill4 = document.getElementById('hill4');
    const hill5 = document.getElementById('hill5');

    const handleScroll = () => {
      const value = window.scrollY;
      const isMobile = window.innerWidth < 768; // Adjust breakpoint as needed

      // Adjust parallax intensity for mobile
      const textMultiplier = isMobile ? 1.5 : 2.5;
      const leafMultiplier = isMobile ? -0.8 : -1.5;
      const hill5Multiplier = isMobile ? 0.8 : 1.5;
      const hill4Multiplier = isMobile ? -0.8 : -1.5;
      const hill1Multiplier = isMobile ? 0.8 : 1.5;

      if (text) text.style.marginTop = value * textMultiplier + 'px';
      if (leaf) {
        leaf.style.top = value * leafMultiplier + 'px';
        leaf.style.left = value * leafMultiplier + 'px';
      }
      if (hill5) hill5.style.left = value * hill5Multiplier + 'px';
      if (hill4) hill4.style.left = value * hill4Multiplier + 'px';
      if (hill1) hill1.style.top = value * hill1Multiplier + 'px';
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='Parallax' className="parallax relative flex justify-center items-center h-screen overflow-hidden">
      {/* Background Images */}
      <img src={hill1} id="hill1" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" alt="hill1" />
      <img src={hill2} id="hill2" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" alt="hill2" />
      <img src={hill3} id="hill3" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" alt="hill3" />
      <img src={hill4} id="hill4" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" alt="hill4" />
      <img src={hill5} id="hill5" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" alt="hill5" />

      {/* VertAura Text */}
      <h2
  id="text"
  className="absolute text-4xl md:text-7xl text-teal-900 font-bold z-80 pb-20 mb-28"
  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>VertAura
</h2>
      {/* Foreground Images */}
      <img src={tree} id="tree" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" alt="tree" />
      <img src={leaf} id="leaf" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" alt="leaf" />
      <img src={plant} id="plant" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" alt="plant" />
    </section>
  );
};

export default Parallax;
