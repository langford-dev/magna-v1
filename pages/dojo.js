import Image from "next/image";
import Link from "next/link";
import sensei from "../public/assets/sensei.png";

const Dojo = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <Link target="_blank" href="https://discord.gg/yYGxEjk5">
            <Image
              src={sensei}
              alt="magna sensei background image"
              className={styles.image}
              priority
            />
          </Link>
        </div>
      </div>
    </>
  );
};
const styles = {
  wrapper: `flex items-center justify-center overflow-hidden transition-shadow`,
  imageContainer: `flex h-screen lg:pb-10 w-screen items-center justify-center`,
  image: `mt-32 h-[90vh] w-[100%] object-contain`,
};

export default Dojo;
