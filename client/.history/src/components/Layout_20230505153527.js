import React from "react";
import { Outlet } from "react-router-dom";

// Components
import Nav from "./nav-component";
const Layout = () => {
  return (
    <>
      <navComponent />
      <Outlet />
    </>
  );
};

export default Layout;
