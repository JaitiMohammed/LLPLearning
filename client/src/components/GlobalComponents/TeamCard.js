import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { Row, Col, Card } from "react-bootstrap";
const TeamCard = ({ name, role, image, github, insta }) => {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <img src={image} alt='imgAbout' />
          </Col>
          <Col>
            <Card.Title>
              <span style={{ color: "#00B3C8" }}>{name}</span>
              <br />
              <span>{role}</span>
              <div className='hr-line'>
                <hr></hr>
              </div>
              <div className='social-media'>
                <h6>
                  <FaGithub /> {github}
                </h6>
                <h6>
                  <GrInstagram />
                  {insta}
                </h6>
              </div>
            </Card.Title>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default TeamCard;
