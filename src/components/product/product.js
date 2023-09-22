import React from "react";
import Classes from "./product.module.css";
import { Link } from "react-router-dom";
import Apple from "../../assets/apple.svg";
import Samsung from "../../assets/samsung.svg";
import Oraimo from "../../assets/oraimo.svg";
import Nintendo from "../../assets/nintendo.svg";
import Jbl from "../../assets/jbl.svg";
import Microsoft from "../../assets/microsoft.svg";
import Hp from "../../assets/hp.svg";
import PS from "../../assets/PS.svg";
import House from "../../assets/house.svg";

import { FiArrowRight } from "react-icons/fi";

const Product = () => {
  return (
    <div className={Classes.main}>
      <h4>Product</h4>
      <div className={Classes.flexBox}>
        <div className={Classes.grid}>
          <div className={Classes.gridContainer}>
            <img src={Apple} alt="img" />
          </div>
          <div className={Classes.gridContainer}>
            <img src={Samsung} alt="img" />
          </div>
          <div className={Classes.gridContainer}>
            <img src={Jbl} alt="img" />
          </div>

          <div className={Classes.gridContainer}>
            <img src={Hp} alt="img" />
          </div>
          <div className={Classes.gridContainer}>
            <img src={PS} alt="img" />
          </div>
          <div className={Classes.gridContainer}>
            <img src={Nintendo} alt="img" />
          </div>
          <div className={Classes.gridContainer}>
            <img src={Microsoft} alt="img" />
          </div>
          <div className={Classes.gridContainer}>
            <img src={Oraimo} alt="img" />
          </div>

          <button>
            <Link to="./">See all &#129122;</Link>
          </button>
        </div>
        <div className={Classes.places}>
          <div className={Classes.placesinner}>
            <p>Discover a place you'll love to live</p>
            <button>
              <Link to="./">Learn more &#129122;</Link>
            </button>
            <div className={Classes.placesImg}>
              <img src={House} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
