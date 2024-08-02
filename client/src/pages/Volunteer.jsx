import React from "react";

const backgroundImage =
  "https://img.freepik.com/free-photo/nature-landscape-with-black-sand-beach_23-2151380363.jpg?t=st=1722610751~exp=1722614351~hmac=c58e485b87087464e9d191d8f3bff9c00b533f6d8ad0f1d2875d04d51c5720a3&w=1380";

const Volunteer = () => {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-blue-900 bg-opacity-70 p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Join Us in Making a Difference!
        </h1>
        <p className="text-lg md:text-xl mb-4">
          Become a volunteer with Ocean Guardians and help us protect and
          preserve our oceans. Your time and effort will contribute to our
          mission of reducing pollution and conserving marine biodiversity.
        </p>
        <p className="text-lg md:text-xl mb-6">
          Whether you're passionate about environmental issues or just want to
          give back to the community, we welcome you to join our initiative.
          Together, we can make a significant impact!
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:volunteer@oceanguardians.org"
            className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
          >
            Contact Us to Volunteer
          </a>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
