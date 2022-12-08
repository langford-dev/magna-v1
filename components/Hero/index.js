import magna1 from "../../public/assets/magna1.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex items-center justify-center transition-shadow">
      <div className="w-screen h-screen">
        <Image
          src={magna1}
          alt="magna background image"
          className={`w-full h-full object-cover`}
        />
      </div>

    </div>
  );
};

export default Hero;
