import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;
