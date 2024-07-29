import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const marqueeTexts = [
    "Save Ocean! Save Lives!"
];

const Marquee = () => {
    const marqueeElements = useRef([]);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const marqueeTween = useRef();

    useEffect(() => {
        const resizeHandler = () => {
            gsap.set(marqueeElements.current, { clearProps: "all" });
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", resizeHandler);
        resizeHandler(); // Initial call to set the screen width

        return () => {
            window.removeEventListener("resize", resizeHandler);
            if (marqueeTween.current) {
                marqueeTween.current.pause().kill();
            }
        };
    }, []);

    useEffect(() => {
        if (marqueeElements.current.length) {
            marqueeInitialSet();
            if (marqueeTween.current) {
                marqueeTween.current.pause().kill();
            }
            marqueeTween.current = gsap.to(marqueeElements.current, {
                x: `+=${screenWidth * 1.5}`,
                ease: "none",
                repeat: -1,
                duration: 10,
                rotation: 0.1,
                modifiers: {
                    x: (x) => (parseFloat(x) % (screenWidth * 1.5)) + "px"
                }
            });
        }
    }, [screenWidth]);

    const marqueeInitialSet = () => {
        gsap.set(marqueeElements.current, {
            xPercent: -100,
            x: (index) => (screenWidth / 2) * index
        });
    };

    const marqueeElementsRefHandler = (el, i) => {
        marqueeElements.current[i] = el;
    };

    const renderMarqueeElements = () => {
        const elements = [...marqueeTexts];
        if (elements.length === 1) {
            elements[1] = elements[2] = elements[0];
        }
        if (elements.length === 2) {
            elements[2] = elements[0];
        }
        return elements.map((text, index) => (
            <p
                className="text-center px-4 text-6xl font-semibold absolute pin-l w-1/2 font-mine"
                key={`marquee-${index}`}
                ref={(el) => marqueeElementsRefHandler(el, index)}
            >
                {text}
            </p>
        ));
    };

    return (
        <div
            className="relative w-full   py-4  bg-[#45c4b0] text-gray-200 flex overflow-hidden items-center"
            style={{ minHeight: "100px" }}
        >
            {renderMarqueeElements()}
        </div>
    );
};

export default Marquee;
