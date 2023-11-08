import React from "react";
import Logo from "./Logo";
import NavLink from "./Link";

function Navbar() {
  return (
    <nav className="container d-flex justify-content-between px-5  align-items-center bg-dark">
      <Logo />
      <NavLink />
    </nav>
  );
}

export default Navbar;
