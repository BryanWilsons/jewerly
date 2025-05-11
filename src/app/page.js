'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import LOGO from './Assets/large.png';
import NECKLACE from './Assets/necklace.png';
import BRACELETS from './Assets/bracelets.png';
import EARRING from './Assets/earring.png';

const NavLink = ({ href, children }) => (
  <a href={href} className="text-gray-700 hover:text-amber-600 block px-4 py-2">
    {children}
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 h-[90px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Image
              src={LOGO}
              className="gallery-img z-0"
              style={{ marginTop: '20px' }}
              alt="Logo"
              width={150}
              height={200}
              objectFit="cover"
            />
          </div>
          <div className="hidden md:flex space-x-8 items-center text-purple-400">
            <NavLink href="#necklaces">Necklaces</NavLink>
            <NavLink href="#bracelets">Bracelets</NavLink>
            <NavLink href="#earrings">Earrings</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4">
          <NavLink href="#necklaces">Necklaces</NavLink>
          <NavLink href="#bracelets">Bracelets</NavLink>
          <NavLink href="#earrings">Earrings</NavLink>
          <NavLink href="#gallery">Gallery</NavLink>
        </div>
      )}
    </nav>
  );
};

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
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Joi Jewels</h1>
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
          <div className="overflow-hidden rounded-lg shadow-md w-full max-w-[300px]">
            <Image
              src={NECKLACE}
              alt="Necklace"
              style={{ transition: "transform 0.3s ease" }}
              width={300}
              height={256}
              objectFit="cover"
              className="w-full h-auto"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md w-full max-w-[300px]">
            <Image
              src={BRACELETS}
              alt="Bracelets"
              style={{ transition: "transform 0.3s ease" }}
              width={300}
              height={256}
              objectFit="cover"
              className="w-full h-auto"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md w-full max-w-[300px]">
            <Image
              src={EARRING}
              alt="Earring"
              style={{ transition: "transform 0.3s ease" }}
              width={300}
              height={256}
              objectFit="cover"
              className="w-full h-auto"
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
      <p>© 2025 Joi Jewels. All rights reserved.</p>
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

const JewelryFrontPage = () => (
  <div className="font-serif text-gray-800 w-screen">
    <Navbar />
    <Hero />
    <Gallery />
    <Footer />
  </div>
);

export default JewelryFrontPage;