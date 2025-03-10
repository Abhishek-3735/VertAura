import React from 'react';
import icon from './Assets/icon.png';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <div id='contactsection' className="bg-green-900">
      <div className="flex items-center justify-center">
        <img src={icon} alt="icon" className="h-28" />
      </div>
      <div className="flex flex-col items-center gap-0">
        <SocialMedia className="mb-0" />
        <h2 className="text-center m-0 p-0 text-teal-50">VertAura &copy; 2025 | All rights Reserved</h2>
      </div>
    </div>
  );
};

export default Footer;
