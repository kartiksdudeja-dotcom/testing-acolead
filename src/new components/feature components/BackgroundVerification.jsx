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

const BackgroundVerification = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm", "xs"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const { trackEvent } = useMixpanel()


    const data = {
        title: "Background Verification & Risk Scoring",
        details: [
            "Checks for employment gaps, fraudulent claims, and identity mismatches.",
            "Vector search matches candidates against industry records and past flagged cases."
        ]
    };

    const data1 = {
        title: "Score Breakdown",
        details: [
            "Identity Verification (30 pts) → Aadhaar/PAN matching, duplicate detection.",
            "Employment History (30 pts) → Past company verification, role confirmation.",
            "Financial Stability (20 pts) → Credit score, loan repayment behavior (optional).",
            "Criminal & Compliance Check (20 pts) → Court cases, legal disputes, blacklist records."
        ]
    };

    const data2 = {
        title: "Candidate Submission & Screening",
        details: [
            "Candidates submit personal, educational, and employment details via secure links (no manual data entry required).",
            "Auto-fills missing fields, cross-verifies with official records, and detects inconsistencies.",
            "Instant verification of documents, including PAN, Aadhaar, education certificates, and past employment records."
        ]
    };

    const data3 = {
        title: "Risk Categorization & HR System Integration",
        details: [
            "High-Scoring Candidates (80+) → Auto-approved for hiring.",
            "Medium-Scoring Candidates (50-80) → Requires additional verification.",
            "Low-Scoring Candidates (<50) → Flagged for HR review.",
            "Seamless HRMS Integration → Works with SAP SuccessFactors, Workday, BambooHR, or custom HR systems."
        ]
    };

    const keychallenges = [
        { title: "Data Authenticity", subtitle: "Manual document verification increases the risk of forged or inaccurate data." },
        { title: "Employment History Validation", subtitle: "Past employment details are difficult to verify across multiple organizations." },
        { title: "Financial & Criminal Checks", subtitle: "Limited access to financial records and criminal databases for risk assessment." },
        { title: "HR System Integration", subtitle: "Lack of seamless integration with existing HRMS platforms slows down hiring decisions." }
    ];

    const benefits = [
        "No need for manual verification → Automates identity & employment history checks.",
        "Faster background checks → Instant document validation & database cross-referencing.",
        "More accurate risk assessment → Compares against past flagged cases.",
        "Automated compliance & criminal checks → Flags risky candidates before onboarding.",
        "Stronger workforce integrity → HR teams receive only pre-verified candidates."
    ];


    const handleNavigate = () => {
        navigate('/');
        trackEvent('move to home page')
    };

    const text1 = 'Revolutionizing HR & Employee Background Verification'
    const text2 = ''

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
                                    AcoFlow streamlines employee background verification checks, automated document validation, and seamless HR system integration—ensuring a faster, more reliable, and compliant hiring process.
                                </Typography>
                            ) : (
                                <Typography variant="h6" sx={{ mt: 2, color: 'text.primary', }} lineHeight={1.6}>
                                    AcoFlow streamlines employee background verification checks, automated document validation, and seamless HR system integration—ensuring a faster, more reliable, and compliant hiring process.
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
                                Introducing AcoFlow: Employee Background Verification
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    mt: 2,
                                    fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
                                    color: 'text.primary',
                                }}
                            >
                                Our platform leverages vector databases, and identity verification to automate employee background checks, improve accuracy, and streamline hiring decisions—ensuring a trustworthy workforce.
                            </Typography>

                            <Challenges keychallenges={keychallenges} />
                            <HowItWorks data={data} data1={data1} data2={data2} data3={data3} />
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

export default BackgroundVerification;
