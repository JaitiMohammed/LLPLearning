import React from "react";
import Landing from "../../components/layouts/HeroSection/Landing";
// import Footer from "../../components/layouts/Footer/Footer";
import About from "../Sections/About/About";
import Contact from "../Sections/Contact/Contact";
import Services from "../Sections/Services/Services";
import Team from "../Sections/Team/Team";

const Home = () => {
  return (
    <>
      <Landing />
      <About />
      <Team />
      <Services />
      <Contact />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
