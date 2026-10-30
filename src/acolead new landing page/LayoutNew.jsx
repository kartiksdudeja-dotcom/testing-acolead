import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import Header from './Header';
import RealEstateHero from './RealEstateHero';
import HomePage from './HomePage';
import SalesIntelligence from './SalesIntelligence';
// import ImgSection from './ImgSection';
import Mission from './Mission';
import KeyFeatures from './KeyFeatures';
import AudienceSolutions from './AudienceSolutions';
import LaunchingSoon from './LaunchingSoon';
import HomeFaq from './HomeFaq';
import HorizontalBar from './HorizontalBar';
// import BlogSection from './BlogSection';
import BookDemo from './BookDemo';
import Footer from './Footer';
// import ProductModules from '../new components/acolead-modules/ProductModules';
import ClientLogosMarquee from './ClientLogosMarquee';
import ProblemComparison from './ProblemComparison';
import MapPage from '../new components/map';
import { pushTrackingEvent } from '../utils/tracking';

const LayoutNew = () => {
    const aboutRef = useRef(null);
    const homeRef = useRef(null);
    const plansRef = useRef(null);
    const featuesRef = useRef(null);
    // const insightsRef = useRef(null);
    const [country, setCountry] = useState('IN');
    const formRef = useRef(null);
    const formSectionRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const isRequestDemoRoute = location.pathname.replace(/\/+$/, '') === '/request-a-demo';
    const isThankYouRoute = location.pathname.endsWith('/thank-you');
    let followup = null;
    if (isThankYouRoute && typeof sessionStorage !== 'undefined') {
        try { followup = JSON.parse(sessionStorage.getItem('acolead_demo_followup') || 'null'); } catch (_) {}
    }

    useEffect(() => {
        if (isThankYouRoute) {
            let storedFollowup = null;
            try { storedFollowup = JSON.parse(sessionStorage.getItem('acolead_demo_followup') || 'null'); } catch (_) {}
            pushTrackingEvent('demo_thank_you_view', { follow_up_route: storedFollowup?.routeCall ? 'call_within_15_minutes' : storedFollowup?.routeWhatsapp ? 'recorded_demo_on_whatsapp' : 'sales_follow_up' });
        }
    }, [isThankYouRoute]);

    const handleScrollToForm = useCallback(() => {
        if (!isRequestDemoRoute) {
            navigate('/request-a-demo');
            return;
        }

        if (formSectionRef.current) {
            const top =
                formSectionRef.current.getBoundingClientRect().top +
                window.pageYOffset -
                80;

            window.scrollTo({
                top,
                behavior: "smooth",
            });

            setTimeout(() => {
                formRef.current?.focusFirstField?.();
            }, 600);
        }
    }, [isRequestDemoRoute, navigate]);

    const handleScrollToFeatures = useCallback(() => {
        const element = featuesRef.current;
        if (!element) return;
        const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        if (isRequestDemoRoute) {
            setTimeout(() => {
                handleScrollToForm();
            }, 300);
        }
    }, [handleScrollToForm, isRequestDemoRoute]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const section = params.get('section');
        if (section) {
            setTimeout(() => {
                const map = {
                    home: homeRef,
                    about: aboutRef,
                    feature: featuesRef,
                    // insights: insightsRef,
                    plans: plansRef,
                };
                const element = map[section]?.current;
                if (element) {
                    const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({
                        top: topOffset,
                        behavior: 'smooth',
                    });
                }
            }, 300);
        } else if (!params.get('demo')) {
            window.scrollTo(0, 0);
        }
    }, [location.search]);

    if (isThankYouRoute) {
        return (
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#F8FAFC', '@media (max-width:1023.95px)': { pb: 8 } }}>
                <Header />
                <Container maxWidth="sm" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', py: 8 }}>
                    <Typography variant="h3" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
                        Thank you for your request
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#475569', mb: 4 }}>
                        {followup?.routeCall ? 'Your team has 5 or more salespeople and receives at least 50 new leads each month. Our team will call you within 15 minutes.' : followup?.routeWhatsapp ? 'Our team will prepare a recorded demo and send it to you on WhatsApp. You can also contact us directly at +91 91126 14174.' : 'Our team has received your request and will follow up with the next steps. You can contact us directly at +91 91126 14174.'}
                    </Typography>
                    <Button variant="contained" onClick={() => navigate('/')}>Back to AcoLead</Button>
                </Container>
                <Footer />
            </Box>
        );
    }

    return (
        <Box display="flex" flexDirection="column" minHeight="100vh" sx={{ '@media (max-width:1023.95px)': { pb: 8 } }}>
            <Header
                scrollToSection={(section) => {
                    const map = {
                        home: homeRef,
                        about: aboutRef,
                        feature: featuesRef,
                        // insights: insightsRef,
                        plans: plansRef,
                    };

                    const element = map[section]?.current;
                    if (element) {
                        const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
                        window.scrollTo({
                            top: topOffset,
                            behavior: 'smooth',
                        });
                    }
                }}
                handleScrollToForm={handleScrollToForm}
                country={country}
                setCountry={setCountry}
            />

            {/* REAL ESTATE CRM SOFTWARE HERO (PLACED ABOVE) */}
            <Box ref={homeRef}>
                <RealEstateHero handleScrollToForm={handleScrollToForm} handleScrollToFeatures={handleScrollToFeatures} />
            </Box>

            <ClientLogosMarquee />

            <ProblemComparison />

            <Box>
                <HomePage handleScrollToForm={handleScrollToForm} />
            </Box>

            <SalesIntelligence />

            {/* <ProductModules /> */}

            {/*
            <Box>
                <ImgSection aboutRef={aboutRef} />
            </Box>
            */}

            <Mission />

            <MapPage />

            <Box ref={featuesRef}>
                <KeyFeatures />
            </Box>

            <AudienceSolutions />

            <LaunchingSoon />

            <HomeFaq />

            <HorizontalBar />

            {/*
            <Box ref={insightsRef}>
                <BlogSection />
            </Box>
            */}

            <BookDemo
                ref={formRef}
                formSectionRef={formSectionRef}
            />

            <Footer
                handleScrollToForm={handleScrollToForm}
                scrollToSection={(section) => {
                    const map = {
                        home: homeRef,
                        about: aboutRef,
                        feature: featuesRef,
                        // insights: insightsRef,
                        plans: plansRef,
                    };

                    const element = map[section]?.current;
                    if (element) {
                        const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
                        window.scrollTo({
                            top: topOffset,
                            behavior: 'smooth',
                        });
                    }
                }}
            />
        </Box>
    );
};

export default LayoutNew;
