import React from 'react';
import ocean from "../assets/ocean.jpg";
import Marquee from '../components/gasp/marquee/index'
import ScrollReveal from '../components/gasp/ScrollReveal/index';
const Home = () => {
  return (
    <div className="home">
      <img
        src={ocean}
        alt="oceanimg"
        className="w-full max-h-screen relative"
      />
      <div className="container absolute top-80  left-48 text-9xl font-bold">
        <div id="title" className="">
          <h1 className="text-[#0048c9] text-center mb-10 w-full">
            OCEAN GUARDIANS
          </h1>
          <p className="text-6xl text-center text-white">You can be the one!</p>
        </div>
      </div>
      <Marquee />
      <ScrollReveal />
      <div className="w-full h-screen overflow-y-hidden">
        <iframe
          src="https://imabhinav.dev"
          title="Abhinav"
          className="w-screen h-full "
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
};

export default Home;
