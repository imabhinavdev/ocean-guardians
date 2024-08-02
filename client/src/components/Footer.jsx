// src/components/Footer.jsx

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Footer = () => {
  const fishRef = useRef(null);
  const bubblesRef = useRef(null);

  useEffect(() => {
    gsap.to(fishRef.current, {
      x: 100,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 5,
    });

    gsap.to(bubblesRef.current, {
      y: -50,
      opacity: 0,
      repeat: -1,
      ease: "power1.inOut",
      duration: 3,
      stagger: 0.5,
    });
  }, []);

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Ocean Guardians</h3>
          <p className="text-sm">Protecting our oceans and marine life</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/community" className="hover:text-blue-300">
                Community
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900 to-transparent" />
      <div
        ref={fishRef}
        className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full shadow-lg transform translate-y-1/2"
        style={{ backgroundImage: "url('/path-to-fish-image.png')" }}
      />
      <div
        ref={bubblesRef}
        className="absolute bottom-0 right-0 w-8 h-8 bg-blue-300 rounded-full transform translate-y-full opacity-75"
      />
      <div
        ref={bubblesRef}
        className="absolute bottom-0 right-8 w-6 h-6 bg-blue-200 rounded-full transform translate-y-full opacity-75"
      />
      <div
        ref={bubblesRef}
        className="absolute bottom-0 right-16 w-4 h-4 bg-blue-100 rounded-full transform translate-y-full opacity-75"
      />
    </footer>
  );
};

export default Footer;
