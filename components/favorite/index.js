import { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import dynamic from "next/dynamic";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  ButtonWithStyle,
  ButtonNoStyle,
} from "../hero/style.styled";
import { Typography } from "@mui/material";

const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), {
  ssr: false,
});

const FavoriteComponent = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-[90px]">
        <Typography variant="h1">CHOOSE YOUR</Typography>
        <Typography variant="h1">
          <Typography variant="spanCaption">FAVORITE</Typography> GAMES
        </Typography>
        <Typography>
          Offer sneak peeks and previews of upcoming games, including
        </Typography>
        <Typography>
          trailers, screenshots, and information about release.
        </Typography>
      </div>
      <Carousel
        plugins={[
          "centered",
          "infinite",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 2,
            },
          },
        ]}
      >
        <img src="/img/landing/slide_2.png" />
        <img src="/img/landing/slide_2.png" />
        <img src="/img/landing/slide_2.png" />
      </Carousel>
      <div className="flex justify-center items-center py-[75px]">
        <div className="flex flex-row">
          <a
            href="#"
            rel="noopener"
            className="text-lg font-medium text-center text-white"
          >
            <ButtonWithStyle>VIEW ALL</ButtonWithStyle>
          </a>
          <a
            href="#"
            rel="noopener"
            className="text-lg font-medium text-center"
          >
            <ButtonNoStyle>
              <Typography variant="spanCaption">PLAY NOW</Typography>
            </ButtonNoStyle>
          </a>
        </div>
      </div>
    </>
  );
};

export default FavoriteComponent;