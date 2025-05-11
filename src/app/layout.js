'use client';
import React, { useState } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from 'next/image';
import LOGO from './Assets/large.png';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Joi Jewelry",
//   description: "Beads,Necklace,Bracelets",
// };

export default function RootLayout({ children }) {

   const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ href, children, mobile = false }) => (
  <a
    href={href}
    className={`text-gray-700 hover:text-amber-600 block px-4 py-2 ${
      mobile ? 'hover:bg-purple-100 transition-colors duration-200' : ''
    }`}
  >
    {children}
  </a>
);


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <div className="font-serif text-gray-800 w-screen">
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
            <NavLink href="/necklaces">Necklaces</NavLink>
            <NavLink href="/bracelets">Bracelets</NavLink>
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
        <div
          className="md:hidden bg-white px-4 pt-2 pb-4 fixed top-0 left-0 w-full h-[50vh] z-50 flex flex-col transition-transform duration-300 ease-in-out transform translate-y-0"
          style={isOpen ? { transform: 'translateY(0)' } : { transform: 'translateY(-100%)' }}
        >
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-700 focus:outline-none p-2"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <NavLink href="/necklaces" mobile>Necklaces</NavLink>
          <NavLink href="/bracelets" mobile>Bracelets</NavLink>
          <NavLink href="#earrings" mobile>Earrings</NavLink>
          <NavLink href="#gallery" mobile>Gallery</NavLink>
        </div>
      )}
    </nav>
      </div>
        {children}
      </body>
    </html>
  );
}





// echo "# jewerly" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/BryanWilsons/jewerly.git
// git push -u origin main