import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./test.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = () => {
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
                    anticipatePin: 1,
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
              className="panel teal text-9xl font-bold text-center"
              ref={addToRefs}
            >
              We help Communities to reduce pollution.
            </div>
            <div
              className="panel purple text-9xl font-bold text-center"
              ref={addToRefs}
            >
              We help Connect Communities
            </div>
            <div className="panel green " ref={addToRefs}>
              <p className="text-9xl font-bold text-center">
                We provide marine education.
              </p>
              
            </div>
            <div
              className="panel orange text-9xl font-bold text-center"
              ref={addToRefs}
            >
              Support Marine Life!
            </div>
            <div
              className="panel blue text-9xl font-bold text-center"
              ref={addToRefs}
            >
              Donate and be an Ocean Guardian.
            </div>
          </div>
        </div>
        <div className="section">
          
        </div>
      </>
    );
};

export default ScrollReveal;
