import React from "react";
import logo from "../../images/logo.png";
import classes from "./header.module.scss";

function Header() {
  return (
    <header className={classes.header}>
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </header>
  );
}

export default Header;
