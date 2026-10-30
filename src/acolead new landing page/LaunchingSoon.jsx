import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

const launches = [
  {
    title: 'Campaign Calendar',
    description: 'Plan upcoming sales campaigns and keep launch activity organized.',
    href: '/request-a-demo',
    Icon: CalendarMonthRoundedIcon,
    tint: '#EAF4FF',
  },
  {
    title: 'Post-Sales',
    description: 'Track instalments, loan disbursements and dues after booking.',
    href: '/features/post-sales',
    Icon: PaymentsRoundedIcon,
    tint: '#FFF2E6',
  },
  {
    title: 'AcoLead Nova',
    description: 'Talk to your CRM to update leads and get a quick team brief.',
    href: '/ai/nova',
    Icon: AutoAwesomeRoundedIcon,
    tint: '#F0EDFF',
  },
];

const LaunchingSoon = () => (
  <Box component="section" aria-labelledby="launching-soon-title" sx={{ py: { xs: 6, md: 8 }, bgcolor: '#F8FBFF' }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: { xs: 3.5, md: 5 } }}>
        <Typography component="h2" id="launching-soon-title" sx={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, color: '#101C2E', fontSize: { xs: 31, md: 40 }, letterSpacing: '-.035em' }}>
          Launching <Box component="span" sx={{ color: '#0859C1' }}>Soon</Box>
        </Typography>
        <Box sx={{ width: 48, height: 4, borderRadius: 2, bgcolor: '#3B9D1D', mx: 'auto', mt: 1.7 }} />
      </Box>
      <Grid container spacing={{ xs: 1.5, md: 2.2 }} justifyContent="center">
        {launches.map(({ title, description, href, Icon, tint }) => (
          <Grid item xs={12} sm={6} md={4} key={title}>
            <Box component="a" href={href} sx={{ height: '100%', minHeight: 220, display: 'flex', flexDirection: 'column', p: { xs: 2, md: 2.5 }, borderRadius: 3, bgcolor: '#FFFAFA', border: '1px solid #E7EDF5', color: 'inherit', textDecoration: 'none', boxShadow: '0 4px 14px rgba(16,40,72,.045)', transition: 'transform .2s ease, box-shadow .2s ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 14px 30px rgba(8,89,193,.11)' } }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1.7 }}>
                <Box sx={{ width: 62, height: 62, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: '#E1F0FD', boxShadow: 'inset 0 3px 5px rgba(255,255,255,.95), 0 7px 15px rgba(8,89,193,.13)' }}>
                  <Box sx={{ width: 44, height: 44, display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: tint, color: '#0859C1', boxShadow: '0 4px 9px rgba(8,89,193,.16), inset 0 2px 2px rgba(255,255,255,.9)' }}>
                    <Icon sx={{ fontSize: 27 }} />
                  </Box>
                </Box>
                <Box sx={{ px: 1, py: .5, borderRadius: 5, bgcolor: '#EAF2FC', color: '#0859C1', fontSize: 10, fontWeight: 800, letterSpacing: '.02em' }}>Launching Soon</Box>
              </Box>
              <Typography sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 17, fontWeight: 800, mb: .7 }}>{title}</Typography>
              <Typography sx={{ color: '#596A80', fontSize: 13, lineHeight: 1.55, flex: 1 }}>{description}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: .5, color: '#0859C1', fontSize: 12, fontWeight: 800, mt: 1.6 }}>
                {title === 'Campaign Calendar' ? 'Register interest' : 'Learn more'} <ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default LaunchingSoon;
