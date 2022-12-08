import magna1 from "../../public/assets/magna1.webp";
import heroMobile from "../../public/assets/heroMobile.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex items-center justify-center transition-shadow">
      <div className="h-screen w-screen">
        <Image
          src={magna1}
          alt="magna background image"
          className={`h-full w-full hidden md:block object-cover`}
          priority
        />
        <Image
          // onMouseOver={toggle}
          src={heroMobile}
          alt="name"
          className={`block h-screen w-screen object-contain lg:hidden`}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
