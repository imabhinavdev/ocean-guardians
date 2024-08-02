gsap.registerPlugin(ScrollTrigger);

let container = document.querySelector(".slides"),
  slides = gsap.utils.toArray(".slide"),
  getRatio = (el) =>
    window.innerHeight / (window.innerHeight + el.offsetHeight);

slides.forEach((slide, i) => {
  let bg = slide.querySelector(".background"),
    content = slide.querySelector(".content"),
    tl = gsap.timeline({
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
    content,
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
