import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-zinc-900 p-20 relative">
      <div className="flex w-full h-full justify-between">
        <div className="w-1/2 h-full flex flex-col justify-between">
          <div className="heading">
            <motion.h1 
              className="text-[5vw] font-semibold leading-none mb-1 uppercase text-white" 
              initial={{ opacity: 0, y: -50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              Eye-
            </motion.h1>
            <motion.h1 
              className="text-[5vw] font-semibold leading-none mb-1 uppercase text-white" 
              initial={{ opacity: 0, y: -50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Opening
            </motion.h1>
          </div>
          <motion.svg
            width="72"
            height="30"
            viewBox="0 0 72 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {/* SVG paths */}
          </motion.svg>
          <motion.p
            className="text-white mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Your daily dose of eye-opening content. Stay connected and inspired.
          </motion.p>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-between">
          <motion.h1 
            className="text-[5vw] font-semibold leading-none mb-1 uppercase text-white" 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Presentation
          </motion.h1>
          <motion.div 
            className="dets mt-10 flex flex-col space-y-4"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.2 }}
          >
            <a className='flex items-center text-white hover:text-yellow-400 transition duration-300' href="#">
              <FaFacebookF className="mr-2" /> Facebook
            </a>
            <a className='flex items-center text-white hover:text-yellow-400 transition duration-300' href="#">
              <FaInstagram className="mr-2" /> Instagram
            </a>
            <a className='flex items-center text-white hover:text-yellow-400 transition duration-300' href="#">
              <FaWhatsapp className="mr-2" /> Whatsapp
            </a>
            <a className='flex items-center text-white hover:text-yellow-400 transition duration-300' href="#">
              <FaTwitter className="mr-2" /> Twitter
            </a>
          </motion.div>
          <motion.div 
            className="contact mt-10"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.5 }}
          >
            <p className="text-white">Contact us at:</p>
            <p className="text-white">email@example.com</p>
            <p className="text-white">123-456-7890</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
