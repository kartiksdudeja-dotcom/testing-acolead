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

const SupplyChain = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm", "xs"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const { trackEvent } = useMixpanel()
    const data = {
        title: "Vendor Scoring with AI & Vector Search",
        details: [
            "AI-powered analysis identifies high-risk or unreliable suppliers.",
            "Vector search matches new vendors against past successful partnerships."
        ]
    };

    const data1 = {
        title: "Score Breakdown",
        details: [
            "Financial Stability (30 pts) → Credit checks, payment history.",
            "Compliance & Certification (30 pts) → Regulatory adherence, ISO/industry certifications.",
            "Reliability & Performance (20 pts) → Past order fulfillment rates, issue resolution.",
            "Supply Chain Impact (20 pts) → Risk assessment, geographical dependencies."
        ]
    };

    const data2 = {
        title: "Vendor Submission & Qualification",
        details: [
            "External vendors submit compliance and financial data via secure links (no ERP access required).",
            "Auto-fills missing fields and detects inconsistencies.",
            "Supplier certifications, financial stability, and compliance records are instantly validated."
        ]
    };

    const data3 = {
        title: "Vendor Routing & ERP Integration",
        details: [
            "High-scoring vendors (80+) are auto-routed for contract approvals.",
            "Medium-scoring vendors (50-80) require additional verification.",
            "Seamless ERP Integration → Works with SAP, Oracle, NetSuite, or custom procurement systems."
        ]
    };


    const keychallenges = [
        { title: 'System Access', subtitle: 'External vendors don’t have direct ERP access.' },
        { title: 'Unqualified Suppliers', subtitle: 'Manual verification wastes time on unqualified suppliers.' },
        { title: 'Compliance & Financial Checks', subtitle: 'No automated compliance or financial checks, leading to risk exposure.' },
        { title: 'Vendor Performance', subtitle: 'Vendor performance and reliability are unclear, affecting supply chain stability.' }
    ];

    const benefits = [
        'No Need for ERP Access → Vendors submit compliance and financial data securely via AcoFlow.',
        'Faster Vendor Qualification → auto-checks vendor details, reducing manual reviews.',
        'More Accurate Risk Assessment → compares against past high-performing vendors.',
        'Automated Compliance & Financial Checks → Flags high-risk vendors before onboarding.',
        'Stronger Supply Chain Stability → Procurement teams receive only reliable, pre-qualified vendors.'
    ];
    const handleNavigate = () => {
        navigate('/');
        trackEvent('move to home page')
    };

    const flag='true'
    const text1 = 'Revolutionizing Vendor & Supplier Management'
    const text2 = 'The Problem with Traditional Vendor Qualification'
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
                                    Revolutionizing Vendor & Supplier Management
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
                                    The Problem with Traditional Vendor Qualification
                                </Typography> */}
                                <AnimatedTypographyComman theme={theme} text1={text1} text2={text2} />
                            </Box>
                            {!isMobile ? (
                                <Typography variant="h6"
                                    sx={{
                                        mt: 2,
                                        color: 'text.primary',
                                        lineHeight: 1.6,
                                        fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" }
                                    }}>
                                    Manufacturing and supply chain organizations work with numerous vendors, suppliers, and logistics partners. However, most ERP and procurement systems are designed for internal teams, making third-party vendor collaboration slow and inefficient.
                                </Typography>
                            ) : (
                                <Typography variant="h6" sx={{ mt: 2, color: 'text.primary', }} lineHeight={1.6}>
                                    Manufacturing and supply chain organizations work with numerous vendors, suppliers, and logistics partners. However, most ERP and procurement systems are designed for internal teams, making third-party vendor collaboration slow and inefficient.
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
                                Introducing AcoFlow: Vendor Qualification & Compliance
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    mt: 2,
                                    fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
                                    color: 'text.primary',
                                }}
                            >
                                Our platform leverages vector databases, and financial analysis to automate vendor qualification, improve scoring accuracy, and optimize procurement decision-making for a more reliable supply chain.
                            </Typography>

                            <Challenges keychallenges={keychallenges} />
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

export default SupplyChain;
