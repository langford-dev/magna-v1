import magna1 from "../../public/assets/magna1.webp";
import magna3 from "../../public/assets/magna3.webp";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgCon}>
        <Image
          src={magna1}
          alt="magna background image"
          className={`h-full w-[90%] object-cover lg:block hidden`}
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
const styles = {
  container: `flex items-center justify-center transition-shadow`,
  imgCon: `h-screen  w-screen flex items-center justify-center`,
  image:``
};

export default Hero;
