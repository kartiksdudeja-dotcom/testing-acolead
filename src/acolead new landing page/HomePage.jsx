import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme, MobileStepper } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import bg from './images/bg.webp';
import calender from './images/calender.webp';
import card from './images/card.webp';
import sales from './images/sales.webp';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { leadCaputureAddon } from '../new components/acolead-modules/license.types';
import { PRODUCT_OPTIONS } from '../new components/acolead-modules/constants';

const HomePage = ({ handleScrollToForm }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const carouselSlides = useMemo(() => [
        ...PRODUCT_OPTIONS.filter((product) => product.selectable),
        {
            id: leadCaputureAddon.WEBSITE,
            label: 'Website Builder',
            accent: '#0859C1',
            mainPageHeading: (
                <>
                    Your Properties.{' '}
                    <Box component="span" sx={{ color: '#0859C1' }}>Your Website.</Box>{' '}
                    Zero Maintenance.
                </>
            ),
            mainPageDescription: 'Build your real estate website, showcase your listings, and turn visitors into enquiries—all with AcoLead, without the hassle of website maintenance.',
            isWebsiteBuilder: true,
        },
    ], []);

    const [activeStep, setActiveStep] = useState(0);
    const [direction, setDirection] = useState(0);

    const autoPlayTimer = useRef(null);

    const [ref, inView] = useInView({
        // triggerOnce: true,
        threshold: 0.2,
    });

    const slideInVariant = {
        hidden: { opacity: 0, y: -60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 2, ease: 'easeOut' },
        },
    };

    const carouselVariant = {
        enter: (direction) => ({
            x: direction > 0 ? 60 : -60,
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
        exit: (direction) => ({
            x: direction < 0 ? 60 : -60,
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
            },
        }),
    };

    const stopAutoPlay = useCallback(() => {
        if (autoPlayTimer.current !== null) {
            window.clearInterval(autoPlayTimer.current);
            autoPlayTimer.current = null;
        }
    }, []);

    const startAutoPlay = useCallback(() => {
        stopAutoPlay();
        if (carouselSlides.length < 2) return;

        autoPlayTimer.current = window.setInterval(() => {
            setDirection(1);
            setActiveStep((prev) => (prev + 1) % carouselSlides.length);
        }, 5000);
    }, [carouselSlides.length, stopAutoPlay]);

    useEffect(() => {
        startAutoPlay();
        return stopAutoPlay;
    }, [startAutoPlay, stopAutoPlay]);

    const handleMouseEnter = stopAutoPlay;
    const handleMouseLeave = startAutoPlay;

    const handleNext = () => {
        setDirection(1);
        setActiveStep((prev) => (prev + 1) % carouselSlides.length);
        // Reset auto-play timer on manual interaction
        startAutoPlay();
    };

    const handleBack = () => {
        setDirection(-1);
        setActiveStep((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
        startAutoPlay();
    };

    const handleDotClick = (index) => {
        setDirection(index > activeStep ? 1 : -1);
        setActiveStep(index);
        startAutoPlay();
    };

    const featureContent = carouselSlides[activeStep];
    return (
        <Box
            sx={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
                py: isMobile ? 4 : 0,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'center' : 'stretch',
                    maxWidth: '1200px',
                    width: '100%',
                    gap: 4,
                }}
            >
                {/* Left Content */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        textAlign: isMobile ? 'center' : 'left',
                        minHeight: isMobile ? 'auto' : '450px',
                        justifyContent: 'center',
                        position: 'relative',
                    }}
                    ref={ref}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.div
                        variants={slideInVariant}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        style={{
                            minHeight: isMobile ? '105px' : '165px',
                            display: 'flex',
                            alignItems: 'flex-start',
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                fontSize: isMobile ? '1.75rem' : '3.5rem',
                                color: '#000',
                                lineHeight: 1.2,
                                mb: 1,
                            }}
                        >
                            {featureContent.mainPageHeading}
                        </Typography>
                    </motion.div>

                    <Box sx={{ position: 'relative', minHeight: isMobile ? '105px' : '110px' }}>
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={activeStep}
                                custom={direction}
                                variants={carouselVariant}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                style={{ position: 'relative' }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: isMobile ? '0.85rem' : '0.95rem',
                                        lineHeight: 1.7,
                                        color: featureContent.isWebsiteBuilder ? '#334155' : '#444',
                                        fontWeight: featureContent.isWebsiteBuilder ? 500 : undefined,
                                    }}
                                >
                                    {featureContent.mainPageDescription}
                                </Typography>
                            </motion.div>
                        </AnimatePresence>
                    </Box>

                    <motion.div
                        variants={slideInVariant}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                alignSelf: isMobile ? 'center' : 'flex-start',
                                bgcolor: '#0859C1',
                                textTransform: 'none',
                                fontWeight: 700,
                                px: isMobile ? 3 : 5,
                                py: isMobile ? 1.2 : 1.5,
                                color: 'white',
                                fontSize: isMobile ? '0.9rem' : '1.05rem',
                                borderRadius: 3,
                                mt: 1,
                                boxShadow: '0 4px 16px rgba(8, 89, 193, 0.25)',
                                position: 'relative',
                                overflow: 'hidden',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: '-100%',
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                                    transition: 'all 0.6s ease',
                                },
                                '&:hover': {
                                    bgcolor: '#06489D',
                                    transform: 'translateY(-2px) scale(1.02)',
                                    boxShadow: '0 6px 24px rgba(8, 89, 193, 0.35)',
                                    transition: 'all 0.3s ease',
                                    '&::before': {
                                        left: '100%',
                                    },
                                },
                                '& .MuiButton-endIcon': {
                                    transition: 'transform 0.3s ease',
                                },
                                '&:hover .MuiButton-endIcon': {
                                    transform: 'translateX(4px)',
                                },
                            }}
                            onClick={handleScrollToForm}
                        >
                            {featureContent.isWebsiteBuilder ? 'Build Your Website' : 'BOOK A Demo'}
                        </Button>
                    </motion.div>

                    {!isMobile && carouselSlides.length > 1 && (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                mt: 1,
                            }}
                        >
                            <Box
                                onClick={handleBack}
                                sx={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    backgroundColor: 'white',
                                    border: '1px solid #e8ecf1',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#f5f7fa',
                                        borderColor: '#0859C1',
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                    },
                                }}
                            >
                                <ArrowBackIcon sx={{ fontSize: 18, color: '#666' }} />
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                }}
                            >
                                {carouselSlides.map((product, index) => (
                                    <Box
                                        key={index}
                                        onClick={() => handleDotClick(index)}
                                        sx={{
                                            width: index === activeStep ? 28 : 8,
                                            height: 8,
                                            borderRadius: 4,
                                            backgroundColor: index === activeStep
                                                ? product.accent
                                                : '#d0d5dd',
                                            cursor: 'pointer',
                                            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                            boxShadow: index === activeStep
                                                ? `0 0 16px ${product.accent}30`
                                                : 'none',
                                            position: 'relative',
                                            '&:hover': {
                                                backgroundColor: index === activeStep
                                                    ? product.accent
                                                    : product.accent + '50',
                                                transform: 'scale(1.1)',
                                            },
                                        }}
                                    />
                                ))}
                            </Box>

                            <Box
                                onClick={handleNext}
                                sx={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    backgroundColor: 'white',
                                    border: '1px solid #e8ecf1',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#f5f7fa',
                                        borderColor: '#0859C1',
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                    },
                                }}
                            >
                                <ArrowForwardIcon sx={{ fontSize: 18, color: '#666' }} />
                            </Box>

                            <Typography
                                variant="caption"
                                sx={{
                                    color: '#999',
                                    fontWeight: 500,
                                    fontSize: '0.7rem',
                                    ml: 0.5,
                                }}
                            >
                                {activeStep + 1}/{carouselSlides.length}
                            </Typography>
                        </Box>
                    )}

                    {isMobile && carouselSlides.length > 1 && (
                        <MobileStepper
                            steps={carouselSlides.length}
                            position="static"
                            activeStep={activeStep}
                            sx={{
                                backgroundColor: 'transparent',
                                px: 0,
                                py: 1,
                                '& .MuiMobileStepper-dot': {
                                    backgroundColor: '#ddd',
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    transition: 'all 0.3s ease',
                                },
                                '& .MuiMobileStepper-dotActive': {
                                    backgroundColor: featureContent.accent,
                                    width: 12,
                                    height: 12,
                                    boxShadow: `0 0 16px ${featureContent.accent}30`,
                                },
                            }}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNext}
                                    sx={{
                                        color: featureContent.accent,
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        fontSize: '0.8rem',
                                        '&:hover': {
                                            backgroundColor: `${featureContent.accent}10`,
                                        },
                                    }}
                                >
                                    Next <ArrowForwardIcon fontSize="small" sx={{ ml: 0.5 }} />
                                </Button>
                            }
                            backButton={
                                <Button
                                    size="small"
                                    onClick={handleBack}
                                    sx={{
                                        color: featureContent.accent,
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        fontSize: '0.8rem',
                                        '&:hover': {
                                            backgroundColor: `${featureContent.accent}10`,
                                        },
                                    }}
                                >
                                    <ArrowBackIcon fontSize="small" sx={{ mr: 0.5 }} /> Back
                                </Button>
                            }
                        />
                    )}
                </Box>

                {/* Right Image with Floating Calendar */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignSelf: isMobile ? 'auto' : 'stretch',
                        position: 'relative',
                        overflow: 'visible',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: 600,
                            height: isMobile ? 'auto' : '80%',
                            borderRadius: '4px',
                            overflow: 'hidden',
                            zIndex: 1,
                        }}
                    >
                        <Box
                            component="video"
                            src="/AcoLead-Instagram-Lead-Gen-compressed.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            aria-label="AcoLead Instagram lead generation animation"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                display: 'block',
                            }}
                        >
                            Your browser does not support video playback.
                        </Box>
                    </Box>

                    {!isMobile && (
                        <>
                            
                            
                            
                        </>
                    )}

                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;
