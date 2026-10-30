import React from 'react';
import { Box, Button, Chip, Container, Grid, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import Header from './Header';
import Footer from './Footer';
import BookDemo from './BookDemo';

const comparisonRows = [
  ['Leads spread across tools', 'One CRM for portal, Meta, website and walk-in enquiries'],
  ['Follow-ups hard to track', 'A clear priority list for each salesperson'],
  ['Buyer history in chats and sheets', 'Calls, visits and conversations on the lead record'],
  ['Reports assembled manually', 'Pipeline and results visible by project'],
];

const migrationSteps = [
  ['Review your data', 'We’ll review your current CRM or spreadsheets, fields and lead sources.'],
  ['Map and prepare', 'Agree how your existing fields and records should map into AcoLead.'],
  ['Import with our team', 'Our team helps move your data into AcoLead at no migration charge.'],
  ['Check and get started', 'Review the imported records and prepare your team for the new workflow.'],
];

const PipelinePreview = () => (
  <Box sx={{ p: 1.5, borderRadius: 3, bgcolor: '#fff', border: '1px solid #DFE8F2', boxShadow: '0 18px 42px rgba(20,44,74,.12)' }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.2 }}>
      <Box><Typography sx={{ color: '#14243A', fontSize: 12, fontWeight: 800 }}>Buyer pipeline</Typography><Typography sx={{ color: '#7D8A9B', fontSize: 8 }}>Skyline Realty · S07 CRM board</Typography></Box>
      <Chip label="This month" size="small" sx={{ height: 20, fontSize: 8, bgcolor: '#F1F6FD', color: '#0859C1', fontWeight: 700 }} />
    </Box>
    <Grid container spacing={.8}>
      {[
        ['New', [['Priya Shah', '99acres · 3 BHK'], ['Rahul Mehta', 'Google · 1 BHK']]],
        ['Contacted', [['Anita Rao', 'WhatsApp · 2 BHK'], ['Kamal Joshi', 'Meta · 2 BHK']]],
        ['Site Visit', [['Neha Patil', 'Website · 3 BHK']]],
      ].map(([stage, leads]) => <Grid item xs={4} key={stage}><Box sx={{ p: .7, minHeight: 147, borderRadius: 1.7, bgcolor: '#F5F8FC' }}><Typography sx={{ color: '#536277', fontSize: 8, fontWeight: 800, mb: .7 }}>{stage}</Typography>{leads.map(([name, source]) => <Box key={name} sx={{ p: .65, mb: .55, borderRadius: 1.2, bgcolor: '#fff', border: '1px solid #E6EDF5' }}><Typography sx={{ color: '#26374F', fontSize: 8, fontWeight: 700 }}>{name}</Typography><Typography sx={{ color: '#8793A3', fontSize: 7 }}>{source}</Typography></Box>)}</Box></Grid>)}
    </Grid>
  </Box>
);

const ImportPreview = () => (
  <Box sx={{ p: 1.5, borderRadius: 3, bgcolor: '#fff', border: '1px solid #DFE8F2', boxShadow: '0 18px 42px rgba(20,44,74,.12)' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.3 }}>
      <Box sx={{ width: 34, height: 34, display: 'grid', placeItems: 'center', borderRadius: 1.5, bgcolor: '#E1F0FD', color: '#0859C1' }}><UploadFileRoundedIcon fontSize="small" /></Box>
      <Box><Typography sx={{ color: '#14243A', fontSize: 12, fontWeight: 800 }}>Import your leads</Typography><Typography sx={{ color: '#7D8A9B', fontSize: 8 }}>S04 · Field mapping preview</Typography></Box>
    </Box>
    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: .6, mb: .65 }}><Typography sx={{ color: '#8895A7', fontSize: 8, fontWeight: 700, px: .7 }}>YOUR FILE</Typography><Typography sx={{ color: '#8895A7', fontSize: 8, fontWeight: 700, px: .7 }}>ACOLead FIELD</Typography></Box>
    {['Name|Lead name', 'Mobile|Phone number', 'Source|Lead source', 'Project|Project'].map((row) => { const [from, to] = row.split('|'); return <Box key={from} sx={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: .5, mb: .6 }}><Box sx={{ p: .8, border: '1px solid #E6EDF5', borderRadius: 1.2, color: '#536277', fontSize: 9 }}>{from}</Box><Typography sx={{ color: '#0859C1', fontSize: 11 }}>→</Typography><Box sx={{ p: .8, border: '1px solid #BBD5F1', bgcolor: '#F7FBFF', borderRadius: 1.2, color: '#26374F', fontSize: 9 }}>{to}</Box></Box> })}
    <Box sx={{ mt: 1.2, display: 'flex', alignItems: 'center', gap: .6, color: '#0859C1', fontSize: 9, fontWeight: 700 }}><CheckCircleRoundedIcon sx={{ fontSize: 14 }} /> Review mappings before import</Box>
  </Box>
);

const SwitchToAcoLeadPage = () => (
  <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', '@media (max-width:1023.95px)': { pb: 8 } }}>
    <Header />
    <Box component="main" sx={{ flex: 1 }}>
      <Box sx={{ bgcolor: '#F2F6FC', py: { xs: 6, md: 8 }, borderBottom: '1px solid #E1E9F3' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography sx={{ color: '#0859C1', fontSize: 11, fontWeight: 800, letterSpacing: '.09em', textTransform: 'uppercase', mb: 1.3 }}>Switch to AcoLead</Typography>
              <Typography component="h1" sx={{ color: '#101C2E', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 38, md: 52 }, fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.1, mb: 1.7 }}>Outgrown Your CRM?</Typography>
              <Box sx={{ width: 48, height: 4, bgcolor: '#3B9D1D', borderRadius: 3, mb: 1.8 }} />
              <Typography sx={{ color: '#536277', fontSize: 17, lineHeight: 1.6, mb: 2.3 }}>Switch your real estate sales team to AcoLead. Keep your lead history and get free data migration support from our team.</Typography>
              <Button component={RouterLink} to="/request-a-demo" variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={{ bgcolor: '#0859C1', px: 2.4, py: 1.2, borderRadius: 2, fontWeight: 700, textTransform: 'none', '&:hover': { bgcolor: '#06489D' } }}>Plan your switch</Button>
            </Grid>
            <Grid item xs={12} md={6}><PipelinePreview /></Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 25, md: 30 }, fontWeight: 800, mb: .7 }}>Why teams switch</Typography>
        <Typography sx={{ color: '#596A80', fontSize: 14, mb: 2.5 }}>Bring the everyday work of real estate sales into one place.</Typography>
        <Grid container spacing={1.5}>
          {[
            ['One lead history', 'Keep source, conversations and follow-up activity together on each lead.'],
            ['Clear daily priorities', 'Help salespeople see who needs a call and help managers spot stalled follow-ups.'],
            ['Project-level visibility', 'See enquiries and sales progress in the context of each real estate project.'],
          ].map(([title, description]) => <Grid item xs={12} md={4} key={title}><Box sx={{ height: '100%', p: 2, border: '1px solid #E1E9F3', borderRadius: 2.5, bgcolor: '#fff' }}><Typography sx={{ color: '#0859C1', fontSize: 14, fontWeight: 800, mb: .6 }}>{title}</Typography><Typography sx={{ color: '#596A80', fontSize: 12, lineHeight: 1.6 }}>{description}</Typography></Box></Grid>)}
        </Grid>
      </Container>

      <Box sx={{ py: { xs: 5, md: 7 }, bgcolor: '#F8FBFF' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
            <Grid item xs={12} md={6}><ImportPreview /></Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ color: '#0859C1', fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', mb: 1 }}>Free data migration</Typography>
              <Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 26, md: 32 }, fontWeight: 800, lineHeight: 1.2, mb: 2 }}>Move your data with a clear plan.</Typography>
              {migrationSteps.map(([title, description], index) => <Box key={title} sx={{ display: 'flex', gap: 1.2, mb: 1.5 }}><Box sx={{ flex: '0 0 28px', width: 28, height: 28, display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: '#E1F0FD', color: '#0859C1', fontSize: 12, fontWeight: 800 }}>{index + 1}</Box><Box><Typography sx={{ color: '#14243A', fontSize: 13, fontWeight: 800, mb: .25 }}>{title}</Typography><Typography sx={{ color: '#596A80', fontSize: 12, lineHeight: 1.55 }}>{description}</Typography></Box></Box>)}
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 5, md: 6 } }}>
        <Container maxWidth="lg">
          <Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 24, md: 29 }, fontWeight: 800, mb: 2.3 }}>What changes with AcoLead</Typography>
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} md={6}><Box sx={{ height: '100%', p: 2.2, bgcolor: '#FFFAFA', border: '1px solid #F4D8D5', borderRadius: 2.5 }}><Typography sx={{ color: '#FD4538', fontWeight: 800, fontSize: 15, mb: 1.3 }}>Your current setup</Typography>{comparisonRows.map(([before]) => <Typography key={before} sx={{ color: '#596A80', fontSize: 13, py: .9, borderTop: '1px solid #F2E5E3' }}>{before}</Typography>)}</Box></Grid>
            <Grid item xs={12} md={6}><Box sx={{ height: '100%', p: 2.2, bgcolor: '#F5F9FE', border: '1px solid #D5E5F7', borderRadius: 2.5 }}><Typography sx={{ color: '#0859C1', fontWeight: 800, fontSize: 15, mb: 1.3 }}>With AcoLead</Typography>{comparisonRows.map(([, after]) => <Typography key={after} sx={{ color: '#26374F', fontSize: 13, py: .9, borderTop: '1px solid #E2EBF5' }}>{after}</Typography>)}</Box></Grid>
          </Grid>
        </Container>
      </Box>
      <BookDemo />
    </Box>
    <Footer />
  </Box>
);

export default SwitchToAcoLeadPage;
