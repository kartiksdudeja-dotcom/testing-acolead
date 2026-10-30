import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const clients = [
    { name: 'Sukran Realty', src: '/Client Logos/Sukran Realty.png' },
    { name: 'KD Asset Builder', src: '/Client Logos/Kd Asset Builder.png' },
    { name: 'Mittal Brothers', src: '/Client Logos/Mittal Brothers.png' },
    { name: 'White Collar Realty', src: '/Client Logos/whitecollar.png' },
    { name: 'Inspirational Homes', src: '/Client Logos/Inspirational Homes.png' },
    { name: 'Desai Estate', src: '/Client Logos/Desai Estate.jpeg' },
    { name: 'Direct Resale', src: '/Client Logos/Direct Resale.png' },
    { name: 'Global Consultancy', src: '/Client Logos/Globle consultancy.jpg' },
    { name: 'PropMentor', src: '/Client Logos/PROPMENTORLOGO.jpeg' },
    { name: 'PotterzWheel Realty', src: '/Client Logos/PotterzWheel Realty.jpeg' },
    { name: 'Pune Property Guide', src: '/Client Logos/Pune_Property_Guide__1_ (1).png' },
    { name: 'LeadsInn', src: '/Client Logos/leadsinn.jpeg' },
    { name: 'Shri Gurukeshav', src: '/Client Logos/Shri_Gurukeshav _Logo (2).jpg' },
    { name: 'Jain Housing', src: '/Client Logos/WhatsApp Image 2026-09-18 at 5.45.21 PM (1).jpeg' },
    { name: 'Maharshi Group', src: '/Client Logos/WhatsApp Image 2026-09-28 at 6.57.51 PM.jpeg' },
];

const ClientLogosMarquee = () => (
    <Box component="section" aria-label="AcoLead client proof" sx={{ bgcolor: '#fff', borderTop: '1px solid #E7EDF5', borderBottom: '1px solid #E7EDF5', py: { xs: 2.5, md: 3.2 }, overflow: 'hidden' }}>
        <style>{`
            @keyframes acLeadLogoRun {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
            }
            .aclead-logo-track {
                display: flex;
                align-items: center;
                width: max-content;
                animation: acLeadLogoRun 38s linear infinite;
                will-change: transform;
            }
            .aclead-logo-group {
                display: flex;
                flex: 0 0 auto;
                align-items: center;
                gap: 12px;
                padding-right: 12px;
            }
            .aclead-logo-card img {
                filter: grayscale(1);
                opacity: .68;
                transition: filter .25s ease, opacity .25s ease, transform .25s ease;
            }
            .aclead-logo-card:hover img {
                filter: grayscale(0);
                opacity: 1;
                transform: scale(1.04);
            }
        `}</style>
        <Container maxWidth="lg" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '270px minmax(0, 1fr)' }, gap: { xs: 2, md: 3.5 }, alignItems: 'center' }}>
            <Box>
                <Typography component="h2" sx={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#14243A', fontWeight: 800, fontSize: { xs: 21, md: 23 }, letterSpacing: '-.03em', lineHeight: 1.2 }}>
                    Around 10 lakh leads
                </Typography>
                <Typography sx={{ color: '#536277', fontSize: 14, lineHeight: 1.45, mt: 0.4 }}>
                    managed on AcoLead by agencies and builders.
                </Typography>
            </Box>
            <Box sx={{ overflow: 'hidden', py: 0.4 }}>
                <Box className="aclead-logo-track">
                    {[0, 1].map((group) => (
                        <Box key={group} className="aclead-logo-group" aria-hidden={group === 1 ? 'true' : undefined}>
                            {clients.map((client) => (
                                <Box key={`${group}-${client.name}`} className="aclead-logo-card" aria-label={group === 0 ? client.name : undefined} sx={{ flex: '0 0 auto', width: { xs: 108, sm: 120 }, height: { xs: 64, sm: 70 }, px: 1.2, py: 1, border: '1px solid #E7EDF5', borderRadius: 1.5, bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Box component="img" src={`${process.env.PUBLIC_URL}${client.src}`} alt={group === 0 ? client.name : ''} loading="lazy" sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                </Box>
                            ))}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    </Box>
);

export default ClientLogosMarquee;
