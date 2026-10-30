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

const MultiuserWorkflow = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm", "xs"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const { trackEvent } = useMixpanel()
    const data = {
        title: "Document Preparation & Secure Sending",
        details: [
            "Upload contracts, agreements, or forms into the system.",
            "Add signature fields, initials, checkboxes, and custom fields as required."
        ]
    };
    
    const data1 = {
        title: "Multi-User Signing Rules & Secure Delivery",
        details: [
            "All Must Sign → Every assigned participant must sign.",
            "Any 2 Out of N → Any two participants can sign to complete.",
            "Custom Rules → Set conditions based on role, department, or priority.",
            "Send documents securely to recipients via email, SMS, or a secure link."
        ]
    };
    
    const data2 = {
        title: "Bulk Signing & Automated Workflow Triggers",
        details: [
            "Bulk Document Sending → Send multiple agreements in one go.",
            "Bulk Signature Requests → Recipients can sign multiple documents with a single action.",
            "Automated Reminders → Notify pending signers to complete the process.",
            "Real-Time Status Tracking → Monitor signing progress across all documents."
        ]
    };
    
    const data3 = {
        title: "Seamless Multi-Party Signing Experience",
        details: [
            "Recipients can sign from any device (desktop, mobile, tablet) – no app required.",
            "Supports typed, drawn, or uploaded signature images.",
            "Multi-user signing workflows with real-time updates.",
            "Parallel & Sequential Signing → Define whether signers can sign simultaneously or in order."
        ]
    };
    

    const keychallenges = [
        { title: "Multi-User Approvals", subtitle: "Coordinating multiple signers delays document completion." },
        { title: "Manual Tracking", subtitle: "Lack of real-time updates makes tracking signatures difficult." },
        { title: "Security Risks", subtitle: "Documents are vulnerable to tampering without secure storage." },
        { title: "Brand Consistency", subtitle: "Inconsistent branding affects trust in signed documents." }
    ];
    
    const benefits = [
        "Multi-User Signature Rules → Configure all must sign or any 2 of N approvals.",
        "Bulk Signing & Workflow Triggers → Automate large-scale signing tasks.",
        "Automated Tracking & Audit Logs → Full visibility into every signing action.",
        "Secure & Tamper-Proof Storage → Encrypted document repository.",
        "Custom Branding & White Labeling → Maintain brand consistency."
    ];
    
    const handleNavigate = () => {
        navigate('/');
        trackEvent('move to home page')
    };

    const text1='Secure & Automated Multi-User Signature Workflow'
    const text2=''

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
                                   AcoFlow simplifies document signing, approvals, and compliance tracking with multi-user participation rules, bulk signing, and a detailed audit trail—ensuring a seamless and legally binding signature process.
                                </Typography>
                            ) : (
                                <Typography variant="h6" sx={{ mt: 2, color: 'text.primary', }} lineHeight={1.6}>
                                    AcoFlow simplifies document signing, approvals, and compliance tracking with multi-user participation rules, bulk signing, and a detailed audit trail—ensuring a seamless and legally binding signature process.
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
                                Introducing AcoFlow: Multi-User Signature Workflow
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    mt: 2,
                                    fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
                                    color: 'text.primary',
                                }}
                            >
                                Our platform leverages automation, encryption, and real-time tracking to streamline multi-user signing, enhance security, and ensure compliance—enabling faster, tamper-proof, and legally binding document approvals.
                            </Typography>

                            <Challenges keychallenges={keychallenges}/>
                            <HowItWorks data={data} data1={data1} data2={data2} data3={data3}/>
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

export default MultiuserWorkflow;
