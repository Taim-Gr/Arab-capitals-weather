import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WeatherCard from "./components/WeatherCard";
// import sunnyImage from "./images/scenic-view-field-against-sky.webp";
import cloudyImage from "./images/black-rain-abstract-dark-power.webp";
// import rainyImage from "./images/church-fog-top-view-drone-vologda-landscape-religion-europe.webp";
import { useEffect, useState } from "react";
// import snowyImage from "./images/snow-winter-background.webp";
import { ImagesearchRoller } from "@mui/icons-material";
function App() {
  const [weatherState, setWeatherState] = useState("");
  /* 
  What Changed : 
  1- When i Click on a new city multiple things should change : 
    - City Name
    - Weather
    But How : 

  */
  const Theme = createTheme({
    typography: {
      fontFamily: ["IBM"],
    },
  });

  return (
    <ThemeProvider theme={Theme}>
      <div className="App" dir="rtl">
        <div
          className="image-scale"
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundSize: "cover",
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <div
            className="layout"
            style={{
              background: `url(${cloudyImage})`,
              backgroundSize: "cover",
              position: "absolute",
              left: "0",
              top: "0",
              height: "100%",
              width: "100%",
            }}
          ></div>

          <WeatherCard />
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "30px",
          color: "white",
          width: "100%",
          textAlign: "center",
        }}
      >
        Created By TaimJr
      </div>
    </ThemeProvider>
  );
}

export default App;
