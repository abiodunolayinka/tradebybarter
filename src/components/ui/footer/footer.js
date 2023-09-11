import React from "react";
import Classes from "./footer.module.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Twi from "../../../assets/twi.svg";
import Face from "../../../assets/face.svg";
import Inst from "../../../assets/inst.svg";

const Footer = () => {
  return (
    <footer>
      <div className={Classes.main}>
        <div className={Classes.flexbox}>
          <div className={Classes.flex1}>
            <div className={Classes.flex1con}>
              <h1>
                Feel free to make inquiry on our services, as we’re eager to put
                you through!
              </h1>
              <p>
                Feel free to make inquiry on our services, as we’re eager to put
                you through!
              </p>
              <button>
                <Link to="./">
                  Send a message
                  <FiArrowRight />
                </Link>
              </button>
            </div>
          </div>
          <div className={Classes.flex2}>
            <div className={Classes.flex2Con}>
              <p className={Classes.flexp}>Follow <br/>Tradebybarter <br/>on social media</p>
              <button>
                <Link className={Classes.Link} to="./">
                  <div className={Classes.soc}>
                    <div>
                      <img src={Inst} alt="img" />
                    </div>
                    <div>
                      <p>Instagram</p>
                    </div>
                  </div>
                  <FiArrowRight />
                </Link>
              </button>{" "}
              <button>
                <Link className={Classes.Link} to="./">
                  <div className={Classes.soc}>
                    <div>
                      <img src={Face} alt="img" />
                    </div>
                    <div>
                      <p>Facebook</p>
                    </div>
                  </div>
                  <FiArrowRight />
                </Link>
              </button>
              <button>
                <Link className={Classes.Link} to="./">
                  <div className={Classes.soc}>
                    <div>
                      <img src={Twi} alt="img" />
                    </div>
                    <div>
                      <p>Twitter</p>
                    </div>
                  </div>
                  <FiArrowRight />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
