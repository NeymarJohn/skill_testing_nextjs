import React from "react";
import styled from "styled-components";

export const MyInfoContainer = styled.div`
  background-image: url(/img/first_header.png);
  background-repeat: no-repeat;
  height: 895px;
  position: relative;
  background-position: center 16%;
  background-size: cover;
`;

export const BackgroundStarComponent = styled.div`
  position: absolute;
  margin-top: -40px;
  background: linear-gradient(
    180deg,
    rgba(112, 93, 159, 0.5) 1%,
    rgba(113, 93, 161, 0.5) 2%,
    rgba(99, 86, 152, 0.5) 99%,
    rgba(96, 80, 143, 0.5) 99%
  );
  border: 1px solid #ffffff33;
  box-shadow: 0px 4px 20px -1px #00000000;
`;

export default BackgroundStarComponent;