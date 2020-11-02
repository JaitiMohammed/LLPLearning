import styled from "styled-components";
export const TitleSection = styled.p`
  text-align: ${({ Alignement }) => (Alignement ? "right" : "left")};
  color: ${({ Alignement }) => (Alignement ? "#fff" : "#000")};
  padding-top: 50px;
  margin-right: ${({ Alignement }) => (Alignement ? "20px" : "")};
  padding-right: ${({ Alignement }) => (Alignement ? "48px" : "")};
  padding-left: ${({ Alignement }) => (Alignement ? "" : "48px")};
  margin-left: ${({ Alignement }) => (Alignement ? "" : "20px")};
  font-size: 28px;
  font-style: revert;
  line-height: 2p;
  font-weight: bold;
`;
