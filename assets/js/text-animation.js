(function ($) {
    'use strict';

 let splitTitleLines = gsap.utils.toArray(".text-animation");
 
  splitTitleLines.forEach((splitTextLine) => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: "top 90%",
        end: "bottom 10%",
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });

    const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
    gsap.set(splitTextLine, { perspective: 400 });
    itemSplitted.split({ type: "lines" });
    tl2.from(itemSplitted.lines, {
      duration: 1,
      delay: 0.1,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1,
    });
  });






})(jQuery);