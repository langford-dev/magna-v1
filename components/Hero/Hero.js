import heroOne from "../../public/hero1.png";
import Image from "next/image";
import FAB from "../FAB";

const Hero = () => {
  return (
    <div className="hero flex items-center justify-center transition-shadow">
      <div className="h-screen w-screen flex items-center justify-center">
        <Image
          src={heroOne}
          alt="magna banner image"
          className={`w-[100vw] h-[100vh] object-cover`}
        />
      </div>
      <FAB />
    </div>
  );
};
export default Hero;
