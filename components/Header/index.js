import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { links } from "../../constants/Links";

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const showMenu = () => {
    setMenu((prev) => !prev);
  };

  const router = useRouter();
  useEffect(() => {
    setMenu(true);
  }, [router]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <div className={styles.logo}>Magna</div>
        </Link>
        <nav className={styles.nav}>
          {links.map((link) => (
            <Link key={link.toString()} href={link.to}>
              <p
                className={
                  router.pathname === link.path
                    ? styles.activeNav
                    : styles.navLink
                }
              >
                {link.title}
              </p>
            </Link>
          ))}
          <Link href="/mint" className={styles.navLink}>
            <div className="mr-1">
              <Image src="/assets/lock.svg" width={17} height={17} alt="lock" />
            </div>
            <p>Connect</p>
          </Link>
        </nav>
        <div className={styles.menuBtn}>
          <Image
            onClick={showMenu}
            src={menu ? "/assets/menu.svg" : "/assets/close.svg"}
            width="40"
            height="40"
            alt="menu button"
            className="menu"
          />
          <Dropdown options={menu} />
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: `fixed w-screen p-4`,
  container: `m-auto flex max-w-[1800px] items-center justify-between`,
  logo: `rounded-lg bg-[#C13341] p-5 py-2 text-2xl font-bold text-[#fff]`,
  nav: `hidden items-center py-3 sm:flex`,
  navLink: `text-[#fff] hover:text-[#C13341] m-2 mt-0 h-max w-max flex items-center justify-center bg-[#ffffff12] hover:bg-[#A3B1AD2B] transition-all rounded-md p-5 py-2 cursor-none`,
  activeNav: `hover:text-[#fff] text-[#C13341] m-2 mt-0 h-max w-max flex items-center justify-center hover:bg-[#ffffff12] bg-[#A3B1AD2B] transition-all rounded-md p-5 py-2 cursor-none `,
  menuBtn: `bg-[#ffffff12] px-3 block sm:hidden cursor-none`,
};

export default Navbar;
