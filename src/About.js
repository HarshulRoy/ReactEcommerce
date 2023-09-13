import React from "react";
import HeroSection from "./components/HeroSection";
import styled from "styled-components";

const About = () => {
  const name = {
    name: "Roy Ecommerce",
  };
  return(
    <Wrapper>
      <HeroSection myName={name} />;
    </Wrapper>
      ) 
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  margin: auto;
`;

export default About;
