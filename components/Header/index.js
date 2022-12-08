import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter()
  return <header className="p-4 fixed w-screen">
    <div className="flex justify-between items-center max-w-[1800px] m-auto">
      <Link href="/">
        <div className="font-bold text-2xl bg-[#C13341] text-[#fff] rounded-lg p-5 py-2">
          Magna
        </div>
      </Link>
      <nav className="hidden sm:flex items-center py-3">
        <Link href="/">
          <p className={router.pathname === "/" ? styles.activeNav : styles.nav}>
            HOME
          </p>
        </Link>
        <Link href="/about">
          <p className={router.pathname === "/about" ? styles.activeNav : styles.nav}>
            ABOUT
          </p>
        </Link>
        <div className={styles.nav}>
          <div className="mr-1">
            <Image src="/assets/lock.svg" width={20} height={20} alt="lock" />
          </div>
          <p >Connect</p>
        </div>
      </nav>
      <div className={styles.menuBtn}>
        <Image src="/assets/menu.svg" width="40" height="40" alt="menu" />
      </div>
    </div>
  </header >
};

const styles = {
  nav: `text-[#fff] hover:text-[#C13341] m-2 mt-0 h-max w-max flex items-center justify-center bg-[#ffffff12] hover:bg-[#A3B1AD2B] cursor-pointer transition-all rounded-md p-5 py-2`,
  activeNav: `hover:text-[#fff] text-[#C13341] m-2 mt-0 h-max w-max flex items-center justify-center hover:bg-[#ffffff12] bg-[#A3B1AD2B] cursor-pointer transition-all rounded-md p-5 py-2`,
  menuBtn: `bg-[#ffffff12] px-3 block sm:hidden`,
}

export default Navbar;
