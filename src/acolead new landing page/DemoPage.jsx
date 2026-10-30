import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import { pushTrackingEvent } from '../utils/tracking';

const nextSteps = [
  ['1', 'Tell us about your team', 'Share your business type, team size, current tools and lead volume.'],
  ['2', 'See AcoLead on your leads', 'We’ll walk through lead capture, follow-ups and the workflows your team uses.'],
  ['3', 'Review your next steps', 'Get answers to your questions and a setup and pricing discussion for your requirements.'],
];

const SmallDashboardPreview = () => (
  <Box sx={{ width: '100%', maxWidth: 390, justifySelf: { md: 'end' }, p: 1.5, borderRadius: 3, bgcolor: '#fff', border: '1px solid #DFE8F2', boxShadow: '0 16px 38px rgba(20,44,74,.12)' }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.2 }}>
      <Box><Typography sx={{ color: '#14243A', fontSize: 12, fontWeight: 800 }}>AcoLead · My Day</Typography><Typography sx={{ color: '#7D8A9B', fontSize: 8 }}>Your team’s priority leads</Typography></Box>
      <Box sx={{ width: 22, height: 22, borderRadius: '50%', bgcolor: '#E1F0FD', border: '2px solid white', boxShadow: '0 2px 7px rgba(8,89,193,.2)' }} />
    </Box>
    {[['Priya Shah', '99acres · 3 BHK', 'Ready to close'], ['Rahul Mehta', 'Google · 1 BHK', 'Call due'], ['Anita Rao', 'WhatsApp · 2 BHK', 'New enquiry']].map(([name, source, status], i) => (
      <Box key={name} sx={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: .8, mb: .65, p: .9, borderRadius: 1.5, border: '1px solid #E8EEF5', bgcolor: '#FBFDFF' }}>
        <Box><Typography sx={{ color: '#26374F', fontSize: 9, fontWeight: 800 }}>{name}</Typography><Typography sx={{ color: '#7A8799', fontSize: 8 }}>{source}</Typography></Box>
        <Box sx={{ px: .7, py: .35, borderRadius: 4, bgcolor: i === 1 ? '#FFF2D8' : '#E6F4EA', color: i === 1 ? '#8A6514' : '#246B38', fontSize: 7, fontWeight: 700 }}>{status}</Box>
      </Box>
    ))}
  </Box>
);

const DemoPage = () => (
  <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', '@media (max-width:1023.95px)': { pb: 8 } }}>
    <Header />
    <Box component="main" sx={{ flex: 1 }}>
      <Box sx={{ bgcolor: '#F2F6FC', borderBottom: '1px solid #E1E9F3', py: { xs: 5, md: 6 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 5 }} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography sx={{ color: '#0859C1', fontSize: 11, fontWeight: 800, letterSpacing: '.09em', textTransform: 'uppercase', mb: 1.2 }}>AcoLead product demo</Typography>
              <Typography component="h1" sx={{ color: '#101C2E', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 35, md: 46 }, fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.12, mb: 1.5 }}>
                See it on your own leads in 20 minutes
              </Typography>
              <Box sx={{ width: 48, height: 4, bgcolor: '#3B9D1D', borderRadius: 3, mb: 1.6 }} />
              <Typography sx={{ color: '#536277', fontSize: 15, lineHeight: 1.6 }}>
                For sales teams of 5 or more. Own Every Lead. Close Every Deal.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}><SmallDashboardPreview /></Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 5 } }}>
        <Typography component="h2" sx={{ textAlign: 'center', color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 22, md: 27 }, fontWeight: 800, mb: 2.5 }}>What happens next</Typography>
        <Grid container spacing={1.5}>
          {nextSteps.map(([number, title, description]) => <Grid item xs={12} md={4} key={number}><Box sx={{ display: 'flex', gap: 1.3, height: '100%', p: 1.8, borderRadius: 2.5, border: '1px solid #E1E9F3', bgcolor: '#fff' }}><Box sx={{ flex: '0 0 30px', width: 30, height: 30, display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: '#E1F0FD', color: '#0859C1', fontWeight: 800, fontSize: 13 }}>{number}</Box><Box><Typography sx={{ color: '#14243A', fontWeight: 800, fontSize: 14, mb: .5 }}>{title}</Typography><Typography sx={{ color: '#596A80', fontSize: 12, lineHeight: 1.55 }}>{description}</Typography></Box></Box></Grid>)}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: '#F8FBFF', py: { xs: 4, md: 5 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, md: 5 }} alignItems="start">
            <Grid item xs={12} md={4}>
              <Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 24, fontWeight: 800, mb: 1 }}>Book your free demo</Typography>
              <Typography sx={{ color: '#596A80', fontSize: 13, lineHeight: 1.6, mb: 2 }}>Share a few details so we can focus the session on your sales process.</Typography>
              <Box sx={{ display: 'grid', gap: .9, mb: 2 }}>
                <Typography sx={{ color: '#536277', fontSize: 12, fontWeight: 700 }}>Contact</Typography>
                  <Typography component="a" href="tel:+919112614174" onClick={() => pushTrackingEvent('phone_click', { page_path: window.location.pathname })} sx={{ color: '#0859C1', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>+91 91126 14174</Typography>
                <Typography component="a" href="mailto:sales@coalitionify.com" sx={{ color: '#0859C1', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>sales@coalitionify.com</Typography>
                <Typography component="a" href="https://acolead.com" sx={{ color: '#0859C1', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>acolead.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: .6, color: '#0859C1', fontSize: 11, fontWeight: 700 }}><CheckCircleRoundedIcon sx={{ fontSize: 16 }} /> 20-minute guided walkthrough</Box>
            </Grid>
            <Grid item xs={12} md={8}><Contact /></Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
    <Footer />
  </Box>
);

export default DemoPage;
