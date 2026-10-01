import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, useMediaQuery, ListItemIcon, useTheme } from '@mui/material';
import logo from '../../assets/acoflow.png';
import { useNavigate } from 'react-router-dom';
import { useMixpanel } from '../../mixpanel/MixpanelContext';


const LegalityNew = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const navigate = useNavigate();
    const {trackEvent}=useMixpanel()
    const sections = [
        {
            title: '1. Legal Recognition of E-signatures',
            subtitles: [
                'E-signatures are legally binding under global standards such as ESIGN Act, UETA, and eIDAS.',
                'Ensure compliance with country-specific regulations for cross-border transactions.',
                'Digital signatures meet stricter legal requirements with cryptographic validation.',
            ],
        },
        {
            title: '2. Validity Criteria',
            subtitles: [
                'The signer must provide consent to conduct business electronically.',
                'Intent to sign must be clearly demonstrated by the signer.',
                'Proper record-keeping ensures an audit trail of signing activities.',
            ],
        },
        {
            title: '3. Security Measures',
            subtitles: [
                'Documents are encrypted with 256-bit encryption for secure transmission and storage.',
                'Two-factor authentication (2FA) can be used to verify signer identity.',
                'Comprehensive audit logs track every action taken on a document.',
            ],
        },
        {
            title: '4. Use Cases',
            subtitles: [
                'Contracts and agreements across industries such as real estate, finance, and healthcare.',
                'Government forms and regulatory filings.',
                'Internal approvals and employee onboarding.',
            ],
        },
        {
            title: '5. Dispute Resolution',
            subtitles: [
                'E-signature platforms like ours provide a tamper-evident seal to ensure document integrity.',
                'Audit logs serve as evidence in case of disputes.',
                'We offer legal support to validate e-signatures in court if required.',
            ],
        },
        {
            title: '6. Future of E-signatures',
            subtitles: [
                'Growing adoption of blockchain-based e-signatures for immutable record-keeping.',
                'Integration with AI for advanced fraud detection and verification.',
                'Enhanced global regulatory frameworks for seamless cross-border use.',
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
                    E-signature Legality
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
                    Coalitionify Innovate Pvt Ltd ("we," "our," or "us") ensures that electronic signatures comply with applicable laws and offer the highest level of security and reliability. This section outlines the legality and application of e-signatures.
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

export default LegalityNew;
