const Dropdown = ({ options }) => {
  return (
    <div className={`${!options && "hidden"} ${styles.menu} `}>
      <nav>
        <p className={styles.menuBtn}>home</p>
        <p className={styles.menuBtn}>About</p>
        <p className={styles.menuBtn}>connect</p>
      </nav>
    </div>
  );
};
const styles = {
  menu: `absolute right-0 top-20 mx-4 rounded-lg bg-[#111221] p-4 text-white  `,
  menuBtn: `flex cursor-pointer items-center  px-10 py-4 text-xl border border-gray-700  m-2`,
};

export default Dropdown;
