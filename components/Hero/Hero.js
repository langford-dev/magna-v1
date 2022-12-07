// import { useState } from "react";
import hero from "../../public/hero.png";
import heroTwo from "../../public/hero2.png";
import heroOne from "../../public/hero1.png";

import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  // const images = [heroOne,heroTwo];
  // const [num, setNum] = useState(0);

  const toggle = () => {
    // if (num < images.length - 1) {
    //   setNum((prev) => prev + 1);
    // } else {
    //   setNum(0);
    // }
  }

  return (
    <div className="flex items-center justify-center transition-shadow">
      <div className=" absolute top-[1.13em] h-[175px] w-[3.4em]  text-[15em] font-bold uppercase"></div>
      <Image
        // onMouseOver={toggle}
        src={heroOne}
        alt="name"
        className={`w-screen h-screen object-contain`}
      />
      <div className={styles.fab}>d</div>
    </div>
  );
};

const styles={
  fab:`fab cursor-pointer bg-[#C13341] w-[40px] h-[40px] rounded-[12px] flex items-center justify-center fixed bottom-[100px] right-[30px]`
}

export default Hero;
