import React from "react";
import { Outlet } from "react-router-dom";

// Components
import Nav from "./nav-component";
const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;
