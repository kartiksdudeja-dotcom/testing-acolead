import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, ListItemIcon, useMediaQuery, useTheme } from '@mui/material';
import logo from '../../assets/acoflow.png'
import { useNavigate } from 'react-router-dom';
import { useMixpanel } from '../../mixpanel/MixpanelContext';
const Refund = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const navigate = useNavigate();
    const {trackEvent}=useMixpanel()
    const sections = [
        {
            title: '1. Subscription Cancellation',
            subtitles: [
                'You may cancel your subscription at any time through your account settings or by contacting support.',
                'Services will remain active until the end of the current billing period.',
            ],
        },
        {
            title: '2. Refunds',
            subtitles: [
                'Refunds for unused subscription periods are not offered for monthly plans.',
                'For yearly subscriptions, refunds may be issued for unused months if canceled within the first 30 days of the billing cycle.',
                'Refunds will not be processed for accounts found in violation of our Terms & Conditions.',
            ],
        },
        {
            title: '3. Payment Failures',
            subtitles: [
                'If a payment fails, we will notify you and attempt to process the payment again.',
                'Failure to resolve payment issues may result in suspension of your account.',
            ],
        },
        {
            title: '4. Service Interruptions',
            subtitles: [
                'In case of service interruptions caused by us, you may be eligible for a prorated refund for the affected period.',
            ],
        },
        {
            title: '5. Data Access Post-Cancellation',
            subtitles: [
                'After subscription termination, your data will remain accessible for 30 days for download or migration purposes.',
            ],
        },
        {
            title: '6. Contact for Cancellation',
            subtitles: [
                'For any cancellation or refund queries, please contact us at info@coalitionify.com.',
            ],
        },
    ];
    const handleNavigate = () => {
        navigate('/');
        trackEvent('move to home page')
    };
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: '#f9f9f9',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* <Box
                sx={{
                    background: theme.palette.background.gradient,
                    color: 'white',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
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
            <Container
                maxWidth="md"
                sx={{
                    backgroundColor: 'white',
                    // borderRadius: 2,
                    // boxShadow: theme.shadows[2],
                    padding: 4,
                    // marginTop: 4,
                    textAlign: 'left',
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{ fontWeight: 'bold', fontSize: isMobile ? '20px' : isTablet ? '22px' : '24px' }}
                >
                    Cancellation/Refund Policy
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    gutterBottom
                    sx={{ fontSize: isMobile ? '12px' : isTablet ? '14px' : '16px' }}
                >
                    Last Updated: [Insert Date]
                </Typography>
                <Typography
                    variant="body1"
                    paragraph
                    sx={{
                        textAlign: 'justify',
                        wordBreak: 'break-word',
                        fontSize: isMobile ? '12px' : isTablet ? '14px' : '16px',
                    }}
                >
                    Coalitionify Innovate Pvt Ltd provides a transparent cancellation and refund policy to ensure customer satisfaction.
                </Typography>
                {sections.map((section, index) => (
                    <Box key={index} sx={{ marginTop: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '18px' }}>
                            {section.title}
                        </Typography>
                        <List sx={{ paddingLeft: 2, }}>
                            {section.subtitles.map((subtitle, idx) => (
                                <ListItem
                                    key={idx}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        paddingLeft: 0,
                                        paddingY: 0.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 'auto',
                                            marginRight: '10px',
                                            marginTop: '8px',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: '6px',
                                                height: '6px',
                                                backgroundColor: 'black',
                                                borderRadius: '50%',
                                            }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={subtitle}
                                        sx={{
                                            textAlign: 'justify',
                                            margin: 0,
                                            lineHeight: 1,
                                            fontSize: isMobile ? '10px' : isTablet ? '12px' : '12px',
                                            fontFamily: 'Poppins, sans-serif',
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>

                    </Box>
                ))}

            </Container>
        </Box>
    );
};

export default Refund;
