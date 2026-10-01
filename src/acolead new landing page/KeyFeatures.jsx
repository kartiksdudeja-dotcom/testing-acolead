import React, { useRef } from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { motion, useInView } from 'framer-motion';

import KeyFeaturebg from './icons/KeyFeaturebg';
import Icon1 from './icons/Icon1';
import Icon2 from './icons/Icon2';
import Icon3 from './icons/Icon3';
import Icon4 from './icons/Icon4';
import Icon5 from './icons/Icon5';
import Icon6 from './icons/Icon6';
import Icon7 from './icons/Icon7';
import Icon8 from './icons/Icon8';
import Icon9 from './icons/Icon9';

const featuresData = [
    {
        icon: <Icon1 />,
        title: 'BOOST STAFF EFFICIENCY',
        subtitle:
            'Automated routing, reminders, and follow-ups ensure no lead is missed and sales staff focus only on hot leads.',
    },
    {
        icon: <Icon2 />,
        title: 'LEAD PRIVACY CONTROL',
        subtitle:
            'Protect your customer data with complete lead masking across calls, WhatsApp, and internal systems.',
    },
    {
        icon: <Icon3 />,
        title: 'AI-POWERED SALES AUTOMATION',
        subtitle:
            "Let our intelligent assistant suggest the best next steps based on each lead's behavior and interaction history.",
    },
    {
        icon: <Icon4 />,
        title: 'POWERFUL CUSTOMER ENGAGEMENT',
        subtitle:
            'Engage instantly on WhatsApp, Facebook, Instagram, and calls—personalized and timely, without manual effort.',
    },
    {
        icon: <Icon5 />,
        title: 'COLLECT LEADS FROM ALL SOURCES',
        subtitle:
            'Effortlessly capture leads from your website, social platforms, messaging apps, CRM forms, and third-party portals.',
    },
    {
        icon: <Icon6 />,
        title: 'MOBILE APP FOR ANDROID & IOS',
        subtitle:
            'Your staff can manage leads, follow-ups, visit schedules, and communication, right from their mobile device.',
    },
    {
        icon: <Icon7 />,
        title: 'KNOW WHO’S CALLING – INSTANTLY',
        subtitle:
            'Identify the caller as a lead before answering, using our built-in Call ID feature synced with your CRM.',
    },
    {
        icon: <Icon8 />,
        title: 'Unified Partner Communication',
        subtitle:
            'Streamline onboarding and keep your network informed with timely updates and marketing materials—automated or on demand.',
    },
    {
        icon: <Icon9 />,
        title: 'WHATSAPP BULK MARKETING ',
        subtitle:
            'Access proven templates to launch high-impact WhatsApp campaigns at scale and drive better partner engagement.',
    }    
];

const KeyFeatures = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, threshold: 0.2 });
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{ width: '100%', bgcolor: '#F9FBFF', py: 8 }}>
            <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
                <Typography
                    variant="h4"
                    align="center"
                    sx={{ fontWeight: 700, mb: 6 }}
                >
                    Key{' '}
                    <Box component="span" sx={{ color: '#1677F7' }}>
                        Features
                    </Box>
                </Typography>

            </Box>

            <Box
                ref={ref}
                sx={{
                    position: 'relative',
                    maxWidth: '1200px',
                    mx: 'auto',
                    px: 2,
                }}
            >
                {
                    !isMobile && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 0,
                                pointerEvents: 'none',
                            }}
                        >
                            <KeyFeaturebg />
                        </Box>
                    )
                }
                <Grid container spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
                    {featuresData.map((item, index) => {
                        const col = index % 3;
                        let variant = { hidden: {}, visible: {} };

                        if (col === 0) {
                            variant = {
                                hidden: { opacity: 0, x: -40 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.6, delay: index * 0.1 },
                                },
                            };
                        } else if (col === 1) {
                            variant = {
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6, delay: index * 0.1 },
                                },
                            };
                        } else {
                            variant = {
                                hidden: { opacity: 0, x: 40 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.6, delay: index * 0.1 },
                                },
                            };
                        }

                        return (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <motion.div
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    variants={variant}
                                >
                                    <Card
                                        sx={{
                                            borderRadius: 3,
                                            bgcolor: '#fff',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                            // height: '100%',
                                            height:isMobile ? 260 : 220,
                                        }}
                                    >
                                        <CardContent>
                                            <Typography variant="h4" sx={{ mb: 1 }}>
                                                {item.icon}
                                            </Typography>
                                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ mt: 1, color: '#555', textAlign: 'justify' }}
                                            >
                                                {item.subtitle}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Box>
    );
};

export default KeyFeatures;
