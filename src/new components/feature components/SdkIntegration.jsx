import React from 'react';
import { Box, Grid, Container, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/acoflow.png'
import { useMixpanel } from '../../mixpanel/MixpanelContext';
const SdkIntegration = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm", "xs"));
    const {trackEvent}=useMixpanel()
    const contentData = [
        {
            title: 'Seamless API Integration',
            subtitle: 'Easily integrate with third-party services using our powerful SDK. With pre-built API endpoints and customizable connectors, developers can quickly set up secure and efficient integrations, enhancing functionality without the need for complex configurations.',
        },
        {
            title: 'Real-Time Data Sync',
            subtitle: 'Our SDK supports real-time data synchronization across multiple platforms. Whether you are integrating with a CRM or an analytics tool, the SDK ensures that data flows smoothly between systems without delays, keeping your application up-to-date.',
        },
        {
            title: 'Security & Compliance',
            subtitle: 'Our SDK is built with top-notch security in mind. It supports OAuth 2.0, SSL encryption, and other industry-standard security protocols to protect your data during the integration process. It also ensures compliance with data privacy regulations like GDPR.',
        },
    ];
    const handleNavigate = () => {
        navigate('/');
        trackEvent('move to home page')
    };
    return (
        <Box>
            {/* <Box
                sx={{
                    background: theme.palette.background.gradient,
                    color: 'white',
                    py: 1,
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <img src={logo} width="140" height="auto" style={{marginLeft:5}}/>
            </Box> */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, ml: !isMobile ? 5 : 0, mr: 5, mt: 2 }}>
                <img
                    src={logo}
                    width="150"
                    height="auto"
                    alt="Logo"
                    style={{ cursor: 'pointer' }}
                    onClick={handleNavigate}
                />
            </Box>
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Box display="flex" alignItems="center">
                                <IconButton
                                    sx={{
                                        color: '#99A2AC',
                                        p: 0,
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                    disableRipple
                                    onClick={() => {
                                        navigate(-1)
                                        trackEvent('back button clicked')
                                    }}
                                >
                                    <ArrowBackIcon />
                                </IconButton>
                                <Typography variant="body1" sx={{ ml: 1, color: '#99A2AC' }}>
                                    Back
                                </Typography>
                            </Box>
                            <Box display={'flex'}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        mt: 2,
                                        fontWeight: 600,
                                        backgroundImage: theme.palette.linearColor.gradient,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    SDK Integration
                                </Typography>
                            </Box>
                            {!isMobile ? (
                                <Typography variant="body2" sx={{ mt: 2, color: '#99A2AC' }} lineHeight={1.6}>
                                    The SDK provides developers with a seamless integration experience, enabling real-time data sync,<br />
                                    security features, and API connectors that simplify connecting with third-party platforms.<br />
                                    Enhance your app's capabilities with a few simple steps and minimal configuration.
                                </Typography>
                            ) : (
                                <Typography variant="body2" sx={{ mt: 2, color: '#99A2AC' }} lineHeight={1.6}>
                                    The SDK provides developers with a seamless integration experience, enabling real-time data sync,
                                    security features, and API connectors that simplify connecting with third-party platforms.
                                    Enhance your app's capabilities with a few simple steps and minimal configuration.
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <video
                                controls
                                style={{
                                    width: '100%',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <source src="your-video-url.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ mt: 4 }}>
                            {contentData.map((item, index) => (
                                <Box key={index} sx={{ mb: 3 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                            color: 'black',
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontWeight: 400,
                                            color: theme.palette.text.secondary,
                                            wordWrap: 'break-word',
                                            lineHeight: 1.6,
                                            mt: 1,
                                            textAlign: 'left',
                                        }}
                                    >
                                        {item.subtitle}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default SdkIntegration;
