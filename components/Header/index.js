import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu((prev) => !prev);
  };

  const router = useRouter();
  return (
    <header className="fixed w-screen p-4">
      <div className="m-auto flex max-w-[1800px] items-center justify-between">
        <Link href="/">
          <div className="rounded-lg bg-[#C13341] p-5 py-2 text-2xl font-bold text-[#fff]">
            Magna
          </div>
        </Link>
        <nav className="hidden items-center py-3 sm:flex">
          <Link href="/">
            <p
              className={
                router.pathname === "/" ? styles.activeNav : styles.nav
              }
            >
              HOME
            </p>
          </Link>
          <Link href="/about">
            <p
              className={
                router.pathname === "/about" ? styles.activeNav : styles.nav
              }
            >
              ABOUT
            </p>
          </Link>
          <div className={styles.nav}>
            <div className="mr-1">
              <Image src="/assets/lock.svg" width={20} height={20} alt="lock" />
            </div>
            <p>Connect</p>
          </div>
        </nav>
        <div className={styles.menuBtn}>
          <Image
            onClick={showMenu}
            src={menu ? "/assets/close.svg" : "/assets/menu.svg"}
            width={menu ? 25 : 40}
            height="40"
            alt="menu"
            className={menu && "invert"}
          />
          <Dropdown options={menu} />
        </div>
      </div>
    </header>
  );
};

const styles = {
  nav: `text-[#fff] hover:text-[#C13341] m-2 mt-0 h-max w-max flex items-center justify-center bg-[#ffffff12] hover:bg-[#A3B1AD2B] cursor-pointer transition-all rounded-md p-5 py-2`,
  activeNav: `hover:text-[#fff] text-[#C13341] m-2 mt-0 h-max w-max flex items-center justify-center hover:bg-[#ffffff12] bg-[#A3B1AD2B] cursor-pointer transition-all rounded-md p-5 py-2`,
  menuBtn: `bg-[#ffffff12] px-3 block sm:hidden`,
};

export default Navbar;
