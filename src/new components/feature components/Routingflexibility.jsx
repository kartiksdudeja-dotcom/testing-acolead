import React from 'react';
import { Box, Grid, Container, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/acoflow.png'
import { useMixpanel } from '../../mixpanel/MixpanelContext';

const Routingflexibility = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm", "xs"));
    const {trackEvent}=useMixpanel()
    const contentData = [
        {
            title: 'Conditional Routing',
            subtitle: 'Routing flexibility enables dynamic workflow customization, including conditional routing based on specific criteria, expiry routing for time-sensitive actions, and decline routing to handle rejections seamlessly. These features empower users to adapt workflows to various scenarios with ease.Routing flexibility enables dynamic workflow customization, including conditional routing based on specific criteria, expiry routing for time-sensitive actions, and decline routing to handle rejections seamlessly. These features empower users to adapt workflows to various scenarios with ease.',
        },
        {
            title: 'Expiry Routing',
            subtitle: 'Never let tasks linger or cause delays in your workflows. Set expiration times for each stage, ensuring tasks are automatically rerouted, escalated, or completed if deadlines are missed. This feature is perfect for businesses that prioritize fast turnarounds or have time-sensitive processes like client onboarding or contract renewals. Example: Escalate a delayed approval to a manager if it isn’t addressed within 48 hours.Never let tasks linger or cause delays in your workflows. Set expiration times for each stage, ensuring tasks are automatically rerouted, escalated, or completed if deadlines are missed.',
        },
        // {
        //     title: 'Decline Routing',
        //     subtitle: 'Rejected decisions don’t have to bring processes to a halt. With decline routing, ensure declined tasks are sent back to the originator or forwarded to alternate approvers for modifications or further action. This reduces bottlenecks and keeps the workflow moving. Example: If a document is rejected by the finance team, it can be rerouted to the creator with feedback or sent to another approver for further input.',
        // },
    ];
    const handleNavigate = () => {
        navigate('/');
        trackEvent('move to home page')
    };
    return (
        <Box>
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
                                    Routing Flexibility
                                </Typography>
                            </Box>
                            {!isMobile ? (
                                <Typography variant="body2" sx={{ mt: 2, color: '#99A2AC' }} lineHeight={1.6}>
                                    Routing flexibility enables dynamic workflow customization,<br />
                                    including conditional routing based on specific criteria,<br />
                                    expiry routing for time-sensitive actions, and decline routing<br />
                                    to handle rejections seamlessly. These features empower<br />
                                    users to adapt workflows to various scenarios with ease.
                                </Typography>
                            ) : (
                                <Typography variant="body2" sx={{ mt: 2, color: '#99A2AC' }} lineHeight={1.6}>
                                    Routing flexibility enables dynamic workflow customization,
                                    including conditional routing based on specific criteria,
                                    expiry routing for time-sensitive actions, and decline routing
                                    to handle rejections seamlessly. These features empower
                                    users to adapt workflows to various scenarios with ease.
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

export default Routingflexibility;
