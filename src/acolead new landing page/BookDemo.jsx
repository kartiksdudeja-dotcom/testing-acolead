import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import Contact from './Contact';
import { pushTrackingEvent } from '../utils/tracking';

const BookDemo = React.forwardRef(({ formSectionRef, includeBudgetQuestion = false, includeActiveBookings = false, title, description, submitLabel }, ref) => (
  <Box component="section" id="demo" sx={{ bgcolor: '#F2F6FC', py: { xs: 6, md: 8 } }}>
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
        <Grid item xs={12} md={5}>
          <Box sx={{ pr: { md: 2 } }}>
            <Typography component="h2" sx={{ color: '#101C2E', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 32, md: 40 }, fontWeight: 800, letterSpacing: '-.035em', lineHeight: 1.16, mb: 1.8 }}>
              {title || 'Ready to Transform Your Real Estate Sales?'}
            </Typography>
            <Box sx={{ width: 48, height: 4, bgcolor: '#3B9D1D', borderRadius: 3, mb: 2 }} />
            <Typography sx={{ color: '#536277', fontSize: { xs: 15, md: 16 }, lineHeight: 1.65, mb: 2.2 }}>
              {description || 'See how AcoLead helps your team capture, manage and convert every opportunity. See it on your own leads in 20 minutes.'}
            </Typography>
            <Box sx={{ display: 'grid', gap: .7, mb: 2 }}>
              <Link href="tel:+919112614174" onClick={() => pushTrackingEvent('phone_click', { page_path: window.location.pathname })} underline="hover" sx={{ color: '#0859C1', fontWeight: 700, fontSize: 14 }}>+91 91126 14174</Link>
              <Link href="mailto:sales@coalitionify.com" underline="hover" sx={{ color: '#0859C1', fontWeight: 700, fontSize: 14 }}>sales@coalitionify.com</Link>
            </Box>
            <Typography sx={{ color: '#14243A', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 15, mb: 2.5 }}>
              Own Every Lead. Close Every Deal.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', p: 1.3, width: 'fit-content', borderRadius: 2, bgcolor: '#fff', border: '1px solid #E1E9F3' }}>
              <Box component="img" src="https://api.qrserver.com/v1/create-qr-code/?size=112x112&margin=1&data=https%3A%2F%2Fwww.acolead.com%2Frequest-a-demo" alt="QR code to open the AcoLead demo request page" sx={{ width: 72, height: 72, display: 'block' }} />
              <Typography sx={{ color: '#536277', fontSize: 12, lineHeight: 1.4, maxWidth: 125 }}>Scan to open the demo request form</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={7} ref={formSectionRef}>
          <Contact ref={ref} includeBudgetQuestion={includeBudgetQuestion} includeActiveBookings={includeActiveBookings} submitLabel={submitLabel} />
        </Grid>
      </Grid>
    </Container>
  </Box>
));

BookDemo.displayName = 'BookDemo';

export default BookDemo;
