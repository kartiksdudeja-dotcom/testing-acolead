import React from 'react';
import { Box, Grid, Container, Typography, useTheme, Button, Divider, useMediaQuery, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/acoflow.png'
import img from '../../assets/sign.jpeg'
import { useMixpanel } from '../../mixpanel/MixpanelContext';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import Challenges from './Challenges';
import HowItWorks from './works components/HowItWorks';
import AnimatedTypographyComman from '../../styled component/AnimatedTypographyComman';

const RealEstate = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm", "xs"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const { trackEvent } = useMixpanel()
    const data2 = {
        title: "Lead Submission & Qualification",
        details: [
            "External brokers submit leads via secure links (no CRM access required).",
            "auto-fills missing data and detects anomalies.",
            "Financial details, property preferences, and history are validated instantly."
        ]
    };

    const data = {
        title: "Lead Scoring with AI & Vector Search",
        details: [
            "AI-powered intent detection identifies serious buyers.",
            "Vector search matches new leads against past successful buyers.",
        ]
    };
    const data1 = {
        title: "Score Breakdown",
        details: [
            "Financial Eligibility (30 pts) → Budget, credit check.",
            "Lead Intent (30 pts) → Urgency, interest.",
            "Engagement & Behavior (20 pts) → CRM activity, inquiries.",
            "Market Factors (20 pts) → Location demand, trends."
        ]
    }

    const data3 = {
        title: "Lead Routing & CRM Integration",
        details: [
            "High-scoring leads (80+) are auto-routed to sales teams.",
            "Medium-scoring leads (50-80) go to pre-sales nurturing.",
            "CRM-agnostic → Integrates with Salesforce, HubSpot, or custom CRMs."
        ]
    };

    const keychallenges = [
        { title: 'System Access', subtitle: 'External brokers don’t have direct CRM access.' },
        { title: 'Unqualified Leads', subtitle: 'Manual verification wastes time on unqualified leads.' },
        { title: 'Eligibility Check', subtitle: 'No financial eligibility checks, leading to unverified buyer data.' },
        { title: 'Lead Intent', subtitle: 'Lead intent is unknown, making follow-ups inefficient.' }
      ]
    const benefits = [
        'No Need for CRM Access → Brokers submit leads securely via AcoFlow.',
        'Faster Lead Verification → auto-checks lead details, reducing manual reviews.',
        'More Accurate Lead Scoring → compares against past high-converting leads.',
        'Financial Eligibility Assessment → Flags leads that don’t meet budget requirements.',
        'Higher Conversion Rates → Sales teams receive only highly qualified leads.'
    ];
    const handleNavigate = () => {
        navigate('/');
        trackEvent('move to home page')
    };

    const flag='true'
    const text1='Revolutionizing Real Estate Lead Management'
    const text2='The Problem with Traditional Lead Qualification'

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
                            <Box display={'flex'} flexDirection={'column'}>
                                {/* <Typography
                                    variant="h4"
                                    sx={{
                                        mt: 2,
                                        fontWeight: 600,
                                        backgroundImage: theme.palette.linearColor.gradient,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    Revolutionizing Real Estate Lead Management
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        mt: 2,
                                        fontWeight: 200,
                                        backgroundImage: theme.palette.linearColor.gradient,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    The Problem with Traditional Lead Qualification
                                </Typography> */}
                                <AnimatedTypographyComman theme={theme} text1={text1} text2={text2}/>

                            </Box>
                            {!isMobile ? (
                                <Typography variant="h6"
                                    sx={{
                                        mt: 2,
                                        color: 'text.primary',
                                        lineHeight: 1.6,
                                        fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" }
                                    }}>
                                    Real estate agencies receive thousands of property inquiries from websites, social media, and partner referrals. However, most CRM solutions are designed for in-house sales teams, making third-party broker collaboration tedious.
                                </Typography>
                            ) : (
                                <Typography variant="h6" sx={{ mt: 2, color: 'text.primary', }} lineHeight={1.6}>
                                    Real estate agencies receive thousands of property inquiries from websites, social media, and partner referrals. However, most CRM solutions are designed for in-house sales teams, making third-party broker collaboration tedious.
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <img
                                src={img}
                                alt="Description"
                                style={{
                                    width: '100%',
                                    height: '300px', // Adjust height as needed
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    objectFit: 'cover', // Ensures the image fills the space without distortion
                                }}
                            />
                        </Box>


                    </Grid>
                    <Grid item xs={12}>
                        <Divider sx={{ width: '70%', mb: 2, mx: 'auto', color: 'black', mt: 2 }} />
                        <Box sx={{ mt: 2 }} display={'flex'} flexDirection={'column'}>
                            <Typography
                                variant="h5"
                                sx={{
                                    mt: 3,
                                    fontWeight: 200,
                                    backgroundImage: theme.palette.linearColor.gradient,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Introducing AcoFlow: Real Estate Lead Qualification
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    mt: 2,
                                    fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
                                    color: 'text.primary',
                                }}
                            >
                                Our platform leverages vector databases, and financial analysis to automate lead verification, improve scoring accuracy, and optimize routing for higher conversion rates.
                            </Typography>

                            <Challenges keychallenges={keychallenges}/>
                            <HowItWorks data={data} data1={data1} data2={data2} data3={data3} flag={flag}/>
                            <Box
                                m={3}
                                display={'flex'}
                                flexDirection={'column'}
                                sx={{
                                    mt: 8,
                                    border: '1px solid #e0e0e0', // Light border around the component
                                    padding: 2, // Padding around the whole component
                                    borderRadius: '8px', // Optional: rounded corners
                                }}
                            >
                                <Box display={'flex'}>
                                    <Typography
                                        variant="h4"
                                        fontWeight={600}
                                        sx={{
                                            backgroundImage: theme.palette.linearColor.gradient,
                                            WebkitBackgroundClip: "text",
                                            color: "transparent",
                                        }}

                                    >
                                        Why Choose AcoFlow?
                                    </Typography>
                                </Box>
                                <List sx={{ paddingLeft: isMobile ? 1 : 3, paddingTop: 1, paddingBottom: 0, mt: 1 }}>
                                    {benefits.map((benefit, index) => (
                                        <ListItem
                                            key={index}
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
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    marginTop: '3px',
                                                }}
                                            >
                                                <CheckOutlinedIcon sx={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }} />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={benefit}
                                                sx={{
                                                    textAlign: 'justify',
                                                    color: 'text.primary',
                                                    margin: 0,
                                                    lineHeight: 1.8,
                                                    fontSize: '16px',
                                                    fontFamily: 'Poppins, sans-serif',
                                                    display: 'block',
                                                    width: '100%',
                                                    overflowWrap: 'break-word',
                                                    wordBreak: 'break-word',
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>

                            </Box>
                            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', mb: 7 }}>
                                <Button

                                    variant="outlined"
                                    sx={{
                                        bgcolor: 'black',
                                        color: 'white',
                                        textDecoration: 'none',
                                        textTransform: 'none',
                                        fontSize: isMobile ? '10px' : isTablet ? '12px' : '14px',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.04)',
                                        },
                                    }}
                                    onClick={() => {
                                        window.open('https://calendly.com/yogesh-coalitionify/30min', '_blank');
                                        // scrollToContactForm();
                                    }}
                                >
                                    📩 Book a Demo
                                </Button>
                            </Box>


                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default RealEstate;
