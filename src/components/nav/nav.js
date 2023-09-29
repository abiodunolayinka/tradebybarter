import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiAlignJustify } from "react-icons/fi";
import classes from "./nav.module.css";
const Nav = () => {
  return (
    <nav>
      <div className={classes.main}>
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
            check our price list
            &#129122;
          </Link>
        </button>
      </div>
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
    </nav>
  );
};

export default Nav;
