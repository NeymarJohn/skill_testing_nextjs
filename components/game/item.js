import Image from "next/image";
import { Typography } from "@mui/material";
import { GameItemBox, ButtonWithStyle } from "./style.styled";
const GameItem = () => {
  return (
    <GameItemBox className="flex flex-col p-5 gap-5">
      <img src="/img/game_item/item.png"></img>
      <Typography variant="h6">Core Philosophies</Typography>
      <div className="flex justify-start items-center">
        <img src="/img/profile/user1.png"></img>
        <div className="flex flex-col ml-5">
          <Typography variant="h6">Cameron Williamson</Typography>
          <Typography>Gillette</Typography>
        </div>
      </div>
      <ButtonWithStyle>
        <a href="#" rel="noopener" className="text-lg font-medium text-center">
          <Typography variant="h6">LIVE DEMO</Typography>
        </a>
      </ButtonWithStyle>
    </GameItemBox>
  );
};

export default GameItem;
