import React from "react";

// Import Icon
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

// import Image
import home2 from "../img/home2.png";

const ServiceSection = () => {
  return (
    <div className="Services">
      <div className="Description">
        <h2>
          High <span>quality</span> Services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img alt="icon" src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>lorem5</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="icon" src={teamwork} />
              <h3>TeamWork</h3>
            </div>
            <p>lorem5</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="icon" src={diaphragm} />
              <h3>Diaphragm</h3>
            </div>
            <p>lorem5</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="icon" src={money} />
              <h3>Affordable</h3>
            </div>
            <p>lorem5</p>
          </div>
        </div>
      </div>
      <img alt="Camera" src={home2} />
    </div>
  );
};

export default ServiceSection;
