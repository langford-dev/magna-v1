import React from 'react'
import Cursor from "../Cursor";
import FAB from "../FAB";
import Header from "../Header";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <Cursor />
      <FAB />
      {children}
      <div className="pointer" />
    </>
  );
}

export default Layout
