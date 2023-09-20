import styled from "styled-components";

export const HeroContainer = styled.div`
  h1 {
    font-family: Ondo;
    font-size: 69px;
    font-weight: 800;
    line-height: 76px;
    letter-spacing: 0.04em;
    text-align: left;
  }
  h2 {
    font-family: Ondo;
    font-size: 30px;
    font-weight: 800;
    line-height: 33px;
    letter-spacing: 0.04em;
    text-align: left;
  }
  p {
    font-family: Lato;
    font-size: 19px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0.04em;
    text-align: left;
  }
  span {
    background: linear-gradient(
      80deg,
      rgba(107, 64, 242, 1) 13%,
      rgba(250, 52, 244, 1) 73%,
      rgba(162, 0, 136, 1) 93%,
      rgba(162, 0, 138, 1) 94%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
`;

export const ButtonWithStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(/img/component/button_fill.png);
  width: 232px;
  height: 74px;
`;

export const ButtonNoStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(/img/component/button_no.png);
  width: 232px;
  height: 74px;
`;
