import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

const audiences = [
  {
    title: 'Builders & Developers',
    description: 'Keep project inventory, sales teams and channel partners moving in one view.',
    href: '/solutions/builders',
    screen: 'Project inventory',
    accent: '#0859C1',
    rows: [['Skyline One', '148 units', 'Available'], ['Gardenia', '62 units', 'Active'], ['Lakeview', '24 units', 'Booked']],
  },
  {
    title: 'Channel Partner Agencies',
    description: 'Capture builder enquiries, follow up with buyers and track brokerage invoices.',
    href: '/solutions/channel-partners',
    screen: 'Partner lead board',
    accent: '#3176CC',
    rows: [['New enquiries', '12', 'Today'], ['Follow-ups', '08', 'Due'], ['Invoices', '05', 'Pending']],
  },
  {
    title: 'Mandate Companies',
    description: 'Run multiple builder mandates with a clear pipeline and report for each project.',
    href: '/solutions/mandate-companies',
    screen: 'Mandate performance',
    accent: '#4A70B8',
    rows: [['Skyline Realty', '84 leads', 'On track'], ['Orchid Group', '56 leads', 'Review'], ['Northstar', '39 leads', 'On track']],
  },
  {
    title: 'Brokers & Resale',
    description: 'Connect seller listings with buyer requirements from enquiry through closure.',
    href: '/solutions/resale',
    screen: 'Buyer–property matches',
    accent: '#2E7D9A',
    rows: [['2 BHK · Baner', 'Priya S.', 'Strong match'], ['3 BHK · Wakad', 'Rahul M.', 'Good match'], ['1 BHK · Kothrud', 'Anita R.', 'New match']],
  },
];

const ProductPreview = ({ audience }) => (
  <Box role="img" aria-label={`${audience.screen} product interface preview`} sx={{ height: { xs: 158, sm: 174 }, p: 1.25, bgcolor: '#F4F8FD', borderBottom: '1px solid #E6EDF5' }}>
    <Box sx={{ height: '100%', p: 1.15, borderRadius: 1.8, bgcolor: '#fff', border: '1px solid #E2EAF3', boxShadow: '0 5px 16px rgba(25,52,84,.08)' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
        <Box>
          <Typography sx={{ color: '#26374F', fontSize: 10, fontWeight: 800 }}>{audience.screen}</Typography>
          <Typography sx={{ color: '#8895A7', fontSize: 8 }}>AcoLead · Overview</Typography>
        </Box>
        <Box sx={{ width: 20, height: 20, borderRadius: '50%', bgcolor: '#E1F0FD', border: '3px solid #fff', boxShadow: '0 1px 5px rgba(8,89,193,.25)' }} />
      </Box>
      <Box sx={{ display: 'grid', gap: .65 }}>
        {audience.rows.map(([label, value, state], index) => (
          <Box key={label} sx={{ px: .9, py: .65, display: 'grid', gridTemplateColumns: '1.2fr .8fr .8fr', gap: .5, alignItems: 'center', border: '1px solid #EDF1F6', borderRadius: 1.1, bgcolor: index === 0 ? '#FBFDFF' : '#fff' }}>
            <Typography noWrap sx={{ color: '#35465D', fontSize: 8, fontWeight: 700 }}>{label}</Typography>
            <Typography noWrap sx={{ color: '#738196', fontSize: 8 }}>{value}</Typography>
            <Box sx={{ justifySelf: 'end', px: .55, py: .25, borderRadius: 3, bgcolor: index === 1 ? '#FFF2D8' : '#E6F4EA', color: index === 1 ? '#8A6514' : '#246B38', fontSize: 7, fontWeight: 700, whiteSpace: 'nowrap' }}>{state}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);

const AudienceSolutions = () => (
  <Box component="section" aria-labelledby="built-for-title" sx={{ py: { xs: 6, md: 8 }, bgcolor: '#fff' }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: { xs: 3.5, md: 5 } }}>
        <Typography component="h2" id="built-for-title" sx={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, color: '#101C2E', fontSize: { xs: 31, md: 40 }, letterSpacing: '-.035em' }}>
          Built for How <Box component="span" sx={{ color: '#0859C1' }}>You Sell</Box>
        </Typography>
        <Box sx={{ width: 48, height: 4, borderRadius: 2, bgcolor: '#3B9D1D', mx: 'auto', mt: 1.7 }} />
      </Box>
      <Grid container spacing={{ xs: 1.5, md: 2.2 }}>
        {audiences.map((audience) => (
          <Grid item xs={12} sm={6} md={3} key={audience.title}>
            <Box component="a" href={audience.href} sx={{ height: '100%', minHeight: 325, display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: 3, bgcolor: '#FFFAFA', border: '1px solid #E7EDF5', textDecoration: 'none', color: 'inherit', transition: 'transform .2s ease, box-shadow .2s ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 15px 32px rgba(8,89,193,.12)' } }}>
              <ProductPreview audience={audience} />
              <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, p: { xs: 1.8, md: 2 } }}>
                <Typography sx={{ color: audience.accent, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 16, lineHeight: 1.3, fontWeight: 800, mb: .8 }}>{audience.title}</Typography>
                <Typography sx={{ color: '#596A80', fontSize: 13, lineHeight: 1.55, flex: 1 }}>{audience.description}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: .5, color: '#0859C1', fontSize: 12, fontWeight: 800, mt: 1.5 }}>
                  Explore solution <ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default AudienceSolutions;
