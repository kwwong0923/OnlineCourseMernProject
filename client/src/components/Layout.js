import React from "react";
import { Outlet } from "react-router-dom";

// Components
import Nav from "./nav-component";
const Layout = ({currentUser, setCurrentUser}) => {
  return (
    <>
      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Outlet />
    </>
  );
};

export default Layout;
