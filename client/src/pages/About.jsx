import React from "react";
import beach from "../assets/beach.jpg";
import teamMember1 from "../assets/team1.jpg";
import teamMember2 from "../assets/team2.jpg";
import ParallaxSlides from "../components/gasp/paralexSlides";
const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-screen-xl mx-auto py-10 px-5">
        <div className="flex flex-col mt-10 md:flex-row justify-between items-center mb-10">
          <header className="relative w-full md:w-[60%] h-96 mb-5 md:mb-0">
            <h1 className="text-9xl font-bold text-blue-700">Who are</h1>
            <h1 className="text-9xl font-bold text-blue-700">Ocean</h1>
            <h1 className="text-9xl font-bold text-blue-700">Guardians</h1>
          </header>

          <img src={beach} alt="Beach" className="w-full md:w-[40%] " />
        </div>

        <div>
          <p className="text-xl mt-5">
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

        <div className="text-center mt-10 text-3xl bg-blue-300 w-full font-bold text-[#0048c9] py-3 rounded-md">
          We save the Ocean! We save lives!
        </div>

        <div className="flex  mt-10 gap-10 mb-10">
          <div className="p-5 mis-vis-wrapper rounded-md">
            <h1 className="text-center font-bold text-3xl mb-5">Mission</h1>
            <p className="text-xl" style={{ textAlign: "justify" }}>
              At Ocean Guardians, our mission is to protect and preserve marine
              biodiversity by raising awareness and promoting sustainable
              practices. We are dedicated to educating the public about the
              critical importance of marine life and the devastating impact of
              human activities on our oceans. Through our initiatives and
              projects, we aim to inspire collective action to reduce pollution,
              protect endangered species, and restore marine habitats. Together,
              we can safeguard the delicate balance of life below water and
              ensure a thriving, healthy marine ecosystem for future
              generations.
            </p>
          </div>
          <div className="p-5 mis-vis-wrapper rounded-md">
            <h1 className="text-center font-bold text-3xl mb-5">Vision</h1>
            <p className="text-xl" style={{ textAlign: "justify" }}>
              Our vision is to create a world where oceans are free from
              pollution, marine biodiversity flourishes, and every individual is
              conscious of their impact on marine ecosystems. We envision a
              future where sustainable practices are the norm, where communities
              globally are united in their commitment to protecting marine life,
              and where the health of our oceans reflects the health of our
              planet. By fostering a deep connection between people and the
              ocean, we strive to inspire a global movement dedicated to
              preserving the beauty and vitality of life below water for
              generations to come.
            </p>
          </div>
        </div>

      </div>
        <ParallaxSlides />
    </div>
  );
};

export default About;
