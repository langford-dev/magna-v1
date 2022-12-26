import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { links } from "../../constants/Links";

const Dropdown = ({ options }) => {
  const router = useRouter();
  return (
    <div className="drawer">
      <div className={`${options ? "hidden" : ""} ${styles.menu} `}>
        <nav>
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
  activeNav: `text-[#C13341] p-3 px-6 flex items-center justify-center border-[#f7f7f71a] border rounded-[12px] m-3`,
};

export default Dropdown;
