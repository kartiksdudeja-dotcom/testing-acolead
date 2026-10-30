import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import ViewKanbanRoundedIcon from '@mui/icons-material/ViewKanbanRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

const edgeTiles = [
  { title: 'Lead Capture', description: 'Bring portal, Meta, website and walk-in enquiries into one place.', href: '/features/lead-capture', Icon: PersonAddAlt1RoundedIcon, tint: '#EAF4FF' },
  { title: 'Smart Assignment', description: 'Route every enquiry to the right salesperson and keep response times on track.', href: '/features/lead-routing', Icon: AssignmentTurnedInRoundedIcon, tint: '#F0EEFF' },
  { title: 'Pipeline & Boards', description: 'See each buyer’s progress from first enquiry through booking.', href: '/features/pipeline', Icon: ViewKanbanRoundedIcon, tint: '#EAF8F3' },
  { title: 'Sales Intelligence', description: 'Spot buyer intent, cooling leads and follow-up risks sooner.', href: '/features/sales-intelligence', Icon: QueryStatsRoundedIcon, tint: '#FFF3E8' },
  { title: 'Site Visits & Bookings', description: 'Schedule visits and keep booking updates on the buyer timeline.', href: '/features/site-visits', Icon: EventAvailableRoundedIcon, tint: '#EEF5FF' },
  { title: 'WhatsApp', description: 'Keep customer conversations and follow-ups connected to each lead.', href: '/features/whatsapp', Icon: ForumRoundedIcon, tint: '#E9F8F0' },
  { title: 'Mobile App', description: 'Give your sales team their leads, tasks and visits while in the field.', href: '/features/mobile-app', Icon: SmartphoneRoundedIcon, tint: '#F2EEFF' },
  { title: 'Marketing ROI', description: 'See which campaigns bring enquiries, visits and bookings.', href: '/features/marketing-roi', Icon: CampaignRoundedIcon, tint: '#FFF3EA' },
];

const KeyFeatures = () => (
  <Box component="section" aria-labelledby="acolead-edge-title" sx={{ width: '100%', bgcolor: '#F8FBFF', py: { xs: 6, md: 8 } }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: { xs: 3.5, md: 5 } }}>
        <Typography id="acolead-edge-title" component="h2" sx={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#101C2E', fontWeight: 800, fontSize: { xs: 31, md: 40 }, letterSpacing: '-.035em' }}>
          The AcoLead <Box component="span" sx={{ color: '#0859C1' }}>Edge</Box>
        </Typography>
        <Box sx={{ width: 48, height: 4, borderRadius: 2, bgcolor: '#3B9D1D', mx: 'auto', mt: 1.7 }} />
      </Box>
      <Grid container spacing={{ xs: 1.5, md: 2 }}>
        {edgeTiles.map(({ title, description, href, Icon, tint }) => (
          <Grid item xs={12} sm={6} md={3} key={title}>
            <Box component="a" href={href} sx={{ height: '100%', minHeight: { xs: 166, md: 192 }, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', p: { xs: 2, md: 2.3 }, borderRadius: 3, bgcolor: '#FFFAFA', border: '1px solid #E8EEF5', color: 'inherit', textDecoration: 'none', boxShadow: '0 4px 14px rgba(16,40,72,.045)', transition: 'transform .2s ease, box-shadow .2s ease, border-color .2s ease', '&:hover': { transform: 'translateY(-4px)', borderColor: '#B8D2F1', boxShadow: '0 14px 30px rgba(8,89,193,.11)', '& .edge-arrow': { opacity: 1, transform: 'translate(0,0)' } } }}>
              <Box sx={{ width: 58, height: 58, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: '#E1F0FD', boxShadow: 'inset 0 3px 5px rgba(255,255,255,.95), 0 7px 15px rgba(8,89,193,.13)', mb: 1.7 }}>
                <Box sx={{ width: 42, height: 42, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: tint, color: '#0859C1', boxShadow: '0 4px 8px rgba(8,89,193,.17), inset 0 2px 2px rgba(255,255,255,.8)' }}>
                  <Icon sx={{ fontSize: 25 }} />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 1 }}>
                <Typography sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 16, lineHeight: 1.3 }}>{title}</Typography>
                <ArrowOutwardRoundedIcon className="edge-arrow" sx={{ color: '#0859C1', fontSize: 18, opacity: { xs: 1, md: 0 }, transform: { xs: 'none', md: 'translate(-3px, 3px)' }, transition: 'all .2s ease', flex: '0 0 auto' }} />
              </Box>
              <Typography sx={{ color: '#596A80', fontSize: 13, lineHeight: 1.5, mt: .7 }}>{description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default KeyFeatures;
