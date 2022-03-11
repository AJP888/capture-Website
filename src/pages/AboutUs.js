import React from "react";

// Page Component
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import FaqSection from "../components/FaqSection";

const AboutUs = () => {
  return (
    <>
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </>
  );
};

export default AboutUs;

// AboutUs holds three different Components  <AboutSection /> /  <ServiceSection /> /    <FaqSection />
