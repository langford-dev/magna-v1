import Image from "next/image";
import Link from "next/link";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import sensei from "../public/assets/sensei.png";

const Dojo = () => {
  //   const style = {
  //     clipPath: "circle(30%)",
  //     // clipPath: "polygon(10 20, 80% 40, 50% 50%, 20 100%)",

  //     overflow: "hidden",
  //   };

  return (
    <>
      <Header />
      <Cursor />
      <div className="flex items-center justify-center overflow-hidden transition-shadow">
        <div className="flex h-screen w-screen items-center justify-center">
          <Link
            // className="absolute left-0 z-30 h-[100px] w-[150px] border md:left-10 md:w-[200px] lg:left-[22%] lg:h-[200px] lg:w-[240px] "
            target="_blank"
            href="https://discord.gg/yYGxEjk5"
          >
            <Image
              src={sensei}
              alt="magna sensei background image"
              className={`mt-32 h-[90vh] w-[100%] object-contain`}
              priority
            />
          </Link>
        </div>
      </div>
      <div className="pointer" />
    </>
  );
};

export default Dojo;
