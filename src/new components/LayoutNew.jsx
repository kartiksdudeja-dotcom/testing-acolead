import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import MainScreen from "./MainScreen";
import CenterScreen from "./CenterScreen";
import KeyFeatures from "./KeyFeatures";
import Hosting from "./Hosting";
import Plans from "./pricing/Plans";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import KeyFeaturesNew from "./KeyFeaturesNew";
import IntegrationPage from "./IntegrationPage";
import { Element } from "react-scroll";
import Security from "./Security";
import MapPage from "./map";
const LayoutNew = () => {
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [anchorEl, setAnchorEl] = useState(null);
  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <MainScreen
        selectedCountry={selectedCountry}
        handleCountryChange={handleCountryChange}
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
      <Box display="flex" flexDirection="column" flex={1}>
        <MapPage />
        {/* <KeyFeatures/> */}
        <KeyFeaturesNew />
        <CenterScreen />
        <Plans selectedCountry={selectedCountry} />
        <Hosting />
        <IntegrationPage />
        <Security />

        <Element name="contactForm" id="contactForm">
          <ContactForm />
        </Element>
      </Box>
      <Footer />
    </Box>
  );
};

export default LayoutNew;
