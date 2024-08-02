import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const backgroundImage1 =
  "https://img.freepik.com/free-photo/cute-fish-near-coral-reef_23-2150699235.jpg?t=st=1722617237~exp=1722620837~hmac=7507dba3e503dd508edf3950c993b51ccf77588323ca72a9bab3c917fe1f033c&w=1380";
const backgroundImage2 =
  "https://img.freepik.com/free-photo/beautiful-underwater-landscape-with-fish-corals_1268-31488.jpg?t=st=1722617373~exp=1722620973~hmac=629e83816402c2747033797abc2901d8466fb12bb9145e1294172da6a6b71724&w=1380";
const backgroundImage3 =
  "https://img.freepik.com/free-photo/front-view-smiling-kids-with-plastic-bags_23-2148472383.jpg?t=st=1722617619~exp=1722621219~hmac=0fbc084557dd12e6d0ffb62cc336e69e5ac119f55a4af72b4328913039b6c792&w=1380";
const backgroundImage4 =
  "https://img.freepik.com/free-photo/ai-generated-boat-picture_23-2150648103.jpg?t=st=1722617724~exp=1722621324~hmac=ae107cb1cd3503231fb0bda265d4ab10dbd9f46e9edf4cc7e968770c182343aa&w=826";
const backgroundImage5 =
  "https://img.freepik.com/free-photo/pretty-smiling-woman-casual-wear-near-sea_624325-3171.jpg?t=st=1722617978~exp=1722621578~hmac=e547b82485af782ccf60562a306a3d6e892f8abb63c5e25200a7eddbe77b23f4&w=1380";

const ScrollReveal = () => {
  const wrapRef = useRef(null);
  const panelsRefs = useRef([]);
  panelsRefs.current = [];

  useLayoutEffect(() => {
    const panels = panelsRefs.current;
    const totalPanels = panels.length;

    const ctx = gsap.context(() => {
      gsap
        .timeline({
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
          <div className="w-1/2 text-justify">
            <p className="font-nunito text-xl ml-10 mt-10">
              The world&apos;s oceans: their temperature, chemistry, currents
              and life, drive global systems that make the Earth habitable for
              humankind. How we manage this vital resource is essential for
              humanity as a whole, and to counterbalance the effects of climate
              change.
              <br />
              <br />
              Over three billion people depend on marine and coastal
              biodiversity for their livelihoods. However, today we are seeing
              30 percent of the world&apos;s fish stocks overexploited, reaching
              below the level at which they can produce sustainable yields.
              <br />
              <br />
              Oceans also absorb about 30 percent of the carbon dioxide produced
              by humans, and we are seeing a 26 percent rise in ocean
              acidification since the beginning of the industrial revolution.
              Marine pollution, an overwhelming majority of which comes from
              land-based sources, is reaching alarming levels, with an average
              of 13,000 pieces of plastic litter to be found on every square
              kilometre of ocean.
              <br />
              <br />
              The SDGs aim to sustainably manage and protect marine and coastal
              ecosystems from pollution, as well as address the impacts of ocean
              acidification. Enhancing conservation and the sustainable use of
              ocean-based resources through international law will also help
              mitigate some of the challenges facing our oceans.
            </p>
          </div>
          <div className="w-1/2 p-4 pt-12 h-[550px]">
            <img
              src="https://images.unsplash.com/photo-1513039464749-94912b3841ce?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="ocean"
              className="rounded-md w-full h-full object-cover"
            />
          </div>
          <div></div>
        </div>
      </div>
      <div className="section wrapper" ref={wrapRef}>
        <div className="content">
          <div
            className="panel teal text-8xl font-bold text-center"
            ref={addToRefs}
            style={{
              backgroundImage: `url(${backgroundImage1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            Beneath the Waves, Lives a World Worth Saving
          </div>
          <div
            className="panel purple text-8xl font-bold text-center"
            ref={addToRefs}
            style={{
              backgroundImage: `url(${backgroundImage2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            In the Quiet Depths, Every Creature Matters
          </div>
          <div
            className="panel green text-8xl font-bold text-center"
            ref={addToRefs}
            style={{
              backgroundImage: `url(${backgroundImage3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            Together, We Can End Water Pollution
          </div>
          <div
            className="panel orange text-8xl font-bold text-center"
            ref={addToRefs}
            style={{
              backgroundImage: `url(${backgroundImage4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            Innovative Techniques for Sustainable Fish Capture
          </div>
          <div
            className="panel blue text-8xl font-bold text-center"
            ref={addToRefs}
            style={{
              backgroundImage: `url(${backgroundImage5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            You !! Can Make a Difference, Be an Ocean Guardian
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollReveal;
