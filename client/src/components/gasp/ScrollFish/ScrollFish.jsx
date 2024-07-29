import React from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useRef, useEffect } from 'react';
import './styles.css';
const ScrollFish = () => {
    const fishRef = useRef(null);
    const bubblesRef = useRef(null);
    const sectionsRef = useRef([]);
    const lightsRef = useRef(null);
    const raysRef = useRef(null);

    useEffect(() => {
        const rx = window.innerWidth < 1000 ? window.innerWidth / 1200 : 1;
        const ry = window.innerHeight < 700 ? window.innerHeight / 1200 : 1;

        const path = [
            { x: 800, y: 200 },
            { x: 900, y: 20 },
            { x: 1100, y: 100 },
            { x: 1000, y: 200 },
            { x: 900, y: 20 },
            { x: 10, y: 500 },
            { x: 100, y: 300 },
            { x: 500, y: 400 },
            { x: 1000, y: 200 },
            { x: 1100, y: 300 },
            { x: 400, y: 400 },
            { x: 200, y: 250 },
            { x: 100, y: 300 },
            { x: 500, y: 450 },
            { x: 1100, y: 500 }
        ];

        const scaledPath = path.map(({ x, y }) => ({ x: x * rx, y: y * ry }));

        const bubblesTimeline = gsap.timeline().set('.bubbles__bubble', {
            y: 100,
        }).to('.bubbles__bubble', {
            scale: 1.2,
            y: -300,
            opacity: 1,
            duration: 2,
            stagger: 0.2,
        }).to('.bubbles__bubble', {
            scale: 1,
            opacity: 0,
            duration: 1,
        }, '-=1').pause();

        const fishTimeline = gsap.timeline({
            scrollTrigger: {
                scrub: 1.5,
            },
        }).to(fishRef.current, {
            motionPath: {
                path: scaledPath,
                align: 'self',
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
            },
            duration: 10,
            immediateRender: true,
        }).to('.indicator', {
            opacity: 0
        }, 0).to(fishRef.current, {
            rotateX: 180
        }, 1).to(fishRef.current, {
            rotateX: 0
        }, 2.5).to(fishRef.current, {
            z: -500,
            duration: 2,
        }, 2.5).to(fishRef.current, {
            rotateX: 180
        }, 4).to(fishRef.current, {
            rotateX: 0
        }, 5.5).to(fishRef.current, {
            z: -50,
            duration: 2,
        }, 5).to(fishRef.current, {
            rotate: 0,
            duration: 1,
        }, '-=1').to('.fish__skeleton', {
            opacity: 0.6,
            duration: 0.1,
            repeat: 4
        }, '-=3').to(['.fish__head', '.fish__body'], {
            opacity: 0,
            duration: 0.1,
            repeat: 4
        }, '-=3').to('.fish__inner', {
            opacity: 0.1,
            duration: 1
        }, '-=1').to('.fish__skeleton', {
            opacity: 0.1,
            duration: 1
        }, '-=1').pause();

        const lightsTimeline = gsap.timeline({
            scrollTrigger: {
                scrub: 6
            }
        }).from(lightsRef.current, {
            x: window.innerWidth * -1,
            y: window.innerHeight,
            ease: 'power4.out',
            duration: 80
        }, 0).to(lightsRef.current, {
            x: window.innerWidth,
            y: window.innerHeight * -1,
            ease: 'power4.out',
            duration: 80
        }, '-=5');

        const makeBubbles = (p, i) => {
            const { top, left } = fishRef.current.getBoundingClientRect();
            gsap.to(p, { opacity: 1, duration: 1 });
            gsap.set(bubblesRef.current, {
                x: left,
                y: top
            });
            if (bubblesTimeline.paused) {
                bubblesTimeline.restart();
            }
            if (i > 6) {
                gsap.to(bubblesRef.current, {
                    opacity: 0
                });
            }
        };

        const rotateFish = (self) => {
            if (self.direction === -1) {
                gsap.to(fishRef.current, { rotationY: 180, duration: 0.4 });
            } else {
                gsap.to(fishRef.current, { rotationY: 0, duration: 0.4 });
            }
        };

        const hideText = (p) => {
            gsap.to(p, { opacity: 0, duration: 1 });
        };

        sectionsRef.current.forEach((section, i) => {
            const p = section.querySelector('p');
            gsap.to(p, { opacity: 0 });

            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                onEnter: () => makeBubbles(p, i),
                onEnterBack: () => {
                    if (i <= 6) {
                        gsap.to(bubblesRef.current, {
                            opacity: 1
                        });
                    }
                },
                onLeave: () => {
                    hideText(p);
                    if (i === 0) {
                        gsap.to(raysRef.current, {
                            opacity: 0,
                            y: -500,
                            duration: 8,
                            ease: 'power4.in'
                        });
                    }
                },
                onLeaveBack: () => hideText(p),
                onUpdate: (self) => rotateFish(self)
            });
        });

        bubblesTimeline.play();
        fishTimeline.pause();
    }, []);

    return (
        <div className='body relative'>
            <p className="indicator">
                <span>Scroll</span>
                <span>↓</span>
            </p>
            <div className="fish-wrapper">
                <div className="fish" ref={fishRef}>
                    <div className="fish__skeleton"></div>
                    <div className="fish__inner">
                        <div className="fish__body"></div>
                        <div className="fish__body"></div>
                        <div className="fish__body"></div>
                        <div className="fish__body"></div>
                        <div className="fish__head"></div>
                        <div className="fish__head fish__head--2"></div>
                        <div className="fish__head fish__head--3"></div>
                        <div className="fish__head fish__head--4"></div>
                        <div className="fish__tail-main"></div>
                        <div className="fish__tail-fork"></div>
                        <div className="fish__fin"></div>
                        <div className="fish__fin fish__fin--2"></div>
                    </div>
                </div>
            </div>
            <div className="bubbles" ref={bubblesRef}>
                <div className="bubbles__inner">
                    <div className="bubbles__bubble"></div>
                    <div className="bubbles__bubble"></div>
                    <div className="bubbles__bubble"></div>
                </div>
            </div>
            <div className="rays" ref={raysRef}><div data-rays></div></div>
            <div className="lights">
                <div className="lights__group" data-lights="1" ref={lightsRef}>
                    <div className="lights__light"></div>
                    <div className="lights__light"></div>
                    <div className="lights__light"></div>
                    <div className="lights__light"></div>
                    <div className="lights__light"></div>
                    <div className="lights__light"></div>
                    <div className="lights__light"></div>
                    <div className="lights__light"></div>
                </div>
            </div>
            <div className="content">
                {["In the deepest ocean", "the bottom of the sea", "Your eyes...", "they turn me...", "turn me on to phantoms", "I follow to the edge of the earth", "and fall off", "I get eaten by the worms", "and weird fishes", "Hit the bottom and escape", "escape"].map((text, i) => (
                    <section key={i} ref={el => sectionsRef.current[i] = el}>
                        <div className="section__content">
                            <p>{text}</p>
                        </div>
                    </section>
                ))}
            </div></div>
    )
}

export default ScrollFish