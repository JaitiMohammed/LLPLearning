import React from "react";
import img1 from "../../../assets/OthersPictures/picture1.png";
import "./Style.css";
import { Link } from "react-router-dom";
export const Landing = () => {
  return (
    <>
      <section id='intro'>
        <div className='top-right-gradient'></div>
        <div className='wrapper'>
          <div className='intro-left'>
            <h1>Let's Learn Programming group</h1>
            <h5>
              The largest Moroccan group to learn programming Join us by
              creating your account now
            </h5>
            <Link className='intro-cta' to='/register'>
              Register Now
            </Link>
          </div>
          <div className='intro-right'>
            <img src={img1} alt='Image1' />
          </div>
        </div>
        <div class='bottom-left-gradient'></div>
      </section>
    </>
  );
};
