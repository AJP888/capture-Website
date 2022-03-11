import React from "react";
import home1 from "../img/home1.png";

// Styled
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We Work to make</h2>
          </Hide>
          <Hide>
            <h2>
              Your <span>dreams</span> Come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
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

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-family: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

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
