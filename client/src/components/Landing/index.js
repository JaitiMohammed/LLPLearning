import React from "react";
import "./style.css";
import img1 from "../../assets/OthersPictures/Composant 6 – 1@2x.png";
import img2 from "../../assets/OthersPictures/Tracé 3@2x.png";
import img3 from "../../assets/OthersPictures/undraw_moonlight_5ksn@2x.png";
const Landing = () => {
  return (
    <>
      <img src={img1} alt='img1' className='img1__right' />
      <img src={img2} alt='img1' />
    </>
  );
};

export default Landing;
