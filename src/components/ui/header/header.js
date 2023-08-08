import React from "react";
import classes from "./header.module.css";
import Logo from "../../../assets/logo.svg";
import Nav from "../../nav/nav";

const Header = () => {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <img src={Logo} alt="logo" />
        <Nav />
      </div>
    </div>
  );
};

export default Header;
