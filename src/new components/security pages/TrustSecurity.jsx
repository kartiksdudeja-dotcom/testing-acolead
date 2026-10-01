import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, useMediaQuery, ListItemIcon, useTheme } from '@mui/material';
import logo from '../../assets/acoflow.png';
import { useNavigate } from 'react-router-dom';
import { useMixpanel } from '../../mixpanel/MixpanelContext';

const TrustSecurity = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const navigate = useNavigate();
    const {trackEvent}=useMixpanel()
    const sections = [
        {
            title: '1. Data Collection and Usage',
            subtitles: [
                'We collect only the necessary information required for delivering our services, including your name, email address, and usage data.',
                'Your data is used exclusively for enhancing security and providing a seamless user experience.',
                'We do not collect sensitive data without your explicit consent.',
            ],
        },
        {
            title: '2. Secure Storage and Encryption',
            subtitles: [
                'All data is encrypted using industry-leading standards (256-bit encryption) both at rest and in transit.',
                'Your personal and document data is stored in highly secure data centers.',
                'Regular audits and penetration tests are conducted to identify and mitigate potential risks.',
            ],
        },
        {
            title: '3. Commitment to Confidentiality',
            subtitles: [
                'We adhere to strict confidentiality agreements to ensure your data is never shared without your permission.',
                'No unauthorized personnel or third parties have access to your data.',
                'We follow a strict No-Disclosure Policy to safeguard sensitive information.',
            ],
        },
        {
            title: '4. Access Control',
            subtitles: [
                'Access to data is granted only to authorized personnel based on roles and responsibilities.',
                'Multi-factor authentication and logging ensure secure access management.',
                'Unauthorized access attempts are actively monitored and addressed immediately.',
            ],
        },
        {
            title: '5. Compliance and Certifications',
            subtitles: [
                'We comply with global security standards such as GDPR, HIPAA, and SOC 2.',
                'Our platform undergoes regular compliance reviews to meet evolving regulations.',
                'You can request a copy of our security compliance certifications by contacting us.',
            ],
        },
        {
            title: '6. Your Security Rights',
            subtitles: [
                'Request access to your data or opt for data deletion.',
                'Report security concerns or vulnerabilities by reaching out to security@coalitionify.com.',
                'Receive prompt updates about any security-related changes that might impact your data.',
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
                <img src={logo} width="140" height="auto" style={{ marginLeft: 5 }} />
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
                    padding: 4,
                    textAlign: 'left',
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{ fontWeight: 'bold', fontSize: isMobile ? '20px' : isTablet ? '22px' : '24px' }}
                >
                    Trust and Security
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
                    At Coalitionify Innovate Pvt Ltd, we prioritize your trust and security. This document outlines our
                    commitment to protecting your data and ensuring a secure experience on our platform.
                </Typography>
                {sections.map((section, index) => (
                    <Box key={index} sx={{ marginTop: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '18px' }}>
                            {section.title}
                        </Typography>
                        <List sx={{ paddingLeft: 2 }}>
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

export default TrustSecurity;
