// src/components/Footer.jsx

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Footer = () => {
  const fishRef = useRef(null);
  const bubblesRefs = useRef([]);

  useEffect(() => {
    gsap.to(fishRef.current, {
      x: 100,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 5,
    });

    bubblesRefs.current.forEach((bubble, index) => {
      gsap.to(bubble, {
        y: -50,
        opacity: 0,
        repeat: -1,
        ease: "power1.inOut",
        duration: 3,
        stagger: 0.5 * index,
      });
    });
  }, []);

  return (
    <footer className="bg-blue-800 text-white py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Ocean Guardians</h3>
          <p className="text-sm">Protecting our oceans and marine life</p>
        </div>
        <div className="flex-1 flex justify-end mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-teal-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-teal-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/community" className="hover:text-teal-300">
                Community
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-teal-300">
                Support
              </Link>
            </li>
            
          </ul>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center space-x-4 mb-4">
        <div
          ref={(el) => (bubblesRefs.current[0] = el)}
          className="w-8 h-8 bg-blue-300 rounded-full transform translate-y-full opacity-75"
        />
        <div
          ref={(el) => (bubblesRefs.current[1] = el)}
          className="w-6 h-6 bg-blue-200 rounded-full transform translate-y-full opacity-75"
        />
        <div
          ref={(el) => (bubblesRefs.current[2] = el)}
          className="w-4 h-4 bg-blue-100 rounded-full transform translate-y-full opacity-75"
        />
      </div>
      <div
        ref={fishRef}
        className="absolute bottom-0 left-0 w-16 h-16 bg-teal-500 rounded-full shadow-lg transform translate-y-1/2"
        style={{ backgroundImage: "url('/path-to-fish-image.png')" }}
      />
      <div className="text-center text-sm mt-4">
        &copy; {new Date().getFullYear()} Ocean Guardians. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
