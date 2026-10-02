import React from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';

const SalesIntelligence = () => (
  <Box
    component="section"
    sx={{
      py: { xs: 7, md: 10 },
      backgroundColor: '#F7FAFF',
      borderTop: '1px solid #E8EEF8',
      borderBottom: '1px solid #E8EEF8',
    }}
  >
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) minmax(0, 1fr)' },
          alignItems: 'center',
          gap: { xs: 4, md: 7 },
        }}
      >
        <Paper
          elevation={0}
          sx={{
            order: { xs: 2, md: 1 },
            overflow: 'hidden',
            aspectRatio: { xs: '16 / 10', md: '4 / 3' },
            borderRadius: 3,
            border: '1px solid #DCE7F6',
            backgroundColor: '#EAF2FF',
            boxShadow: '0 18px 44px rgba(24, 75, 145, 0.12)',
          }}
        >
          <Box
            component="video"
            src="/loop 2.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="AcoLead Sales Intelligence identifying leads at risk"
            sx={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain' }}
          >
            Your browser does not support video playback.
          </Box>
        </Paper>

        <Box sx={{ order: { xs: 1, md: 2 } }}>
           <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      px: 2,
                      py: 0.6,
                      borderRadius: '50px',
                      backgroundColor: '#EFF6FF',
                      border: '1px solid #BFDBFE',
                      mb: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: '#1677F7',
                        boxShadow: '0 0 8px #1677F7',
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#1D4ED8',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        fontSize: '0.75rem',
                      }}
                    >
                      AcoLead Sales Intelligence
                    </Typography>
                  </Box>
                  
          <Typography
            component="h2"
            sx={{
              color: '#101828',
              fontSize: { xs: '2rem', md: '2.65rem' },
              fontWeight: 750,
              lineHeight: 1.12,
              mb: 2.5,
            }}
          >
            Your best leads don’t always say No
          </Typography>
          <Typography sx={{ color: '#475467', fontSize: { xs: '0.98rem', md: '1.05rem' }, lineHeight: 1.8, mb: 2 }}>
            AcoLead Sales Intelligence goes beyond lead scoring. It identifies which leads are{' '}
            <Box component="strong" sx={{ color: '#1D2939' }}>Cold, Warm, Hot, or Ready to Close</Box>, detects when valuable opportunities are{' '}
            <Box component="strong" sx={{ color: '#1D2939' }}>Ignored, Cooling, or becoming At Risk</Box>, and turns those signals into prioritized actions for your sales team.
          </Typography>
          <Typography sx={{ color: '#475467', fontSize: { xs: '0.98rem', md: '1.05rem' }, lineHeight: 1.8 }}>
            With <Box component="strong" sx={{ color: '#1D2939' }}>My Day</Box> for salespeople and <Box component="strong" sx={{ color: '#1D2939' }}>Team Risk</Box> visibility for managers, AcoLead helps your team focus on the right opportunities before they slip away.
          </Typography>
        </Box>
      </Box>
    </Container>
  </Box>
  
);

export default SalesIntelligence;