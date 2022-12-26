import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Dropdown = ({ options }) => {
  const router = useRouter();
  return (
    <div className="drawer">
      <div className={`${options ? "hidden" : ""} ${styles.menu} `}>
        <nav>
          <Link href={`/`}>
            <p
              className={
                router.pathname === "/" ? styles.activeNavLink : styles.navLink
              }
            >
              HOME
            </p>
          </Link>
          <Link href={`/about`}>
            <p
              className={
                router.pathname === "/about"
                  ? styles.activeNavLink
                  : styles.navLink
              }
            >
              ABOUT
            </p>
          </Link>

          <div className={styles.navLink}>
            <div className="mr-1 -ml-2">
              <Image src="/assets/lock.svg" width={17} height={17} alt="lock" />
            </div>
            <p>CONNECT</p>
          </div>
        </nav>
      </div>
    </div>
  );
};
const styles = {
  menu: `bg-[#ffffff12] absolute right-5 top-20 text-[#fff] p-3 rounded-[12px]`,
  navLink: `p-3 px-6 flex items-center justify-center border-[#f7f7f71a] border rounded-[12px] m-3`,
  activeNavLink: `text-[#C13341] p-3 px-6 flex items-center justify-center border-[#f7f7f71a] border rounded-[12px] m-3`,
};

export default Dropdown;
