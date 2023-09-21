import styled from "styled-components";

export const GameItemBox = styled.div`
  background: linear-gradient(
    180deg,
    rgba(112, 93, 159, 0.5) 1%,
    rgba(113, 93, 161, 0.5) 2%,
    rgba(99, 86, 152, 0.5) 99%,
    rgba(96, 80, 143, 0.5) 99%
  );
  border: 1px solid #ffffff33;
  box-shadow: 0px 4px 20px -1px #00000000;
  border-radius: 10px;
`;

export const ButtonWithStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(/img/component/button_fill.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 55px;
`;

export const ButtonNoStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(/img/component/button_no.png);
  width: 100%;
  height: 55px;
`;