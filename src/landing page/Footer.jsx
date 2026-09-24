import { Box, Container, Grid, Typography, IconButton, Link, useMediaQuery, useTheme } from '@mui/material';
import logo from '../assets/acolead-crm.png';
import Linkdin from './Icons/social media/Linkdin';
import Insta from './Icons/social media/Insta';
import Facebook from './Icons/social media/Facebook';
import Github from './Icons/social media/Github';

const Footer = ({ scrollToSection }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleLinkClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <Box sx={{ color: 'white', py: 5, width: '100%',bgcolor: '#333333' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Section 1 - Logo, Tagline, Socials */}
                    <Grid item xs={12} md={3}>
                        <Box display="flex" flexDirection="column" alignItems="flex-start">
                            <Box sx={{ mb: 2 }}>
                                <Box
                                    component="img"
                                    src={logo}
                                    alt="Logo"
                                    sx={{
                                        width: 150,
                                        height: 'auto',
                                        filter: 'brightness(0) invert(1)', // makes PNG appear white
                                    }}
                                />
                            </Box>
                            <Typography variant="body2" sx={{ mb: 2, maxWidth: 220 }}>
                                Manage leads. Close deals. Build Your Presence with Acolead
                            </Typography>
                            <Box>
                                <IconButton sx={{ color: 'white' }} component="a" href="https://www.instagram.com/acolead/" target="_blank" rel="noopener noreferrer">
                                    <Insta />
                                </IconButton>
                                <IconButton sx={{ color: 'white' }} component="a" href="https://www.facebook.com/acolead" target="_blank" rel="noopener noreferrer">
                                    <Facebook />
                                </IconButton>
                                <IconButton
                                    sx={{ color: 'white' }}
                                    component="a"
                                    href="https://www.linkedin.com/company/coalitionify-innovate"
                                    target="_blank"
                                >
                                    <Linkdin />
                                </IconButton>
                                {/* <IconButton
                                    sx={{ color: 'white' }}
                                    component="a"
                                    href="https://www.npmjs.com/package/coalitionify-sdk"
                                    target="_blank"
                                >
                                    <Github />
                                </IconButton> */}
                            </Box>
                        </Box>
                    </Grid>

                    {/* Section 2 - Company */}
                    <Grid item xs={6} md={3}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Company
                        </Typography>
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Link onClick={() => scrollToSection('home')} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Home</Link>
                            <Link onClick={() => scrollToSection('why')} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>About Us</Link>
                            <Link onClick={() => scrollToSection('capabilities')} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Features</Link>
                            {/* <Link onClick={() => scrollToSection('plans')} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Pricing</Link>
                            <Link onClick={() => scrollToSection('why')} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Blog</Link> */}

                            {isMobile && (
                                <Box mt={4}>
                                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                        Help
                                    </Typography>
                                    <Box display="flex" flexDirection="column" gap={1}>
                                        <Link onClick={() => handleLinkClick('/privacy')} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Privacy Policy</Link>
                                        <Link onClick={() => handleLinkClick('/terms-conditions')} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Terms and Conditions</Link>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </Grid>

                    {/* Section 3 - We Serve */}
                    <Grid item xs={6} md={3}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Features
                        </Typography>
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Link color="inherit" underline="none">Lead Management</Link>
                            <Link color="inherit" underline="none">Fake Customer Detection</Link>
                            <Link color="inherit" underline="none">Whatsapp Chat Automation</Link>
                            <Link color="inherit" underline="none">Meeting Scheduler</Link>
                            <Link color="inherit" underline="none">Website Builder</Link>
                        </Box>
                    </Grid>

                    {/* Section 4 - Help */}
                    {!isMobile && (
                        <Grid item xs={12} md={3}>
                            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                Help
                            </Typography>
                            <Box display="flex" flexDirection="column" gap={1}>
                                <Link onClick={() => handleLinkClick('/privacy')} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Privacy Policy</Link>
                                <Link onClick={() => handleLinkClick('/terms-conditions')} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Terms and Conditions</Link>
                            </Box>
                        </Grid>
                    )}
                </Grid>

                {/* Footer Bottom */}
                <Box sx={{ textAlign: 'center', mt: 4, pt: 2, borderTop: '1px solid #555' }}>
                    <Typography variant="body2" color="white">
                        &copy; {new Date().getFullYear()} , All Rights Reserved by AcoLead.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
