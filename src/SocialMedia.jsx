import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <ul className="flex space-x-4">
        <li className="relative bg-white rounded-full w-12 h-12 flex justify-center items-center shadow-lg cursor-pointer transition-transform transform hover:scale-110 hover:bg-blue-600">
          <span className="absolute top-[-45px] opacity-0 bg-white text-black text-sm px-2 py-1 rounded shadow-md transition-opacity duration-300 group-hover:opacity-100">Facebook</span>
          <svg viewBox="0 0 320 512" height="1.2em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
          </svg>
        </li>
        <li className="relative bg-white rounded-full w-12 h-12 flex justify-center items-center shadow-lg cursor-pointer transition-transform transform hover:scale-110 hover:bg-blue-400">
          <span className="absolute top-[-45px] opacity-0 bg-white text-black text-sm px-2 py-1 rounded shadow-md transition-opacity duration-300 group-hover:opacity-100">Twitter</span>
          <svg height="1.8em" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
          </svg>
        </li>
        <li className="relative bg-white rounded-full w-12 h-12 flex justify-center items-center shadow-lg cursor-pointer transition-transform transform hover:scale-110 hover:bg-pink-500">
          <span className="absolute top-[-45px] opacity-0 bg-white text-black text-sm px-2 py-1 rounded shadow-md transition-opacity duration-300 group-hover:opacity-100">Instagram</span>
          <FontAwesomeIcon icon={faSquareInstagram} className="text-xl" />
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
