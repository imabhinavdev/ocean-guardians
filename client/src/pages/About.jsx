import React from "react";
import beach from "../assets/beach.jpg";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-auto">
      <div className="flex justify-between items-center">
        <header className="relative w-[60%] h-96">
          <video
            autoPlay
            playsInline
            muted
            loop
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover"
            poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
          >
            <source
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm"
              type="video/webm"
            />
            <source
              src="http://thenewcode.com/assets/videos/ocean-small.mp4"
              type="video/mp4"
            />
          </video>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className="absolute top-0 left-0 w-full h-full"
          >
            <defs>
              <mask id="text-mask" x="0" y="0" width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <text
                  x="50"
                  y="100"
                  fontFamily="Biko, sans-serif"
                  fontSize="120"
                  fontWeight="800"
                  fill="black"
                >
                  Who are
                </text>
                <text
                  x="50"
                  y="240"
                  fontFamily="Biko, sans-serif"
                  fontSize="120"
                  fontWeight="800"
                  fill="black"
                >
                  Ocean
                </text>
                <text
                  x="50"
                  y="370"
                  fontFamily="Biko, sans-serif"
                  fontSize="120"
                  fontWeight="800"
                  fill="black"
                >
                  Guardians?
                </text>
              </mask>
            </defs>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="white"
              mask="url(#text-mask)"
            />
          </svg>
        </header>

        <img src={beach} alt="Beach" className="w-[40%] text-left" />
      </div>
      <div>
        <p className="text-2xl mt-5">
          We are the Ocean Guardians, a dedicated team committed to raising
          awareness about the critical importance of marine life and the
          devastating impact of human activities on our oceans.{" "}
          <span className="text-[#0048c9] font-bold">Our mission</span> is to
          educate and inform the public about the urgent need to preserve the
          biodiversity of life below water. Through our website,{" "}
          <span className="text-[#0048c9] font-bold">we aim</span> to provide
          insightful information on how pollution—whether it be plastic waste,
          agricultural runoff, or overfishing—affects marine creatures. These
          creatures, unable to advocate for themselves, face dire consequences
          due to human actions. By shedding light on these issues,{" "}
          <span className="text-[#0048c9] font-bold">we hope</span> to inspire
          collective action towards sustainable practices that protect and
          preserve our oceans for future generations. Join us in our quest to
          make a difference and ensure a thriving, healthy marine ecosystem.
          Together, we can safeguard the delicate balance of life below water.
        </p>
      </div>
      <div className="text-center mt-10 bg-blue-500 text-3xl font-bold text-white py-3 rounded-md">
        We save Ocean! We save lives!
      </div>
    </div>
  );
};

export default About;
