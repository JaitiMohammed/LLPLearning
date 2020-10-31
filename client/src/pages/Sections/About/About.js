import React from "react";
import "./style.css";
import aboutImg from "../../assets/OthersPictures/about.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section id='about'>
      <div class='wrapper'>
        <div class='about-left'>
          <img src={aboutImg} alt='imgAbout' />
        </div>

        <div class='about-right'>
          <h1 style={{ paddingTop: "35px", color: "#fff" }}>
            <span style={{ fontSize: "18px", color: "#00B3C8" }}>
              PREMIUM GROUP
            </span>{" "}
            <br />
            Let's Learn programming group
          </h1>
          <p>
            Our group is an intermediary which facilitates for you to seek and
            to learn the new technologies, we are happy to join us, more than
            7.5K of members who have been benefited by our group.
          </p>
          <Link className='cta'>Join us</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
