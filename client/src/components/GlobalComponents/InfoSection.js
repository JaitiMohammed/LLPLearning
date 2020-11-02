import React from "react";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Subtitle,
  Heading,
} from "./InfoSection.elements";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  headline,
  lightText,
  topline,
  Description,
  outlineLight,
  RouteButton,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topline}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{Description}</Subtitle>
                <Link to={RouteButton}>
                  <Button
                    variant={outlineLight}
                    size='lg'
                    style={{ boxShadow: "5px rgba(0, 0, 0, 0.05)" }}
                  >
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};
