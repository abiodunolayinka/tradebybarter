import React, { useState } from "react";
import classes from "./header.module.css";
import Logo from "../../../assets/logo.svg";
import Nav from "../../nav/nav";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <img src={Logo} alt="logo" />

        <div className={classes.dropDown}>
          {showDropdown ? (
            <FiAlignJustify
              size={30} // Set the size (width and height) using the size prop
              color="#30baed" // Set the color using the color prop
              className="icon"
              onClick={() => setShowDropdown(false)}
            />
          ) : (
            <FiX
              onClick={() => setShowDropdown(true)}
              size={30} // Set the size (width and height) using the size prop
              color="#30baed" // Set the color using the color prop
              className="icon"
            />
          )}
        </div>
        <nav>
          {showDropdown ? (
            <div className={classes.nav}>
              <Link
                style={{ textDecoration: "none" }}
                className={classes.link}
                to="./"
              >
                About us
              </Link>
              <Link to="./" className={classes.link}>
                Our Product
              </Link>
              <Link to="./" className={classes.link}>
                Contact Us
              </Link>
              <button>
                <Link
                  style={{ textDecoration: "none" }}
                  className={classes.link}
                  to="./"
                >
                  check our price list &#129122;
                </Link>
              </button>
            </div>
          ) : null}
          {!showDropdown ? (
            <div className={classes.mobileDrop}>
              <Link
                style={{ textDecoration: "none" }}
                className={classes.link}
                to="./"
              >
                About us
              </Link>
              <Link
                to="./"
                style={{ textDecoration: "none" }}
                className={classes.link}
              >
                Our Product
              </Link>
              <Link
                to="./"
                style={{ textDecoration: "none" }}
                className={classes.link}
              >
                Contact Us
              </Link>
              <button>
                <Link
                  style={{ textDecoration: "none" }}
                  className={classes.link}
                  to="./"
                >
                  check our price list &#129122;
                </Link>
              </button>
            </div>
          ) : null}
        </nav>
      </div>
    </div>
  );
};

export default Header;
