import { useMediaQuery, useTheme, Box, Button,Container } from '@mui/material';
import React from 'react'
import MainTypography from '../styled component/MainTypograpghy';
import ImageSlider from '../components/ImageSlider';
import img1 from '../assets/banner images/banner1.jpg';
import img2 from '../assets/banner images/banner2.jpg';

const Homepage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const images = [img1, img2];
    return (
        <Box sx={{ textAlign: 'center', mt: 6, px: 2 }}>

            <MainTypography isMobile={isMobile} isTablet={isTablet} />
            <Button
                size='large'
                target='_blank'
                href="https://app.coalitionify.com/signIn"
                variant="contained"
                sx={{
                    mt: 3, bgcolor: '#1677F7', color: 'white', borderRadius: 10, textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "1rem",
                }}
            >
                Get Started
            </Button>
            <Box sx={{ mt: 4 }}>
                    <Container>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <ImageSlider images={images} />
                        </Box>
                    </Container>
                </Box>
        </Box>
    )
}

export default Homepage
