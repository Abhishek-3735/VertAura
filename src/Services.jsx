import React from 'react';
import { motion } from 'framer-motion';
import Order from './Order';
import O1 from './Assets/O1.webp';
import O2 from './Assets/O2.webp';
import O3 from './Assets/O3.webp';
import O4 from './Assets/O4.webp';
import Benefits from './Benifits';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Services = () => {  
  return (
    <div id='Services' className="bg-green-900 py-10">
      <Order />
      <div className="flex flex-wrap justify-center gap-5 p-5">
        {/* Card Component with Scroll Animation */}
        {[
          { img: O1, title: "Indoor Landscaping" },
          { img: O2, title: "Potted Plants" },
          { img: O3, title: "Living Walls" },
          { img: O4, title: "Indoor Greenery Care" }
        ].map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="border border-neutral-200 bg-teal-100  rounded-2xl 
            overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-md hover:shadow-gray-50 w-[300px]">
            <img 
              src={service.img} 
              alt={service.title} 
              className="w-full h-80 object-cover rounded-t-2xl transition-transform duration-300 hover:scale-110"
            />
            <h1 className="text-center font-bold text-2xl text-gray-800 py-4 transition-colors duration-300 hover:text-green-600">
              {service.title}
            </h1>
          </motion.div>
        ))}
      </div>
      <div>
        <Benefits/>
      </div>
    </div>
  );
};

export default Services;
