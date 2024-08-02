// src/pages/CommunityDashboard.jsx

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import ResearchImg from "../assets/research.jpg";
import BeachCleanupImg from "../assets/beachCleanup.jpg";
import CommunityEngagementImg from "../assets/communityEngagement.jpg";
import AwarenessCampaignImg from "../assets/awarenessCampaign.avif";
import Volunteer from "./Volunteer";

// Updated background image URL
const backgroundImage =
  "https://img.freepik.com/free-photo/mesmerizing-shot-crystal-blue-ocean-waves_181624-48854.jpg?t=st=1722600761~exp=1722604361~hmac=0f90c955c3f6390d39dde995550785809fe14d879eba2da041007c82dc008422&w=1380";

const CommunityDashboard = () => {
  const headlineRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      headlineRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      detailsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen py-8">
      <div className="relative mt-20">
        {/* Background Image and Headline */}
        <div
          ref={headlineRef}
          className="relative bg-cover bg-center h-80 text-white flex items-center justify-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl font-bold mb-4">
              Join the Ocean Guardians
            </h1>
            <blockquote className="text-xl italic">
              "Together, we can make waves of change and protect our oceans for
              future generations."
            </blockquote>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Details Section */}
        <div
          ref={detailsRef}
          className="bg-white p-8 rounded-lg shadow-lg mb-8 border border-blue-200"
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-800">
            Why Join Us?
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li>
              <strong>Make a Difference:</strong> Help protect marine life and
              reduce ocean pollution.
            </li>
            <li>
              <strong>Learn and Grow:</strong> Access educational resources and
              develop valuable skills.
            </li>
            <li>
              <strong>Connect and Collaborate:</strong> Network with like-minded
              individuals and professionals.
            </li>
            <li>
              <strong>Exclusive Access:</strong> Participate in special events
              and workshops.
            </li>
            <li>
              <strong>Recognition:</strong> Earn rewards and recognition for
              your contributions.
            </li>
          </ul>
        </div>

        {/* Planned Activities Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8 border border-blue-200">
          <h2 className="text-3xl font-semibold mb-6 text-blue-800">
            Planned Activities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Activity 1 */}
            <div className="relative w-full bg-white rounded-lg overflow-hidden shadow-sm transition-transform transform hover:scale-105 duration-300">
              <img
                src={BeachCleanupImg}
                alt="Beach Cleanup"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  Beach Cleanup Drives
                </h3>
                <p className="text-gray-700">
                  Organizing regular beach cleanup drives to reduce plastic
                  waste.
                </p>
              </div>
            </div>
            {/* Activity 2 */}
            <div className="relative w-full bg-white rounded-lg overflow-hidden shadow-sm transition-transform transform hover:scale-105 duration-300">
              <img
                src={AwarenessCampaignImg}
                alt="Awareness Campaigns"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  Awareness Campaigns
                </h3>
                <p className="text-gray-700">
                  Raising awareness about ocean pollution and marine
                  conservation.
                </p>
              </div>
            </div>
            {/* Activity 3 */}
            <div className="relative w-full bg-white rounded-lg overflow-hidden shadow-sm transition-transform transform hover:scale-105 duration-300">
              <img
                src={ResearchImg}
                alt="Research"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  Research and Data Collection
                </h3>
                <p className="text-gray-700">
                  Conducting research on marine biodiversity and the effects of
                  pollution.
                </p>
              </div>
            </div>
            {/* Activity 4 */}
            <div className="relative w-full bg-white rounded-lg overflow-hidden shadow-sm transition-transform transform hover:scale-105 duration-300">
              <img
                src={CommunityEngagementImg}
                alt="Community Engagement"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  Community Engagement
                </h3>
                <p className="text-gray-700">
                  Engaging with local communities to promote sustainable
                  practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How You Can Contribute Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-blue-200">
          <h2 className="text-3xl font-semibold mb-6 text-blue-800">
            How You Can Contribute
          </h2>
          <p className="text-gray-700 mb-4">
            As a new initiative, we welcome individuals, organizations, and
            volunteers to join us in our mission. Here are some ways you can get
            involved:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Participate in beach cleanups and awareness campaigns.</li>
            <li>Donate to support our activities and projects.</li>
            <li>Share our mission and activities on social media.</li>
            <li>
              Volunteer your time and expertise in organizing events and
              conducting research.
            </li>
          </ul>
          <div className="text-center mt-8">
            <Link
              to="/volunteer"
              className="inline-block bg-green-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-green-700 transition duration-300"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDashboard;
