import React from "react";
import Image1 from "../../assets/image1.svg";
import Image2 from "../../assets/image2.svg";
import Image3 from "../../assets/image3.svg";
import Classes from "./feedback.module.css";

const Feedback = () => {
  return (
    <div className={Classes.main}>
      <div className={Classes.mainContainer}>
        <h3>Customer’s feedback</h3>
        <p>
          Our customers send us bunch of smiles with our services and we love
          them
        </p>
        <div className={Classes.customer}>
          <div className={Classes.flex}>
            <img src={Image1} alt="img" />
            <div></div>
          </div>
          <div className={Classes.flex}>
            <div></div>
            <img src={Image2} alt="img" />
          </div>
          <div className={Classes.flex}>
            <img src={Image3} alt="img" />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
