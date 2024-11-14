import gsap from "gsap";
import { useEffect, useState } from "react";
import { heroVideo } from "../utils";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(heroVideo);

  useEffect(() => {
    // Initial animation
    gsap.to(".hero", { opacity: 1, delay: 2 });

    ScrollTrigger.matchMedia({
      // Desktop and tablet (768px and up)
      "(min-width: 768px)": function () {
        gsap.set(".hero-video", { borderRadius: "0px", width: "100%", height: "100%" });

        gsap.to(".hero-video", {
          width: "80%", 
          height: "80%", 
          borderRadius: "20px",
          duration: 1,
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      },

      // Mobile (below 768px)
      "(max-width: 767px)": function () {
        gsap.set(".hero-video", {
          borderRadius: "20px", // Apply static border radius
          width: "100%",
          height: "100%",
        });

        // Kill scroll-triggered animations on mobile
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      },
    });
  }, []);

  return (
    <section className="hero-section w-full relative pb-5">
      <div className="w-full flex-col">
        <div className="block md:flex justify-between items-center common-padding">
          <p className="hero hero-title">iPhone</p>
          <p className="hero opacity-0 lg:text-2xl text-xl lg:pt-4 font-semibold">
            Designed to be loved.
          </p>
        </div>

        <div className="flex justify-center items-center w-full relative">
          <video
            className="hero-video pointer-events-none w-full max-w-full h-full"
            autoPlay
            muted
            playsInline
            loop
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
