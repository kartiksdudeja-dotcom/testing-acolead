import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const highlights = [
  {
    title: 'Intent score on every lead',
    description: 'Cold, Warm, Hot or Ready to Close.',
  },
  {
    title: 'Alerts before a hot lead goes cold',
    description: 'Ignored, Cooling and At Risk flags on the leads that matter.',
  },
  {
    title: 'My Day and Team Risk',
    description: 'Salespeople see today’s priorities. Managers spot unattended opportunities.',
  },
];

const SalesIntelligence = () => (
  <Box component="section" aria-labelledby="sales-intelligence-title" sx={{ bgcolor: '#071B3A', color: '#fff', py: { xs: 6, md: 7 }, overflow: 'hidden' }}>
    <Container maxWidth="lg">
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, alignItems: 'center', gap: { xs: 4, md: 7 } }}>
        <Box>
          <Typography sx={{ color: '#9DC2F6', fontSize: 11, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', mb: 1.8 }}>
            AcoLead Sales Intelligence
          </Typography>
          <Typography id="sales-intelligence-title" component="h2" sx={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: { xs: 34, sm: 40, md: 42 }, lineHeight: 1.14, letterSpacing: '-.035em', mb: 1.8 }}>
            Which of your 500 leads will buy this month?
          </Typography>
          <Typography sx={{ color: '#C4D2E7', fontSize: { xs: 15, md: 16 }, lineHeight: 1.58, maxWidth: 570, mb: 2.2 }}>
            Your best leads don’t always say no. Sometimes they just stop waiting. AcoLead scores buyer intent, flags leads that are cooling, and tells each salesperson who to call today.
          </Typography>
          <Button
            component="a"
            href="/features/sales-intelligence"
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{ bgcolor: '#fff', color: '#14243A', borderRadius: 2, px: 2.3, py: 1.15, fontWeight: 800, fontSize: 14, textTransform: 'none', boxShadow: 'none', '&:hover': { bgcolor: '#EAF2FC', boxShadow: 'none' } }}
          >
            How intent and risk work
          </Button>
        </Box>

        <Box sx={{ display: 'grid', gap: 1.35 }}>
          {highlights.map((item) => (
            <Box key={item.title} sx={{ px: { xs: 2, sm: 2.2 }, py: { xs: 1.75, sm: 1.9 }, borderRadius: 2.5, bgcolor: '#112D53', border: '1px solid #1C3B65', boxShadow: '0 8px 20px rgba(0,0,0,.08)' }}>
              <Typography sx={{ color: '#F6F9FF', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 15.5, lineHeight: 1.35, mb: .35 }}>
                {item.title}
              </Typography>
              <Typography sx={{ color: '#C4D2E7', fontSize: 13.5, lineHeight: 1.5 }}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
);

export default SalesIntelligence;
