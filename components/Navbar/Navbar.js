const Navbar = () => {
  const style = `bg-green-300 rounded-md p-2`;
  return (
    <header className="flex justify-between px-14 py-4 items-center fixed  w-screen">
      <div className="font-bold text-2xl bg-green-300 rounded-lg p-2">
        Magna
      </div>
      <nav className="flex gap-10">
        <p className={style}>Home</p>
        <p className={style}>Home</p>
        <p className={style}>Home</p>
        <p className={style}>Home</p>
        <p className={style}>Home</p>
      </nav>
    </header>
  );
};

export default Navbar;
