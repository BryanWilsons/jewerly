'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import LOGO from './Assets/large.png';
import NECKLACE from './Assets/necklace.png';
import BRACELETS from './Assets/bracelets.png';
import EARRING from './Assets/earring.png';






const Hero = () => (
  <section
    className="relative w-full h-[50vh] flex items-center justify-center text-center text-white "
    style={{
      backgroundImage: `linear-gradient(rgba(75, 73, 73, 0.5), rgba(0, 0, 0, 0.5)), url(./display.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div>
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Joi Jewelry</h1>
      <p className="text-xl md:text-2xl mb-6">Discover our exquisite jewelry collections</p>
      <a
        href="#gallery"
        className="bg-purple-400 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-all duration-100 ease-in"
        style={{ color: 'white' }}
      >
        Explore Now
      </a>
    </div>
  </section>
);

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          <div className="overflow-hidden rounded-lg shadow-md w-full max-w-[300px] h-[256px]">
            <Image
              src={NECKLACE}
              alt="Necklace"
              style={{ transition: "transform 0.3s ease" }}
              width={300}
              height={256}
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md w-full max-w-[300px] h-[256px]">
            <Image
              src={BRACELETS}
              alt="Bracelets"
              style={{ transition: "transform 0.3s ease" }}
              width={300}
              height={256}
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md w-full max-w-[300px] h-[256px]">
            <Image
              src={EARRING}
              alt="Earring"
              style={{ transition: "transform 0.3s ease" }}
              width={300}
              height={256}
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p>© 2025 Joi Jewelry. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="#" className="hover:text-amber-600">
          Contact
        </a>
        <a href="#" className="hover:text-amber-600">
          About
        </a>
        <a href="#" className="hover:text-amber-600">
          Terms
        </a>
      </div>
    </div>
  </footer>
);

const JewelryFrontPage = ({children}) => {
 const [isOpen, setIsOpen] = useState(false);

 return ( <>


    <Hero />
    <Gallery />
    {children}
    <Footer />

  </>
 )
};

export default JewelryFrontPage;