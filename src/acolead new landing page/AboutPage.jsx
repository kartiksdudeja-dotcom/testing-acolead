import React from 'react';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import Header from './Header';
import Footer from './Footer';
import BookDemo from './BookDemo';

const AboutPage = () => (
  <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', '@media (max-width:1023.95px)': { pb: 8 } }}>
    <Header />
    <Box component="main" sx={{ flex: 1 }}>
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#F2F6FC', borderBottom: '1px solid #E1E9F3' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography sx={{ color: '#0859C1', textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 800, fontSize: 11, mb: 1.5 }}>About AcoLead</Typography>
          <Typography component="h1" sx={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#101C2E', fontWeight: 800, fontSize: { xs: 36, md: 48 }, lineHeight: 1.12, letterSpacing: '-.04em', mb: 2 }}>Who builds AcoLead, and why real estate?</Typography>
          <Box sx={{ width: 48, height: 4, bgcolor: '#3B9D1D', borderRadius: 3, mx: 'auto', mb: 2 }} />
          <Typography sx={{ color: '#536277', fontSize: 16, lineHeight: 1.7, maxWidth: 700, mx: 'auto' }}>
            AcoLead is a real estate CRM developed and operated by Coalitionify Innovate Private Limited. It helps teams manage enquiries, customer conversations, follow-ups and sales.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Grid container spacing={2.2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: '100%', p: { xs: 2.2, md: 3 }, borderRadius: 3, border: '1px solid #E1E9F3', bgcolor: '#FFFAFA' }}>
              <Box sx={{ width: 52, height: 52, display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: '#E1F0FD', color: '#0859C1', boxShadow: 'inset 0 2px 3px #fff, 0 5px 12px rgba(8,89,193,.12)', mb: 1.8 }}><BusinessRoundedIcon sx={{ fontSize: 27 }} /></Box>
              <Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 22, fontWeight: 800, mb: 1 }}>Who builds AcoLead</Typography>
              <Typography sx={{ color: '#596A80', fontSize: 14, lineHeight: 1.7 }}>
                Coalitionify Innovate Private Limited develops and operates AcoLead. The product brings lead management, customer communication and sales workflows together for real estate teams.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: '100%', p: { xs: 2.2, md: 3 }, borderRadius: 3, border: '1px solid #E1E9F3', bgcolor: '#F8FBFF' }}>
              <Box sx={{ width: 52, height: 52, display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: '#E1F0FD', color: '#0859C1', boxShadow: 'inset 0 2px 3px #fff, 0 5px 12px rgba(8,89,193,.12)', mb: 1.8 }}><HomeWorkRoundedIcon sx={{ fontSize: 27 }} /></Box>
              <Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 22, fontWeight: 800, mb: 1 }}>Why real estate</Typography>
              <Typography sx={{ color: '#596A80', fontSize: 14, lineHeight: 1.7 }}>
                Property sales move across enquiries, conversations, follow-ups, site visits and bookings. AcoLead focuses on connecting those steps so a salesperson can see what to do next and a manager can follow progress.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: '#F8FBFF', py: { xs: 5, md: 6 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box sx={{ width: 52, height: 52, display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: '#E1F0FD', color: '#0859C1', boxShadow: 'inset 0 2px 3px #fff, 0 5px 12px rgba(8,89,193,.12)', mb: 1.8 }}><GroupsRoundedIcon sx={{ fontSize: 27 }} /></Box>
              <Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 25, fontWeight: 800, mb: 1 }}>The people behind the product</Typography>
              <Typography sx={{ color: '#596A80', fontSize: 14, lineHeight: 1.7 }}>
                AcoLead is built by the team at Coalitionify Innovate Private Limited. We’re focused on making the everyday work of real estate sales teams easier to see and manage.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ p: { xs: 2.2, md: 2.8 }, bgcolor: '#fff', border: '1px solid #E1E9F3', borderRadius: 3 }}>
                <Typography sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 18, mb: 1 }}>Coalitionify Innovate</Typography>
                <Typography sx={{ color: '#596A80', fontSize: 13, lineHeight: 1.6, mb: 1.7 }}>AcoLead is a product of Coalitionify Innovate Private Limited.</Typography>
                <Link href="https://acolead.com" underline="hover" sx={{ color: '#0859C1', fontWeight: 700, fontSize: 13 }}>acolead.com</Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 25, fontWeight: 800, mb: 1 }}>Talk to our team</Typography>
        <Typography sx={{ color: '#596A80', fontSize: 14, mb: 1.8 }}>Contact Coalitionify Innovate about AcoLead.</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1.3, sm: 3 } }}>
          <Link href="mailto:sales@coalitionify.com" underline="hover" sx={{ color: '#0859C1', fontWeight: 700 }}>sales@coalitionify.com</Link>
          <Link href="tel:+919112614174" underline="hover" sx={{ color: '#0859C1', fontWeight: 700 }}>+91 91126 14174</Link>
          <Link href="https://acolead.com" underline="hover" sx={{ color: '#0859C1', fontWeight: 700 }}>acolead.com</Link>
        </Box>
        <Button component={RouterLink} to="/request-a-demo" variant="contained" sx={{ mt: 2.5, bgcolor: '#0859C1', textTransform: 'none', fontWeight: 700, '&:hover': { bgcolor: '#06489D' } }}>Book a free demo</Button>
      </Container>

      <BookDemo />
    </Box>
    <Footer />
  </Box>
);

export default AboutPage;
