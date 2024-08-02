import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slidesData = [
  {
    id: 1,
    content: "Who are Ocean Guardians?",
    bgUrl: "https://placedog.net/1920?id=1",
    para: "We are a team dedicated to protecting marine life and oceans. Our mission is to raise awareness about ocean pollution and promote sustainable practices.",
  },
  {
    id: 2,
    content: "SLIDE 2",
    bgUrl: "https://placedog.net/1920?id=2",
    para: "Slide 2 content goes here. We will discuss the importance of marine conservation and how individuals can contribute.",
  },
  {
    id: 3,
    content: "SLIDE 3",
    bgUrl: "https://placedog.net/1920?id=3",
    para: "Slide 3 content goes here. This section will highlight the impact of plastic pollution on marine ecosystems.",
  },
  {
    id: 4,
    content: "SLIDE 4",
    bgUrl: "https://placedog.net/1920?id=4",
    para: "Slide 4 content goes here. We will explore the role of technology in monitoring and protecting ocean life.",
  },
  {
    id: 5,
    content: "SLIDE 5",
    bgUrl: "https://placedog.net/1920?id=5",
    para: "Slide 5 content goes here. This slide focuses on the various initiatives taken by governments and organizations for ocean conservation.",
  },
  {
    id: 6,
    content: "SLIDE 6",
    bgUrl: "https://placedog.net/1920?id=6",
    para: "Slide 6 content goes here. The final slide encourages everyone to take action and support ocean-friendly initiatives.",
  },
];

const ParallaxSlides = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const slides = gsap.utils.toArray(".slide");
    const getRatio = (el) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    slides.forEach((slide, i) => {
      const bg = slide.querySelector(".background");
      const content = slide.querySelector(".content");
      const para = slide.querySelector(".para");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: () => (i ? "top bottom" : "top top"),
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        bg,
        {
          y: () => (i ? -window.innerHeight * getRatio(slide) : 0),
        },
        {
          y: () => window.innerHeight * (1 - getRatio(slide)),
          ease: "none",
        }
      );

      tl.fromTo(
        [content, para],
        {
          y: () => (i ? window.innerHeight * -getRatio(slide) * 2 : 0),
        },
        {
          y: () => window.innerHeight * getRatio(slide) * 2,
          ease: "none",
        },
        0
      );
    });
  }, []);

  return (
    <main>
      <section className="ends mb-20 flex justify-center items-center text-5xl font-bold">
        Get to Know about Ocean Guardians!
      </section>
      <section ref={containerRef} className="slides relative z-10">
        <ul className="list flex flex-col">
          {slidesData.map((slide) => (
            <li
              key={slide.id}
              className="slide relative overflow-hidden w-screen h-screen flex flex-col justify-center items-center"
            >
              <div
                className="background absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.bgUrl})` }}
              ></div>
              <div className="content text-center text-white uppercase text-4xl font-medium z-10">
                {slide.content}
              </div>
              <div className="para text-center text-white text-lg font-normal z-10 mt-6 px-6 py-4 bg-black bg-opacity-50 max-w-2xl rounded">
                {slide.para}
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="ends min-h-screen flex justify-center items-center text-5xl font-bold">
        So fun, right?
      </section>
    </main>
  );
};

export default ParallaxSlides;
