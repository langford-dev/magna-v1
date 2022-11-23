// import { useState } from "react";
import hero from "../../public/hero.png";
import heroTwo from "../../public/hero2.png";

import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const images = [heroTwo, hero];
  const [num, setNum] = useState(0);

  const toggle = () => {
    if (num < images.length - 1) {
      setNum((prev) => prev + 1);
    } else {
      setNum(0);
    }
  };
  return (
    <div className=" flex items-center justify-center transition-shadow">
      <div
        onMouseOver={toggle}
        className=" absolute top-[1.13em] h-[175px] w-[3.4em]  text-[15em] font-bold uppercase "
      ></div>
      <Image
        src={images[num]}
        alt="name"
        className={`h-screen bg-cover object-cover duration-200`}
      />
    </div>
  );
};

export default Hero;
