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
// import Apple  from '../../assets/apple.svg';

const Product = () => {
  return (
    <div className={Classes.main}>
      <h4>Product</h4>
      <div className={Classes.flexBox}>
        <div className={Classes.grid}>
          <div className={Classes.cell}>
            <img src={Apple} alt="img" />
          </div>
          <div className={Classes.cell}>
            <img src={Samsung} alt="img" />
          </div>
          <div className={Classes.cell}>
            <img src={Jbl} alt="img" />
          </div>
          <div className={Classes.cell}>
            <img src={Hp} alt="img" />
          </div>
          <div className={Classes.cell}>
            <img src={Nintendo} alt="img" />
          </div>
          <div className={Classes.cell}>
            <img src={Microsoft} alt="img" />
          </div>
          <div className={Classes.cell}>
            <img src={Oraimo} alt="img" />
          </div>
          <div className={Classes.cell}>
            <button>
              <Link to="./">
                See all
                <FiArrowRight />
              </Link>
            </button>
          </div>
        </div>
        <div className={Classes.places}>
          <div>
            <p>Discover a place you'll love to live</p>
            <button>
              <Link to="./">
                Learn more
                <FiArrowRight />
              </Link>
            </button>
          </div>
        </div>
        <div>
            <img src={Image} alt='img'/>
        </div>
      </div>
    </div>
  );
};

export default Product;
