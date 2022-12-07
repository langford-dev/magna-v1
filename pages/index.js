import Cursor from "../components/Cursor";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cursor />
      <div className="pointer" />
    </>
  );
}
