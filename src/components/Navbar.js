import React from "react";
import Logo from "../img/logo-globe.png";
const NavBar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <img className="logo" src={Logo} alt="" />
        <p className="logo-name">my travel journal.</p>
      </nav>
    </header>
  );
};

export default NavBar;
