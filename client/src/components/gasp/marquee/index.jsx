import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const marqueeTexts = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
    "Est iusto pariatur veritatis magnam itaque? Quas voluptas",
    "in ad deleniti rerum nobis explicabo modi, aliquam molestiae"
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
                className="text-center px-4 text-2xl font-semibold absolute pin-l w-1/2"
                key={`marquee-${index}`}
                ref={(el) => marqueeElementsRefHandler(el, index)}
            >
                {text}
            </p>
        ));
    };

    return (
        <div
            className="relative w-screen mt-8 py-4 bg-green-600 text-gray-200 flex overflow-hidden items-center"
            style={{ minHeight: "110px" }}
        >
            {renderMarqueeElements()}
        </div>
    );
};

export default Marquee;
