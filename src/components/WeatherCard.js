import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect, useState, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Icons :

import CloudIcon from "@mui/icons-material/Cloud";
import axios from "axios";
import moment from "moment";
import "moment/min/locales";
import { useTranslation, Trans } from "react-i18next";

export default function WeatherCard() {
  const [selectedCity, setSelectedCity] = useState("");
  const { t, i18n } = useTranslation();
  const [locale, setLocale] = useState("ar");
  console.log("rendering the component (mounting)");
  // const axios = require("axios");
  const [dateAndTime, setDateAndTime] = useState("");
  const [weather, setWeather] = useState({
    description: "",
    temp: "",
    minTemp: "",
    maxTemp: "",
    iconId: "",
  });
  function toCelsius(num) {
    return Number(num - 273.15).toFixed("2");
  }

  async function getWeather(lon, lat, signal) {
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=375502d5559dc9f959c2e4e4edc61446`,
      { signal }
    );
    const json = await weatherResponse.data;
    console.log(json);
    setWeather({
      ...weather,
      description: json.weather[0].description,
      temp: toCelsius(json.main.temp),
      minTemp: toCelsius(json.main.temp_min),
      maxTemp: toCelsius(json.main.temp_max),
      iconId: json.weather[0].icon,
    });
  }

  useEffect(() => {
    i18n.changeLanguage(locale);
    moment.locale("ar");
    setDateAndTime(moment().format("MMM Do YYYY"));

    const controller = new AbortController();
    getWeather("36.2768", "33.5132");
    return () => {
      console.log("canceled");
      controller.abort();
    };
  }, []);
  function handleCityChange() {}
  const cityCapitals = [
    {
      name: "Riyadh",
      lat: "24.7136",
      lon: "46.6753",
    },
    {
      name: "Abu Dhabi",
      lat: "24.4539",
      lon: "54.3773",
    },
    {
      name: "Kuwait",
      lat: "29.3759",
      lon: "47.9774",
    },
    {
      name: "Tripoli",
      lat: "32.8872",
      lon: "13.1913",
    },
    {
      name: "Doha",
      lat: "25.2854",
      lon: "51.5310",
    },
    {
      name: "Cairo",
      lat: "30.0444",
      lon: "31.2357",
    },
    {
      name: "Muscat",
      lat: "23.5859",
      lon: "58.4059",
    },
    {
      name: "Amman",
      lat: "31.9454",
      lon: "35.9284",
    },
    {
      name: "Jerusalem",
      lat: "31.7683",
      lon: "35.2137",
    },
    {
      name: "Manama",
      lat: "26.2235",
      lon: "50.5876",
    },
    {
      name: "Sanaa",
      lat: "15.3694",
      lon: "44.1910",
    },
    {
      name: "Damascus",
      lat: "33.5138",
      lon: "36.2765",
    },
    {
      name: "Baghdad",
      lat: "33.3128",
      lon: "44.3615",
    },
    {
      name: "Algiers",
      lat: "36.7538",
      lon: "3.0588",
    },
    {
      name: "Tunis",
      lat: "36.8065",
      lon: "10.1815",
    },
    {
      name: "Rabat",
      lat: "34.0209",
      lon: "-6.8416",
    },
    {
      name: "Beirut",
      lat: "33.8938",
      lon: "35.5018",
    },
    {
      name: "Djibouti",
      lat: "11.5721",
      lon: "43.1456",
    },
    {
      name: "Mogadishu",
      lat: "2.0469",
      lon: "45.3182",
    },
    {
      name: "Khartoum",
      lat: "15.5007",
      lon: "32.5599",
    },
    {
      name: "Moroni",
      lat: "-11.7172",
      lon: "43.2473",
    },
    {
      name: "Nouakchott",
      lat: "18.0735",
      lon: "-15.9582",
    },
  ];

  // const cityCapitals = [
  //   {
  //     arabName: "الرياض",
  //     lat: "24.7136",
  //     lon: "46.6753",
  //   },
  //   {
  //     arabName: "أبو ظبي",
  //     lat: "24.4539",
  //     lon: "54.3773",
  //   },
  //   {
  //     arabName: "الكويت",
  //     lat: "29.3759",
  //     lon: "47.9774",
  //   },
  //   {
  //     arabName: "طرابلس",
  //     lat: "32.8872",
  //     lon: "13.1913",
  //   },
  //   {
  //     arabName: "الدوحة",
  //     lat: "25.2854",
  //     lon: "51.5310",
  //   },
  //   {
  //     arabName: "القاهرة",
  //     lat: "30.0444",
  //     lon: "31.2357",
  //   },
  //   {
  //     arabName: "مسقط",
  //     lat: "23.5859",
  //     lon: "58.4059",
  //   },
  //   {
  //     arabName: "عمان",
  //     lat: "31.9454",
  //     lon: "35.9284",
  //   },
  //   {
  //     arabName: "القدس",
  //     lat: "31.7683",
  //     lon: "35.2137",
  //   },
  //   {
  //     arabName: "المنامة",
  //     lat: "26.2235",
  //     lon: "50.5876",
  //   },
  //   {
  //     arabName: "صنعاء",
  //     lat: "15.3694",
  //     lon: "44.1910",
  //   },
  //   {
  //     arabName: "دمشق",
  //     lat: "33.5138",
  //     lon: "36.2765",
  //   },
  //   {
  //     arabName: "بغداد",
  //     lat: "33.3128",
  //     lon: "44.3615",
  //   },
  //   {
  //     arabName: "الجزائر",
  //     lat: "36.7538",
  //     lon: "3.0588",
  //   },
  //   {
  //     arabName: "تونس",
  //     lat: "36.8065",
  //     lon: "10.1815",
  //   },
  //   {
  //     arabName: "الرباط",
  //     lat: "34.0209",
  //     lon: "-6.8416",
  //   },
  //   {
  //     arabName: "بيروت",
  //     lat: "33.8938",
  //     lon: "35.5018",
  //   },
  //   {
  //     arabName: "جيبوتي",
  //     lat: "11.5721",
  //     lon: "43.1456",
  //   },
  //   {
  //     arabName: "مقديشيو",
  //     lat: "2.0469",
  //     lon: "45.3182",
  //   },
  //   {
  //     arabName: "الخرطوم",
  //     lat: "15.5007",
  //     lon: "32.5599",
  //   },
  //   {
  //     arabName: "موروني",
  //     lat: "-11.7172",
  //     lon: "43.2473",
  //   },
  //   {
  //     arabName: "نواكشوط",
  //     lat: "18.0735",
  //     lon: "-15.9582",
  //   },
  // ];
  function handleCityChange(lon, lat, name) {
    setSelectedCity(name);
    getWeather(lon, lat);
  }
  const capitalsList = cityCapitals.map((c) => {
    return (
      <h3
        onClick={() => handleCityChange(c.lon, c.lat, c.name)}
        key={c.name}
        className="capital"
        style={{
          width: "150px",
          height: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          color: "rgb(15, 62, 152)",
          backgroundColor: "white",
          flexShrink: "0",
          cursor: "pointer",
        }}
      >
        {t(c.name)}
      </h3>
    );
  });
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);
  function handleScroll(dir) {
    const container = scrollRef.current;
    if (dir === "left") {
      container.scrollBy({ left: "-200", behavior: "smooth" });
    } else {
      container.scrollBy({ left: "200", behavior: "smooth" });
    }
  }
  return (
    <div style={{ maxWidth: "100%", marginBottom: "80px" }}>
      <Container maxWidth="sm" style={{ position: "relative", zIndex: "1" }}>
        <Card
          className="weather-card"
          dir={`${locale === "ar" ? "rtl" : "ltr"}`}
          sx={{
            minWidth: 275,
            background: "#0f3e98",
            textAlign: locale === "ar" ? "right" : "left",
            color: "white",
          }}
        >
          <CardContent>
            <div
              className="card-title"
              style={{
                display: "flex",
                alignItems: "flex-end",
                marginBottom: "10px",
              }}
            >
              <Typography
                variant="h3"
                sx={{ margin: "0 15px", fontWeight: "500" }}
              >
                {t(selectedCity || "damascus")}
              </Typography>
              <Typography variant="h6">{dateAndTime}</Typography>
            </div>
            <hr style={{ borderColor: "white" }} />
            <div
              className="card-text"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 15px",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="h2"
                    sx={{
                      margin: "0",
                      fontWeight: "400",
                      position: "relative",
                      height: "100%",
                    }}
                  >
                    {weather.temp}
                  </Typography>
                  <img
                    src={`https://openweathermap.org/img/wn/${weather.iconId}@2x.png`}
                    alt="weather State"
                  />
                </div>
                <p style={{ fontWeight: "400" }}>{t(weather.description)}</p>
                <div style={{ fontSize: "12px" }}>
                  <span>
                    {t("Minmum")} : {weather.minTemp}
                  </span>
                  <span style={{ margin: "0 15px" }}>|</span>
                  <span style={{ margin: "0 15px" }}>
                    {t("Maximum")} : {weather.maxTemp}
                  </span>
                </div>
              </div>
              <div className="cloud-image" /*style={{ position: "relative" }}*/>
                <CloudIcon
                  sx={{
                    fontSize: "150px",
                    animationName: "cloudy",
                    animationDuration: "2s",
                    animationIterationCount: "infinite",

                    animationTimingFunction: "linear",
                    animationDirection: "alternate",
                    // position: "absolute",
                    // left: "0",
                    // top: "50%",
                  }}
                />
              </div>
            </div>
          </CardContent>

          {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>
        <div
          style={{
            width: "100%",
            textAlign: "left",
            marginTop: "10px",
          }}
        >
          <Button
            sx={{ color: "white", letterSpacing: "1px" }}
            variant="text"
            onClick={() => {
              if (locale === "en") {
                console.log(locale);
                setLocale("ar");
                i18n.changeLanguage("ar");
                moment.locale("ar");
                setDateAndTime(moment().format("MMM Do YYYY"));
              } else {
                console.log(locale);
                setLocale("en");
                i18n.changeLanguage("en");
                moment.locale("en");
                setDateAndTime(moment().format("MMM Do YYYY"));
              }
              console.log(i18n.language);
            }}
          >
            {locale === "ar" ? "انجليزي" : "arabic"}
          </Button>
        </div>
      </Container>
      <div
        style={{
          display: "flex",
          maxWidth: "80%",
          alignItems: "center",
          position: "absolute",
          margin: "auto",
          bottom: "0",
          left: "10%",
          zIndex: "200",
        }}
      >
        <IconButton
          style={{ height: "fit-content" }}
          onClick={() => handleScroll("right")}
        >
          <ArrowForwardIosIcon sx={{ color: "white" }} />
        </IconButton>

        <div
          ref={scrollRef}
          className="capital-chooser"
          style={{
            display: "flex",
            width: "100%",
            overflowX: "auto",
            scrollbarWidth: "none",
            scrollBehavior: "smooth",
            padding: "10px 0",
            paddingRight: "20px",
            "&:hover": { cursor: "grab" },
            // overflow: "hidden",
          }}
        >
          {capitalsList}
        </div>

        <IconButton
          onClick={() => handleScroll("left")}
          style={{ height: "fit-content" }}
        >
          <ArrowBackIosIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
    </div>
  );
}
