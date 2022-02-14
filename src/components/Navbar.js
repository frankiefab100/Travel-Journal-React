import React from "react";
import Logo from "../icons/logo-globe.png";
const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <img className="logo" src={Logo} alt="" />
        <p className="logo-name">my travel journal.</p>
      </nav>
    </header>
  );
};

export default Navbar;
