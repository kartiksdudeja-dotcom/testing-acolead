import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const leadRows = [
    { name: 'Priya Shah', source: '99acres · 3 BHK', status: 'Site visit today', tone: '#E6F4EA' },
    { name: 'Rahul Mehta', source: 'Google · 1 BHK', status: 'Call due', tone: '#FFF2D8' },
    { name: 'Anita Rao', source: 'WhatsApp · 2 BHK', status: 'New enquiry', tone: '#E9F1FC' },
];

const MyDayCard = () => (
    <Box sx={{ width: { xs: 170, sm: 190 }, p: 1.6, borderRadius: 3, bgcolor: '#fff', border: '1px solid #DCE6F2', boxShadow: '0 18px 45px rgba(12, 35, 68, .16)' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.4 }}>
            <Typography sx={{ fontWeight: 800, fontSize: 13, color: '#14243A' }}>My Day</Typography>
            <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: '#3B9D1D' }} />
        </Box>
        <Typography sx={{ fontSize: 10, color: '#6A788B', mb: 1 }}>4 leads need you first</Typography>
        {leadRows.map((lead) => (
            <Box key={lead.name} sx={{ p: 1, mb: 0.8, border: '1px solid #E7EDF5', borderRadius: 1.7 }}>
                <Typography sx={{ fontSize: 10, fontWeight: 800, color: '#14243A' }}>{lead.name}</Typography>
                <Typography sx={{ fontSize: 9, color: '#718096', mb: 0.6 }}>{lead.source}</Typography>
                <Box sx={{ display: 'inline-flex', px: 0.7, py: 0.25, borderRadius: 4, bgcolor: lead.tone, color: '#31435B', fontSize: 8, fontWeight: 700 }}>{lead.status}</Box>
            </Box>
        ))}
        <Button fullWidth size="small" sx={{ mt: 0.2, textTransform: 'none', fontWeight: 700, color: '#0859C1', fontSize: 10 }}>View my day</Button>
    </Box>
);

const Dashboard = () => (
    <Box sx={{ width: '100%', p: { xs: 1.4, sm: 2 }, borderRadius: { xs: 3, sm: 4 }, bgcolor: 'rgba(255,255,255,.96)', border: '1px solid #DCE6F2', boxShadow: '0 26px 70px rgba(12,35,68,.15)', backdropFilter: 'blur(12px)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.6 }}>
            <Box>
                <Typography sx={{ fontSize: { xs: 11, sm: 13 }, color: '#14243A', fontWeight: 800 }}>AcoLead Sales Dashboard</Typography>
                <Typography sx={{ fontSize: 9, color: '#748198', mt: 0.3 }}>Project overview · October 2026</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 0.5 }}><Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#D8E2EE' }} /><Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#D8E2EE' }} /><Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#D8E2EE' }} /></Box>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: { xs: 0.7, sm: 1 }, mb: 1.5 }}>
            {[['New leads', '128', '+18%'], ['Site visits', '42', 'This month'], ['Bookings', '12', '+3']].map(([label, value, detail]) => (
                <Box key={label} sx={{ p: { xs: 0.8, sm: 1.2 }, border: '1px solid #E5ECF4', borderRadius: 2, bgcolor: '#FBFDFF' }}>
                    <Typography sx={{ fontSize: { xs: 8, sm: 9 }, color: '#718096' }}>{label}</Typography>
                    <Typography sx={{ fontSize: { xs: 15, sm: 19 }, lineHeight: 1.3, fontWeight: 800, color: '#14243A' }}>{value}</Typography>
                    <Typography sx={{ fontSize: 8, color: '#3B9D1D', fontWeight: 700 }}>{detail}</Typography>
                </Box>
            ))}
        </Box>
        <Box sx={{ border: '1px solid #E5ECF4', borderRadius: 2, overflow: 'hidden' }}>
            <Box sx={{ px: 1.2, py: 0.9, display: 'flex', justifyContent: 'space-between', bgcolor: '#F8FBFF' }}>
                <Typography sx={{ fontSize: 9, fontWeight: 800, color: '#263851' }}>Recent enquiries</Typography>
                <Typography sx={{ fontSize: 8, color: '#0859C1', fontWeight: 700 }}>View all</Typography>
            </Box>
            {leadRows.map((lead) => (
                <Box key={lead.name} sx={{ px: 1.2, py: { xs: 0.8, sm: 1 }, display: 'grid', gridTemplateColumns: '1.1fr 1fr auto', alignItems: 'center', gap: 0.5, borderTop: '1px solid #EEF2F7' }}>
                    <Typography sx={{ fontSize: { xs: 8, sm: 10 }, color: '#25364D', fontWeight: 700 }}>{lead.name}</Typography>
                    <Typography sx={{ fontSize: { xs: 7, sm: 9 }, color: '#77859A' }}>{lead.source}</Typography>
                    <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: '#3B9D1D' }} />
                </Box>
            ))}
        </Box>
        <Box sx={{ mt: 1.4, height: { xs: 44, sm: 58 }, display: 'flex', alignItems: 'end', gap: 0.7, px: 1, borderRadius: 2, bgcolor: '#F8FBFF' }}>
            {[35, 52, 43, 70, 55, 82, 62, 93, 72, 100, 78, 90, 64, 84].map((height, i) => <Box key={i} sx={{ flex: 1, height: `${height}%`, borderRadius: '3px 3px 0 0', bgcolor: i > 9 ? '#0859C1' : '#B9D4F4' }} />)}
        </Box>
    </Box>
);

const RealEstateHero = ({ handleScrollToForm, handleScrollToFeatures }) => (
    <Box sx={{ position: 'relative', overflow: 'hidden', bgcolor: '#F2F6FC', borderBottom: '1px solid #E1E9F3' }}>
        <Box aria-hidden="true" sx={{ position: 'absolute', inset: 0, opacity: 0.36, backgroundImage: 'linear-gradient(105deg, transparent 43%, rgba(255,255,255,.9) 43.2%, transparent 43.5%), linear-gradient(75deg, transparent 65%, rgba(8,89,193,.12) 65.2%, transparent 65.5%), linear-gradient(90deg, transparent 72%, rgba(255,255,255,.8) 72.2%, transparent 72.5%)', backgroundSize: '100% 100%', pointerEvents: 'none' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', py: { xs: 6, md: 8.5 }, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1.05fr' }, gap: { xs: 5, md: 6 }, alignItems: 'center' }}>
            <Box sx={{ maxWidth: 570 }}>
                <Typography sx={{ color: '#0859C1', fontSize: { xs: 11, sm: 12 }, fontWeight: 800, letterSpacing: '.09em', textTransform: 'uppercase', mb: 2 }}>Real estate CRM for your whole sales team</Typography>
                <Typography component="h1" sx={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#101C2E', fontWeight: 800, fontSize: { xs: 38, sm: 48, md: 56 }, lineHeight: 1.08, letterSpacing: '-.045em', mb: 2.2 }}>
                    One CRM. Every Real Estate <Box component="span" sx={{ color: '#0859C1' }}>Opportunity.</Box>
                </Typography>
                <Box sx={{ width: 48, height: 4, bgcolor: '#3B9D1D', borderRadius: 3, mb: 2.2 }} />
                <Typography sx={{ fontSize: { xs: 16, md: 18 }, lineHeight: 1.65, color: '#475569', mb: 3 }}>
                    Leads from portals, Meta and walk-ins in one CRM that tells each salesperson who to call today.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 2.2 }}>
                    <Button variant="contained" onClick={handleScrollToForm} endIcon={<ArrowForwardRoundedIcon />} sx={{ minHeight: 48, px: 2.6, borderRadius: 2, bgcolor: '#0859C1', fontWeight: 700, textTransform: 'none', '&:hover': { bgcolor: '#06489D' } }}>Book a Free Demo</Button>
                    <Button variant="outlined" onClick={handleScrollToFeatures} sx={{ minHeight: 48, px: 2.4, borderRadius: 2, borderColor: '#B9CBE0', color: '#14243A', bgcolor: '#fff', fontWeight: 700, textTransform: 'none', '&:hover': { borderColor: '#0859C1', bgcolor: '#F8FBFF' } }}>See All Features</Button>
                </Box>
                <Typography sx={{ color: '#65748A', fontSize: 14 }}>For Builders, Channel Partner Agencies and Mandate Firms.</Typography>
            </Box>
            <Box sx={{ minWidth: 0, position: 'relative', py: { xs: 1, sm: 2 }, pr: { xs: 0, sm: 4 } }}>
                <Box sx={{ position: 'absolute', width: '70%', height: '70%', top: '10%', right: '8%', borderRadius: '50%', bgcolor: 'rgba(29,116,222,.10)', filter: 'blur(34px)' }} />
                <Box sx={{ position: 'relative', transform: { xs: 'none', sm: 'perspective(1200px) rotateY(-3deg)' } }}><Dashboard /></Box>
                <Box sx={{ position: 'absolute', right: { xs: -4, sm: -3 }, bottom: { xs: -25, sm: -18 }, zIndex: 2 }}><MyDayCard /></Box>
            </Box>
        </Container>
    </Box>
);

export default RealEstateHero;
