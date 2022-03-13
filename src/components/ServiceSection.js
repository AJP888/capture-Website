import React from "react";

// Import Icon
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

// import Image
import home2 from "../img/home2.png";

// Styles
import { About, Description, Image, Hide } from "../styles";
import styled from "styled-components";

const ServiceSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> Services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>lorem5</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={teamwork} />
              <h3>TeamWork</h3>
            </div>
            <p>lorem5</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={diaphragm} />
              <h3>Diaphragm</h3>
            </div>
            <p>lorem5</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={money} />
              <h3>Affordable</h3>
            </div>
            <p>lorem5</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img alt="Camera" src={home2} />
      </Image>
    </Services>
  );
};

// Styling
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

// using styled(About) takes the styling from About and renames it Services.

export default ServiceSection;

// Comments
// Break down of four diffrent sections each one with a image inlcuding a icon i.e.    <img alt="icon" src={money} />
