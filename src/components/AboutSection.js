import React from "react";
import home1 from "../img/home1.png";

// Styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We Work To Make</h2>
          </Hide>
          <Hide>
            <h2>
              Your <span>Dreams</span> Come
            </h2>
          </Hide>
          <Hide>
            <h2>True.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any Photography or Videography ideasthat you have. We
          have proffesionals with amazing skills
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

// Styled Component

export default AboutSection;

// COMMENTS
// AboutSection holds the front page content
// Using ] import styled from "styled-components"; allows to create inbult Css styling in the js file

/*

i.e.
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
<About> </About> then switching the divs to the styled name adds the styling
*/
