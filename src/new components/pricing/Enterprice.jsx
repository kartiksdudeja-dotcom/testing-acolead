import React from 'react'
import { Grid, Typography, Box, Button, useMediaQuery, useTheme } from '@mui/material'
import EnterPriceIcon from '../Custom Icons/EnterPriceIcon'
import { scroller } from 'react-scroll'

const Enterprice = () => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const data = {
        title: 'Enterprise',
        price: '600$',
        icon: <EnterPriceIcon />,
        longDescription: 'Unlock limitless possibilities with our Enterprise Plan designed for large-scale businesses and complex workflows.',
    }
    const scrollToContactForm = () => {
        scroller.scrollTo('contactForm', {
            duration: 800,
            smooth: true,
        });
    };
    return (
        <Grid container spacing={3} justifyContent="center" alignItems="flex-start" mt={3} p={2}>

            <Grid item xs={12} sm={6} md={6}>
                <Box>

                    <Typography variant="h4" fontWeight={700} fontSize={isSmallScreen ? '35px' : '40px'} gutterBottom>
                        Looking for a
                        <br />
                        Tailored Solution?
                    </Typography>


                    <Typography variant="body2" fontWeight="light" color="text.secondary">
                        Upgrade to our Enterprise Plan for custom workflows, <br />
                        advanced integrations, and dedicated support to meet <br />
                        your unique business needs.
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
                <Box
                    sx={{
                        padding: 2,
                        border: '1px solid #e0e0e0',
                        borderRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        height: '100%',
                        textAlign: 'left',
                        cursor: 'pointer',
                        justifyContent: 'space-between',
                    }}
                >

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                            {data.title}
                        </Typography>
                        <Box sx={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {data.icon}
                        </Box>
                    </Box>


                    {/* <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                        {data.price}
                        <Typography
                            variant="body2"
                            component="span"
                            sx={{ fontWeight: 'light', fontSize: '0.85rem', marginLeft: 0.5 }}
                        >
                            /month
                        </Typography>
                    </Typography> */}

                    <Typography variant="body2" sx={{ color: 'gray', marginTop: 1, textAlign: 'left' }}>
                        {data.longDescription}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray', marginTop: 1, textAlign: 'left' }}>
                        <span style={{ fontWeight: 'bold' }}>Advanced Customization:</span> Tailored features and integrations to suit your business.
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray', marginTop: 1, textAlign: 'left' }}>
                        <span style={{ fontWeight: 'bold' }}>Enhanced Security:</span> Enterprise-grade security and compliance.
                    </Typography>

                    <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                            borderColor: 'black',
                            color: 'black',
                            textTransform: 'none',
                            marginTop: 2,
                        }}
                        onClick={scrollToContactForm}
                    >
                        Get In Touch
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Enterprice
