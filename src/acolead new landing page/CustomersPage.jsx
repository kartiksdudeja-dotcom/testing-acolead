import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Header from './Header';
import Footer from './Footer';
import BookDemo from './BookDemo';

const logos = [
  ['Desai Estate', '/Client Logos/Desai Estate.jpeg'],
  ['Direct Resale', '/Client Logos/Direct Resale.png'],
  ['Global Consultancy', '/Client Logos/Globle consultancy.jpg'],
  ['Inspirational Homes', '/Client Logos/Inspirational Homes.png'],
  ['KD Asset Builder', '/Client Logos/Kd Asset Builder.png'],
  ['Mittal Brothers', '/Client Logos/Mittal Brothers.png'],
  ['PropMentor', '/Client Logos/PROPMENTORLOGO.jpeg'],
  ['PotterzWheel Realty', '/Client Logos/PotterzWheel Realty.jpeg'],
  ['Pune Property Guide', '/Client Logos/Pune_Property_Guide__1_ (1).png'],
  ['Sukran Realty', '/Client Logos/Sukran Realty.png'],
  ['LeadsInn', '/Client Logos/leadsinn.jpeg'],
  ['White Collar Realty', '/Client Logos/whitecollar.png'],
  ['Shri Gurukeshav', '/Client Logos/Shri_Gurukeshav _Logo (2).jpg'],
  ['Jain Housing', '/Client Logos/WhatsApp Image 2026-09-18 at 5.45.21 PM (1).jpeg'],
  ['Maharshi Group', '/Client Logos/WhatsApp Image 2026-09-28 at 6.57.51 PM.jpeg'],
];

const CustomersPage = () => (
  <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', '@media (max-width:1023.95px)': { pb: 8 } }}>
    <Header />
    <Box component="main" sx={{ flex: 1 }}>
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#F2F6FC', borderBottom: '1px solid #E1E9F3' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography sx={{ color: '#0859C1', textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 800, fontSize: 11, mb: 1.5 }}>AcoLead customers</Typography>
          <Typography component="h1" sx={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#101C2E', fontWeight: 800, fontSize: { xs: 36, md: 48 }, lineHeight: 1.12, letterSpacing: '-.04em', mb: 2 }}>Real estate teams, working better together.</Typography>
          <Box sx={{ width: 48, height: 4, bgcolor: '#3B9D1D', borderRadius: 3, mx: 'auto', mb: 2 }} />
          <Typography sx={{ color: '#536277', fontSize: 16, lineHeight: 1.65, maxWidth: 700, mx: 'auto' }}>AcoLead supports builders, agencies and property sales teams as they manage enquiries, follow-ups and bookings.</Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Typography component="h2" sx={{ color: '#101C2E', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: .6 }}>Our customer community</Typography>
        <Typography sx={{ color: '#596A80', fontSize: 14, mb: 2.5 }}>Builders, agencies and real estate sales teams use AcoLead to manage their work.</Typography>
        <Grid container spacing={1.3}>
          {logos.map(([name, src]) => <Grid item xs={6} sm={4} md={3} lg={2} key={name}><Box sx={{ height: 100, p: 1.5, borderRadius: 2, bgcolor: '#fff', border: '1px solid #E7EDF5', display: 'grid', placeItems: 'center' }}><Box component="img" src={`${process.env.PUBLIC_URL}${src}`} alt={name} loading="lazy" sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} /></Box></Grid>)}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: '#F8FBFF', py: { xs: 5, md: 6 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography component="h2" sx={{ color: '#101C2E', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 1 }}>Customer stories</Typography>
          <Typography sx={{ color: '#596A80', fontSize: 14, lineHeight: 1.65, mb: 2.2 }}>
            Customer stories will be added here after each customer approves their challenge, results and any photos or video.
          </Typography>
          <Button component={RouterLink} to="/request-a-demo" variant="outlined" endIcon={<ArrowForwardRoundedIcon />} sx={{ borderColor: '#0859C1', color: '#0859C1', textTransform: 'none', fontWeight: 700 }}>See AcoLead for your team</Button>
        </Container>
      </Box>

      <BookDemo />
    </Box>
    <Footer />
  </Box>
);

export default CustomersPage;
