import React from 'react'
import Cursor from "../Cursor";
import Header from "../Header";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <Cursor />
      {children}
      <div className="pointer" />
    </>
  );
}

export default Layout
