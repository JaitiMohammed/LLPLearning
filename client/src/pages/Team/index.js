import React, { useState } from "react";
import "./Style.css";
import { Carousel } from "react-bootstrap";
import TeamPic from "../../assets/OthersPictures/undraw_team_spirit_hrr4.png";
import AdminPic from "../../assets/TeamPictures/admin.jpg";
import TeamCard from "../../components/GlobalComponents/TeamCard";
import Moderateur1 from "../../assets/TeamPictures/moderateur1.jpg";

const Team = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <section id='team'>
        <div className='wrapper'>
          <h1 style={{ color: "#00B3C8", fontWeight: "bold" }}>Team Group</h1>
          <div className='team-left'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <TeamCard
                  name={"Jaiti Mohammed"}
                  role={"Admin"}
                  image={AdminPic}
                  github={"/jaitimohammed"}
                  insta={"/jaiti_mohammed"}
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name={"Achraf Sayah"}
                  role={"Modérateur"}
                  image={Moderateur1}
                  github={"/achraf_sayah"}
                  insta={"/achraf_sayah"}
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name={"Ayoub Nainia"}
                  role={"Modérateur"}
                  image={AdminPic}
                  github={"/jaitimohammed"}
                  insta={"/jaiti_mohammed"}
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div class='team-right'>
            <img src={TeamPic} alt='svgTeam' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
