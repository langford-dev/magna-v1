import { useState } from "react";
import heroStyles from "./Hero.module.css";

const Hero = () => {
  const text = `text-[10em] font-bold uppercase`;
  const flex = "flex items-center justify-center";
  const images = [
    "https://res.cloudinary.com/devsteveserver/image/upload/v1658860631/sample.jpg",
    "https://res.cloudinary.com/devsteveserver/image/upload/v1658860660/cld-sample.jpg",
  ];
  const [num, setNum] = useState(0);
  const style = {
    backgroundImage: `url(${images[num]})`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent",
  };
  const toggle = () => {
    if (num < images.length - 1) {
      setNum((prev) => prev + 1);
    } else {
      setNum(0);
    }
  };
  return (
    <div className="w-screen">
      <div
        style={style}
        className={`${heroStyles.clip} ${text} ${flex} object-cover bg-inherit h-[85vh]`}
      >
        <span
          onMouseOver={toggle}
          className={`cursor-default ${flex} p-0 m-0 object-contain `}
        >
          magna
        </span>
      </div>
    </div>
  );
};

export default Hero;
