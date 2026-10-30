import React, { useState, useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMixpanel } from "../mixpanel/MixpanelContext";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const {trackEvent}=useMixpanel()
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    trackEvent('slide images')
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: isMobile ? "100%" : "75%",
      }}
    >
      {/* Slider Box */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                flex: "0 0 100%",
                height: "100%",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </Box>
        {/* <Button
          variant="outlined"
          sx={{
            position: "absolute",
            bottom: 15,
            right: 15,
            zIndex: 1,
            backgroundColor: 'transparent',
            color: "black",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              color: "white",
            },
            [theme.breakpoints.down("sm")]: {
              padding: "4px 10px",
              fontSize: "0.5rem",
              bottom: 4,
              right: 4,
            },
            [theme.breakpoints.down("xs")]: {
              padding: "2px 6px",
              fontSize: "0.5rem",
              bottom: 2,
              right: 2,
            },
          }}
          onClick={()=>trackEvent('Try Now button clicked')}
        >
          Try Now
        </Button> */}
      </Box>
      {/* Dots Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          gap: "10px",
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => handleDotClick(index)}
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              border: "1px solid black",
              backgroundColor: currentIndex === index ? "black" : "white",
              cursor: "pointer",
              transition: "background-color 0.3s ease, transform 0.2s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageSlider;
