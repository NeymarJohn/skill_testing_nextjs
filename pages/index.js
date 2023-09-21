import Head from "next/head";
import HeroComponent from "../components/hero";
import Navbar from "../components/navbar";
import StarComponent from "../components/star";
import Footer from "../components/footer";
import FavoriteComponent from "../components/favorite";
import DiscoverComponent from "../components/discover";
import TopGameComponent from "../components/game";
import Testimonials from "../components/testimonials";
import { MyInfoContainer, VRContainerBox, BackgroundStarComponent } from "./index.styled";

const Home = () => {
  return (
    <>
      <Head>
        <title>Nextly</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyInfoContainer>
        <div
          style={{
            content: '""',
            background: `
            linear-gradient(323deg, rgba(107,64,242,1) 68%, rgba(143,62,242,1) 81%, rgba(186,60,243,1) 90%, rgba(250,52,244,1) 100%)`,
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 0.4, // Adjust the opacity to control the gradient's visibility
          }}
        />
        <Navbar />
        <HeroComponent />
      </MyInfoContainer>
      <BackgroundStarComponent className="py-5" style={{transform: 'rotate(-2deg)'}}>
        <StarComponent />
      </BackgroundStarComponent>
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(323deg, rgba(107, 64, 242, 0.4) 68%, rgba(143, 62, 242, 0.4) 81%, rgba(186, 60, 243, 0.4) 90%, rgba(250, 52, 244, 0.4) 100%)",
        }}
      >
        <FavoriteComponent />
        <DiscoverComponent />
        <StarComponent />
        <TopGameComponent />
        {/* <StarComponent /> */}
      </div>
      <BackgroundStarComponent className="py-5">
        <StarComponent />
      </BackgroundStarComponent>
      <Footer />
    </>
  );
};

export default Home;
