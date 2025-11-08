import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MarqueeList = () => {
const marqueeRef = useRef(null);
  useEffect(() => {
    const $marqueeWrap = marqueeRef.current;
    if (!$marqueeWrap) return;
    const listItems = $marqueeWrap.innerHTML;
    const repeatCount = 6;
    for (let i = 1; i < repeatCount; i++) {
      $marqueeWrap.innerHTML += listItems;
    }
    const totalWidth = $marqueeWrap.scrollWidth;
    const distance = totalWidth / 2;
    const pixelsPerSecond = 50;
    const duration = distance / pixelsPerSecond;
    const marqueeAnimation = gsap.fromTo(
      $marqueeWrap,
      { x: 0 },
      {
        x: -distance,
        duration,
        ease: "linear",
        repeat: -1,
      }
    );
    const handleMouseEnter = () => marqueeAnimation.pause();
    const handleMouseLeave = () => marqueeAnimation.resume();
    $marqueeWrap.addEventListener("mouseenter", handleMouseEnter);
    $marqueeWrap.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      marqueeAnimation.kill();
      $marqueeWrap.removeEventListener("mouseenter", handleMouseEnter);
      $marqueeWrap.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

return (
 <section className="usp-marquee-sec">
    <div className="usp-marquee-wrap" ref={marqueeRef}>
    <ul>
        <li>Uitgebreid aanbod</li>
        <li>Kwaliteitsgarantie</li>
        <li>Deskundig advies</li>
        <li>Transparant</li>
        <li>Gemakkelijke financiering</li>
        <li>Klanttevredenheid</li>
    </ul>
    </div>
 </section>
);
};

export default MarqueeList;