import React, { useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    useTheme,
    useMediaQuery,
    ToggleButtonGroup,
    ToggleButton,
} from '@mui/material';
import TickIcon from './icons/TickIcon';
import Plain1 from './icons/Plain1';
import Plain2 from './icons/Plain2';

const plans = [
    {
        planName: 'INDIVIDUAL PLAN',
        price: {
            perMonth: { rs: '₹2,500', usd: '$30' },
            perYear: { rs: '₹24,000', usd: '$290' },
        },
        features: [
            '15 days free trial',
            'All Features + All Upcoming Feature Enhancements',
            'Includes 1 User',
            'Free Support & Training',
            'Includes Customization & Data Migration from your existing system or files',
        ],
        buttonLabel: 'SIGN UP FOR INDIVIDUAL',
    },
    {
        planName: 'ESSENTIAL PLAN',
        price: {
            perMonth: { rs: '₹5,000', usd: '$60' },
            perYear: { rs: '₹50,000', usd: '$600' },
        },
        features: [
            '15 days free trial',
            'All Features + All Upcoming Feature Enhancements',
            'Includes 5 Users',
            'Free Support & Training',
            'Includes Customization & Data Migration from your existing system or files',
        ],
        buttonLabel: 'SIGN UP FOR ESSENTIAL',
    },
    {
        planName: 'SILVER PLAN',
        price: {
            perMonth: { rs: '₹10,000', usd: '$120' },
            perYear: { rs: '₹80,000', usd: '$950' },
        },
        features: [
            '15 days free trial',
            'All Features + All Upcoming Feature Enhancements',
            'Includes 10 Users',
            '₹3,600 per additional user per year',
            'Free Support & Training',
            'Includes Customization & Data Migration from your existing system or files',
        ],
        buttonLabel: 'SIGN UP FOR SILVER',
    },
    {
        planName: 'PLATINUM PLAN',
        price: {
            perMonth: { rs: '₹15,000', usd: '$180' },
            perYear: { rs: '₹120,000', usd: '$1,500' },
        },
        features: [
            '15 days free trial',
            'All Features + All Upcoming Feature Enhancements',
            'Unlimited Users',
            'Free Support & Training',
            'Email support during business hours.',
            'Includes Customization & Data Migration from your existing system or files',
        ],
        buttonLabel: 'SIGN UP FOR PLATINUM',
    },
];

const Plans = ({ country }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [billingCycle, setBillingCycle] = useState('year');

    return (
        <Box sx={{ width: '100%', overflowX: 'hidden', py: 8, bgcolor: '#F9FBFF' }}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 2 }}>
                We have{' '}
                <Box component="span" sx={{ color: '#0859C1' }}>
                    plans
                </Box>{' '}
                for everyone!
            </Typography>

            <Box display="flex" justifyContent="center" mb={5}>
                <ToggleButtonGroup
                    exclusive
                    value={billingCycle}
                    onChange={(e, value) => value && setBillingCycle(value)}
                    sx={{
                        bgcolor: '#fff',
                        borderRadius: 2,
                        boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                    }}
                >
                    <ToggleButton
                        value="month"
                        sx={{
                            px: 3,
                            py: 1,
                            borderRadius: 0,
                            fontWeight: 600,
                            '&.Mui-selected': {
                                backgroundColor: '#0859C1',
                                color: '#fff',
                            },
                        }}
                    >
                        Monthly
                    </ToggleButton>
                    <ToggleButton
                        value="year"
                        sx={{
                            px: 3,
                            py: 1,
                            borderRadius: 0,
                            fontWeight: 600,
                            '&.Mui-selected': {
                                backgroundColor: '#0859C1',
                                color: '#fff',
                            },
                        }}
                    >
                        Annually
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>

            <Grid
                container
                spacing={2}
                sx={{
                    width: '100%',
                    margin: 0,
                    px: { xs: 1, sm: 2, md: 3 },
                    overflowX: 'hidden',
                    position: 'relative',
                }}
            >
                {plans.map((plan, index) => (
                    <Grid
                        item
                        key={index}
                        xs={12}
                        sm={6}
                        md={3}
                        sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}
                    >
                        <Card
                            sx={{
                                borderRadius: 3,
                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                bgcolor: '#fff',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                flexGrow: 1,
                                position: 'relative',
                                zIndex: 1, // cards below SVGs
                            }}
                        >
                            <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                    {plan.planName}
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>
                                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                                        {
                                            plan.price[billingCycle === 'year' ? 'perYear' : 'perMonth'][
                                            country === 'US' ? 'usd' : 'rs'
                                            ]
                                        }
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#777', ml: 1 }}>
                                        /{billingCycle}
                                    </Typography>
                                </Box>

                                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
                                    What's Included
                                </Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2, mb: 3 }}>
                                    {plan.features.map((feature, i) => (
                                        <Box
                                            key={i}
                                            sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}
                                        >
                                            <Box sx={{ mt: '2px' }}>
                                                <TickIcon />
                                            </Box>
                                            <Typography variant="body2" sx={{ color: '#555', textAlign: 'justify' }}>
                                                {feature}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>

                                {/* <Box sx={{ mt: 'auto' }}>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            borderRadius: 3,
                                            fontWeight: 600,
                                            textTransform: 'none',
                                            borderColor: '#0859C1',
                                            color: '#0859C1',
                                            '&:hover': {
                                                borderColor: '#115ecf',
                                                backgroundColor: '#f0f7ff',
                                            },
                                        }}
                                    >
                                        {plan.buttonLabel}
                                    </Button>
                                </Box> */}
                            </CardContent>
                        </Card>

                        {/* Floating SVGs above cards */}
                        {index === 0 && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: '100%', // above the card bottom
                                    left: -190,
                                    zIndex: 10, // above the card
                                    pointerEvents: 'none',
                                    display: { xs: 'none', md: 'block' },
                                    mb: 1,
                                }}
                            >
                                <Plain1 />
                            </Box>
                        )}

                        {index === plans.length - 1 && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '-100%', // above the card top
                                    right: -190,
                                    zIndex: 10, // above the card
                                    pointerEvents: 'none',
                                    display: { xs: 'none', md: 'block' },
                                    mt: 1,
                                }}
                            >
                                <Plain2 />
                            </Box>
                        )}
                    </Grid>
                ))}
            </Grid>
        </Box>

    );
};

export default Plans;
