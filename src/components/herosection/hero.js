import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Customer from "../../assets/costumer.svg";
import { Link } from "react-router-dom";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    
      <div className={classes.main}>
        <div className={classes.mainContainer}></div>
        <div className={classes.heroText}>
          <h1>
            Giving our customers the best of gadgets over a long period of time.
          </h1>
        </div>
        <button>
          <Link style={{textDecoration: 'none'}} to="./">
            Learn More &#129122;
            
          </Link>
        </button>
        <div className={classes.customer}>
          <img src={Customer} alt="img" />
          <p>6000+ Satisfied customer</p>
        </div>
      </div>
  );
};

export default Hero;
