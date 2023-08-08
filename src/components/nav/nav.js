import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import  classes from "./nav.module.css"
const Nav = () => {
  return (
    <div  className={classes.main} >
      <Link to="./">About us</Link>
      <Link to="./">Our Product</Link>
      <Link to="./">Contact Us us</Link>
      <button>
        <Link to="./">
          check our price list
          <FiArrowRight />
        </Link>
      </button>
    </div>
  );
};

export default Nav;
