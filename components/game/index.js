import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Container from "../container";
import {
  ButtonWithStyle,
  ButtonNoStyle,
} from "../hero/style.styled";
import GameItem from "./item";

// const TabPanel = (props) => {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
//     </div>
//   );
// };

// const AntTabs = styled(Tabs)({
//   borderBottom: "2px solid transparent",
//   borderImage:
//     "linear-gradient( 90deg, #816746 20.2%, #bda180 52.95%, #7f6544 100% )",
//   borderImageSlice: 3,
//   "& .MuiTabs-indicator": {
//     background:
//       "linear-gradient(90deg, #F9E4C9 20.2%, #BDA180 52.95%, #DEBB8E 100%)",
//   },
// });

// const AntTab = styled((props) => <Tab disableRipple {...props} />)(
//   ({ theme }) => ({
//     textTransform: "none",
//     minWidth: 0,
//     [theme.breakpoints.up("md")]: {
//       minWidth: 0,
//       fontSize: 16,
//     },
//     fontWeight: 400,
//     marginRight: theme.spacing(3),
//     paddingLeft: 0,
//     paddingRight: 0,
//     color: "rgba(255, 255, 255, 0.85)",
//     fontFamily: "Inter",
//     "&:hover": {
//       background:
//         "linear-gradient(90deg, #F9E4C9 20.2%, #BDA180 52.95%, #DEBB8E 100%)",
//       backgroundClip: "text",
//       textFillColor: "transparent",
//       opacity: 1,
//     },
//     "&.Mui-selected": {
//       background:
//         "linear-gradient(90deg, #F9E4C9 20.2%, #BDA180 52.95%, #DEBB8E 100%)",
//       backgroundClip: "text",
//       textFillColor: "transparent",
//       fontWeight: theme.typography.fontWeightBold,
//       fontSize: "17px",
//     },
//     "&.Mui-focusVisible": {
//       backgroundColor: "#d1eaff",
//     },
//   })
// );

const TopGameComponent = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container className="relative py-[100px]">
        <div className="flex flex-col justify-center items-center">
          <Typography variant="h1">WELCOME TO THE</Typography>
          <Typography variant="h1">
            TOP <Typography variant="spanCaption">GAMES</Typography>
          </Typography>
        </div>

        <div className="flex justify-center items-center gap-5 mt-10">
          <ButtonWithStyle>
            <a
              href="#"
              rel="noopener"
              className="text-lg font-medium text-center"
            >
              <Typography variant="h6">NEWEST GAMES</Typography>
            </a>
          </ButtonWithStyle>
          <ButtonNoStyle>
            <a
              href="#"
              rel="noopener"
              className="text-lg font-medium text-center"
            >
              <Typography variant="h6">LATEST GAMES</Typography>
            </a>
          </ButtonNoStyle>
          <ButtonNoStyle>
            <a
              href="#"
              rel="noopener"
              className="text-lg font-medium text-center"
            >
              <Typography variant="h6">FIGHT GAMES</Typography>
            </a>
          </ButtonNoStyle>
          <ButtonNoStyle>
            <a
              href="#"
              rel="noopener"
              className="text-lg font-medium text-center"
            >
              <Typography variant="h6">SPORT GAMES</Typography>
            </a>
          </ButtonNoStyle>
        </div>

        <div className="mt-10 w-full flex flex-wrap justify-center gap-5">
          <GameItem className="md:w-1/3 sm:w-full" />
          <GameItem className="md:w-1/3 sm:w-full"/>
          <GameItem className="md:w-1/3 sm:w-full" />
          <GameItem className="md:w-1/3 sm:w-full" />
          <GameItem className="md:w-1/3 sm:w-full"/>
          <GameItem className="md:w-1/3 sm:w-full"/>
        </div>

        {/* <Box sx={{ width: "100%" }}>
          <Box>
            <AntTabs
              value={value}
              onChange={handleChange}
              aria-label="ant example"
            >
              <AntTab label="LP Overview" />
              <AntTab label="LP Reward" />
              <AntTab label="News" />
            </AntTabs>
          </Box>
          <Box>
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Typography>1</Typography>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Typography>2</Typography>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <Typography>3</Typography>
            </TabPanel>
          </Box>
        </Box> */}
      </Container>
    </>
  );
};

export default TopGameComponent;
