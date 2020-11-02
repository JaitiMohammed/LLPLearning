import React from "react";
import "./style.css";
import { InfoSection } from "../../../components/GlobalComponents/InfoSection";
import { DataAbout } from "./DataAbout";
import { TitleSection } from "../../../components/GlobalComponents/TitleSection";

const About = () => {
  return (
    <section id='about'>
      <TitleSection Alignement={false}>About us</TitleSection>
      <InfoSection {...DataAbout}></InfoSection>
    </section>
  );
};

export default About;
