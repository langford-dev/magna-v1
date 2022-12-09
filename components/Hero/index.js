import magna1 from "../../public/assets/magna1.webp";
import magna3 from "../../public/assets/magna3.webp";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex items-center justify-center transition-shadow">
      <div className="h-screen w-screen flex items-center justify-center">
        <Image
          src={magna1}
          alt="magna background image"
          className={`h-[90%] w-[90%] object-cover md:block hidden`}
          priority
        />
        <Image
          src={magna3}
          alt="magna background image"
          className={`h-screen w-screen object-contain block lg:hidden`}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
