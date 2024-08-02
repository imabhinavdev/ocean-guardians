// src/pages/JoinInitiative.jsx

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const JoinInitiative = () => {
  const formRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      messageRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Join Our Ocean Guardians Initiative
          </h1>
          <p className="text-lg text-gray-700">
            Dive into action and help us make waves in protecting our oceans and
            marine life.
          </p>
        </div>

        {/* Sign-Up Form */}
        <div
          ref={formRef}
          className="bg-white p-8 rounded-lg shadow-md mx-auto max-w-lg relative"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/clear-water-marine-texture_1150-14925.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-blue-800 opacity-50 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Sign Up to Make a Difference
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-white text-sm font-semibold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white text-sm font-semibold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-white text-sm font-semibold mb-2"
                >
                  Why Do You Want to Join?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Message Section */}
        <div
          ref={messageRef}
          className="bg-white p-8 rounded-lg shadow-md mx-auto max-w-lg mt-8"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/clear-water-ocean-background_1150-12240.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-blue-800 opacity-50 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">
              What Happens Next?
            </h2>
            <p className="text-gray-700">
              After you submit the form, our team will review your application
              and get in touch with you regarding the next steps. We will
              provide information on upcoming events, volunteer opportunities,
              and other ways you can contribute to our mission.
            </p>
            <div className="text-center mt-6">
              <Link
                to="/"
                className="inline-block bg-green-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-green-700 transition duration-300"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinInitiative;
