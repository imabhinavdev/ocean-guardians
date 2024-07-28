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
                    <div className="panel teal" ref={addToRefs}>Text 1</div>
                    <div className="panel purple" ref={addToRefs}>Text 2</div>
                    <div className="panel green" ref={addToRefs}>Text 3</div>
                    <div className="panel orange" ref={addToRefs}>Text 4</div>
                    <div className="panel blue" ref={addToRefs}>Text 5</div>
                </div>
            </div>
            <div className="section"></div>
        </>
    );
};

export default Circle;
