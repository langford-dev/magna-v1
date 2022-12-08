import Cursor from "../components/Cursor";
import Hero from "../components/Hero";
import Header from "../components/Header";
import FAB from "../components/FAB";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Cursor />
      <FAB />
      <div className="pointer" />
    </>
  );
}
