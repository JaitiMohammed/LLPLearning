import React from "react";
import "./Style.css";
import { InfoSection } from "../../GlobalComponents/InfoSection";
import { DataHero } from "./DataHero";
const Landing = () => {
  return (
    <section id='hero'>
      <InfoSection {...DataHero} />
    </section>
  );
};

export default Landing;
