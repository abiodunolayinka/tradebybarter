import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Cars  from "../../assets/cars.svg"
import Classes from './car.module.css'


const Car = () => {
  return (
    <div className={Classes.main}>
      <div className={Classes.mainContainer}>
        <img src={Cars} alt="img" />
        <h4>Buy and swap your cars with us today.</h4>
        <button>
            <Link to= "./">
                Learn more
                <FiArrowRight />
            </Link>
        </button>
      </div>
    </div>
  );
};

export default Car;
