import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

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
      <div className="section">
        <div className="flex gap-8">
          <div className="w-1/2  text-justify">
            <p className="font-nunito text-2xl  ml-10 mt-10">The world&apos;s oceans: their temperature, chemistry, currents and life, drive global systems that make the Earth habitable for humankind. How we manage this vital resource is essential for humanity as a whole, and to counterbalance the effects of climate change.
              <br />
              <br />


              Over three billion people depend on marine and coastal biodiversity for their livelihoods. However, today we are seeing 30 percent of the world&apos;s fish stocks overexploited, reaching below the level at which they can produce sustainable yields.
              <br />
              <br />
              Oceans also absorb about 30 percent of the carbon dioxide produced by humans, and we are seeing a 26 percent rise in ocean acidification since the beginning of the industrial revolution. Marine pollution, an overwhelming majority of which comes from land-based sources, is reaching alarming levels, with an average of 13,000 pieces of plastic litter to be found on every square kilometre of ocean.
              <br />
              <br />
              The SDGs aim to sustainably manage and protect marine and coastal ecosystems from pollution, as well as address the impacts of ocean acidification. Enhancing conservation and the sustainable use of ocean-based resources through international law will also help mitigate some of the challenges facing our oceans.</p>
          </div>
          <div className="w-1/2 p-4 pt-12 ">
            <img src="https://images.unsplash.com/photo-1513039464749-94912b3841ce?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ocean" className="rounded-md w-full h-full" />

          </div>
          <div>
          </div>
        </div>

      </div>
      <div className="section wrapper" ref={wrapRef}>
        <div className="content">


          <div
            className="panel teal text-9xl font-bold text-center"
            ref={addToRefs}
          >
            Beneath the Waves, Lives a World Worth Saving
          </div>
          <div
            className="panel purple text-9xl font-bold text-center"
            ref={addToRefs}
          >
            In the Quiet Depths, Every Creature Matters
          </div>
          <div className="panel green " ref={addToRefs}>
            <p className="text-9xl font-bold text-center">
              Together, We Can End Water Pollution
            </p>

          </div>
          <div
            className="panel orange text-9xl font-bold text-center"
            ref={addToRefs}
          >
            Innovative Techniques for Sustainable Fish Capture
          </div>
          <div
            className="panel blue text-9xl font-bold text-center"
            ref={addToRefs}
          >
            You !! Can Make a Difference, Be an Ocean Guardian
          </div>
        </div>
      </div>

    </>
  );
};

export default ScrollReveal;
