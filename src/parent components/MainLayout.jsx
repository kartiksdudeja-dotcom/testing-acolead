import React from 'react'
import { Box } from "@mui/material";
import Footer from '../new components/Footer';
import KeyFeaturesNew from '../new components/KeyFeaturesNew';
import MainHeader from './MainHeader';
import Homepage from './Homepage';
import Products from './Products';
import img1 from '../assets/acoflowimg.jpg';
import img2 from '../assets/newworkflow.jpg';
import img3 from '../assets/DocumentLibrary.jpg'
const MainLayout = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
        >
            <MainHeader/>
            <Box
                display="flex"
                flexDirection="column"
                flex={1}
            >

                <Homepage/>
                <KeyFeaturesNew />
                <Products img1={img1} img2={img2} img3={img3}/>
            </Box> 
            <Footer />
        </Box>
    )
}

export default MainLayout
