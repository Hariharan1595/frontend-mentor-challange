import React, { useEffect, useState } from "react";
import { hero, smallHero } from "../assets/images";

const Hero = () => {
  const [image, setimage] = useState(
    window.innerWidth < 760 ? smallHero : hero
  );

  const handleimage = () => {
    if (window.innerHeight < 760) {
      setimage(smallHero);
    } else {
      setimage(hero);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleimage);
    return window.removeEventListener("resize", handleimage);
  });
  return (
    <div className="w-full bg-cover bg-no-repeat">
      <img src={image} alt="hero" className="w-full " />
      <p
        className="text-white 
      lg:text-7xl
       max-sm:text-5xl w-[20rem] max-sm:m-auto  lg:w-[39rem] p-10 max-sm:p-5 
       border absolute lg:top-[25%] lg:left-16 max-sm:top-[50%] max-sm:left-[50%] max-sm:translate-y-[-50%] max-sm:translate-x-[-50%] font-[80]"
      >
        IMMERSIVE EXPERIENCES THAT DELIVER
      </p>
    </div>
  );
};

export default Hero;
