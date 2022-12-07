const Navbar = () => {
  const style = ``;
  return (
    <header className="py-4 fixed  w-screen">
      <div className="flex justify-between items-center max-w-[1800px] m-auto">
      {/* <div className="font-bold text-2xl bg-[#C63346] text-[#fff] rounded-lg p-2"> */}
      <div className="font-bold text-2xl bg-[#C13341] text-[#fff] rounded-lg p-5 py-2">
        Magna
      </div>
      <nav className="flex items-center py-3">
        <p className={styles.nav}>HOME</p>
        <p className={styles.nav}>ABOUT</p>
        {/* <p className={styles.nav}>White paper</p> */}
        <p className={styles.nav}>
          <div className="mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="13" height="13" viewBox="0 0 24 24"><path d="M12 18c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm0-10c-1.062 0-2.073.211-3 .587v-3.587c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2v-1c0-2.761-2.238-5-5-5-2.763 0-5 2.239-5 5v4.761c-1.827 1.466-3 3.714-3 6.239 0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8zm0 14c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6z" /></svg>
          </div>
          Connect
        </p>
      </nav>
      </div>
    </header>
  );
};

const styles = {
  nav: `text-[#fff] m-2 mt-0 h-max w-max flex items-center justify-center bg-[#ffffff12] hover:bg-[#A3B1AD2B] cursor-pointer hover:opacity-70 transition-all rounded-md p-5 py-2`,
}

export default Navbar;
