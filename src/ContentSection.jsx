import React from 'react';
import Button from './Button';
import Slider from './Slider';

const ContentSection = () => {
  return (
    <div id='Aboutsection' className="sec_2 bg-green-900  p-6 md:p-12">
  <Button/>
      <p className="para pb-7  text-sm md:text-base text-neutral-300 font-light leading-relaxed">
      " Transform your spaces with lush greenery! 
      We provide premium indoor plants for a refreshing atmosphere, 
      boosting productivity in offices and bringing nature into homes.
      <br /> 
      From elegant Wall gardens to Modern terrace plants, 
      we design vibrant green spaces tailored to your needs. Plus, 
      enjoy the convenience of Greenery delivered right to your doorstep! #BreatheGreen #EcoLiving"  
 <br />
      </p>
      <div className=''>
        <Slider/>
      </div>
    </div>
  );
};

export default ContentSection;