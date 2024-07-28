import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./test.css";

gsap.registerPlugin(ScrollTrigger);

const Circle = () => {
    const wrapRef = useRef(null);
    const panelsRefs = useRef([]);
    panelsRefs.current = [];

    useLayoutEffect(() => {
        const panels = panelsRefs.current;
        const totalPanels = panels.length;

        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: wrapRef.current,
                    start: "top top",
                    end: "+=" + (100 * totalPanels + 1) + "%",
                    scrub: true,
                    pin: true,
                    markers: {
                        startColor: "white",
                        endColor: "white",
                    },
                },
            })
                .to(wrapRef.current, {
                    clipPath: "circle(71% at 50% 50%)",
                    duration: 1 / totalPanels,
                })
                .to(panels, {
                    xPercent: -100 * (totalPanels - 1),
                    duration: 1,
                    ease: "none",
                });
        });

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !panelsRefs.current.includes(el)) {
            panelsRefs.current.push(el);
        }
    };

    return (
      <>
        <div className="section"></div>
        <div className="section wrapper" ref={wrapRef}>
          <div className="content">
            <div
              className="panel teal text-7xl font-bold text-center"
              ref={addToRefs}
            >
              We help Communities to reduce pollution.
            </div>
            <div
              className="panel purple text-7xl font-bold text-center"
              ref={addToRefs}
            >
              We help Connect Communities
            </div>
            <div className="panel green " ref={addToRefs}>
              <p className="text-7xl font-bold text-center">
                We provide marine education.
              </p>
              
            </div>
            <div
              className="panel orange text-7xl font-bold text-center"
              ref={addToRefs}
            >
              Support Marine Life!
            </div>
            <div
              className="panel blue text-7xl font-bold text-center"
              ref={addToRefs}
            >
              Donate and be an Ocean Guardian.
            </div>
          </div>
        </div>
        <div className="section">
          <p className="text-6xl text-center pt-10 font-bold text-white ">
            Ocean Guardians Impact Chart
          </p>
          <div className="flex justify-around mt-32">
            <div className="w-96 h-96 bg-cyan-300 rounded-full text-center font-bold text-2xl text-[#0048c9]">
              <div className="flex justify-between items-center  h-full">
                <div className=" w-full">
                  <p>Communites Connected</p>
                  <p className="text-white text-5xl">200+</p>
                </div>
              </div>
            </div>
            <div className="w-96 h-96 bg-cyan-300 rounded-full text-center font-bold text-2xl text-[#0048c9]">
              <div className="flex justify-between items-center  h-full">
                <div className=" w-full">
                  <p>Pollution Decreased</p>
                  <p className="text-white text-5xl">20%</p>
                </div>
              </div>
            </div>
            <div className="w-96 h-96 bg-cyan-300 rounded-full text-center font-bold text-2xl text-[#0048c9]">
              <div className="flex justify-between items-center  h-full">
                <div className=" w-full">
                  <p>Awareness Increased</p>
                  <p className="text-white text-5xl">40%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Circle;
