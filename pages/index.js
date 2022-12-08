import Cursor from "../components/Cursor";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Cursor />
      <div className="pointer" />
    </>
  );
}
