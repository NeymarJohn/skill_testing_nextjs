import {
  ButtonWithStyle,
  ButtonNoStyle,
} from "../hero/style.styled";
import { Typography } from "@mui/material";
import { VRContainerBox } from './style.styled'

const DiscoverComponent = () => {
  return (
    <>
      <div className="flex justify-center py-[50px]">
        <VRContainerBox className="container flex">
          <div className="flex items-center w-full lg:w-1/2">
            <img src="/img/landing/show_vr.png" alt="" className="mt-[-89px]" />
          </div>
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="flex flex-col pr-[50px]">
              <Typography variant="h2">DISCOVER THE</Typography>
              <Typography variant="h2">
                <Typography variant="spanCaption">VIRTUAL</Typography>REALITY
              </Typography>
              <Typography variant="h2">GAMING</Typography>
              <Typography>
                A well-designed gaming header often incorporates elements such
                as game characters, iconic symbols, vibrant colors, and dynamic
                visuals to convey excitement, adventure, and the immersive
                nature of gaming.
              </Typography>
              <ButtonNoStyle className="mt-10">
                <a
                  href="#"
                  rel="noopener"
                  className="text-lg font-medium text-center"
                >
                  <Typography variant="spanCaption">PLAY NOW</Typography>
                </a>
              </ButtonNoStyle>
            </div>
          </div>
        </VRContainerBox>
      </div>
    </>
  );
};

export default DiscoverComponent;