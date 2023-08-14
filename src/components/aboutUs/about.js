import React from "react";
import Classes from "./aboutUs.module.css";
import Logo from "../../assets/logo.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Twittter from "../../assets/twitter.svg";
import AboutUs from "../../assets/aboutUs.svg";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const About = () => {
  return (
    <>
      <div className={Classes.divide}></div>
      <div className={Classes.heading}>About us</div>
      <div className={Classes.flexBox}>
        <div className={Classes.flex1}>
          <div className={Classes.flex1About}>
            <h4>Trade by barter</h4>
            <p>
              Trade by barter is a concept of trading by which goods or services
              are exchanged for other goods and services (Phones & tablets,
              Games & Consoles, Gadgets, Vehicles, Health & Beauty products,
              Building Materials, Home appliances, Real estate etc.)
            </p>
            <button>
              <Link to="./">
                Learn More
                <FiArrowRight />
              </Link>
            </button>
          </div>
          <div className={Classes.logo}>
            <img src={Logo} alt="img" />
          </div>
          <div className={Classes.social}>
            <div className={Classes.lo}>
              <img src={Twittter} alt="img" />
              <img src={Instagram} alt="img" />

              <img src={Facebook} alt="img" />
            </div>
            <p>
              With us, you can buy your electronics, cars and other accessories.
              Shop now and get the best discount as possible
            </p>
          </div>
        </div>
        <div className={Classes.flex2}>
          <div className={Classes.aboutImg}>
            <img src={AboutUs} alt="img" />`
          </div>
          <div className={Classes.features}>
            <h4>01</h4>
            <p>
              Trade By Barter is the best place to trade anything with
              substantial worth with other people within Nigeria.
            </p>
          </div>
          <div className={Classes.features}>
            <h4>02</h4>
            <p>
              Phones & tablets, Games & Consoles, Gadgets, Vehicles, Health &
              Beauty products, Building Materials, Home appliances, Real estate
              etc
            </p>
          </div>
          <div className={Classes.features}>
            <h4>03</h4>
            <p>
              It is free & safe. Trade By Barter provides an easy, free solution
              to trading almost any item within Nigeria.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
