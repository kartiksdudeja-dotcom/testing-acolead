import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Breadcrumbs, Box, Button, Chip, Container, Link, Typography } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import BookDemo from './BookDemo';

const pages = {
  '/features': { title: 'Features Overview' },
  '/pricing': { title: 'Pricing', status: 'Decision Pending' },
  '/customers': { title: 'Customers' },
  '/about': { title: 'About' },
  '/switch-to-acolead': { title: 'Switch to AcoLead' },
  '/features/lead-capture': { title: 'Lead Capture & Sources' },
  '/features/lead-routing': { title: 'Smart Assignment & Response Timer' },
  '/features/pipeline': { title: 'Pipeline & CRM Boards' },
  '/features/sales-intelligence': { title: 'Sales Intelligence' },
  '/features/site-visits': { title: 'Site Visits & Bookings' },
  '/features/inventory': { title: 'Inventory & Property Matching' },
  '/features/whatsapp': { title: 'WhatsApp' },
  '/features/calling': { title: 'Calling, Call ID & Number Masking' },
  '/features/team-field': { title: 'Team, Attendance & Field Tracking' },
  '/features/mobile-app': { title: 'Mobile App for Android & iOS' },
  '/features/marketing-roi': { title: 'Marketing ROI' },
  '/features/website': { title: 'Maintenance-Free Website' },
  '/features/channel-partners': { title: 'Channel Partner Management' },
  '/features/partner-leads': { title: 'Partner Lead Integration' },
  '/features/invoice-board': { title: 'Invoice Board', status: 'To Confirm' },
  '/features/post-sales': { title: 'Post-Sales Payment Management', status: 'Launching Soon' },
  '/features/resale': { title: 'Resale Flow' },
  '/features/reports': { title: 'Reports & Automation' },
  '/ai/sales-agent': { title: 'AI Sales Agent' },
  '/ai/nova': { title: 'AcoLead Nova', status: 'Launching Soon' },
  '/ai/connector': { title: 'AI Connector (MCP)', status: 'Early Access' },
  '/zero-lead-breach': { title: 'Zero Lead Breach', status: 'Pilot' },
  '/solutions/builders': { title: 'For Builders & Developers' },
  '/solutions/channel-partners': { title: 'For Channel Partner Agencies' },
  '/solutions/mandate-companies': { title: 'For Mandate Companies' },
  '/solutions/resale': { title: 'For Brokers & Resale' },
};

const ComingSoonPage = () => {
  const { pathname } = useLocation();
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  const page = pages[normalizedPath];
  const segments = normalizedPath.split('/').filter(Boolean);
  const slug = segments[segments.length - 1] || '';
  const titleFromSlug = slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  const title =
    page?.title ||
    titleFromSlug ||
    'AcoLead';
  const isModule = normalizedPath.startsWith('/features/') && normalizedPath !== '/features';
  const isSolution = normalizedPath.startsWith('/solutions/');

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', '@media (max-width:1023.95px)': { pb: 8 } }}>
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          bgcolor: '#F8FBFF',
          py: { xs: 8, md: 12 },
        }}
      >
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          width: { xs: 220, md: 360 },
          height: { xs: 220, md: 360 },
          borderRadius: '50%',
          bgcolor: '#1D74DE',
          opacity: 0.08,
          top: { xs: -100, md: -150 },
          right: { xs: -90, md: -110 },
        }}
      />
      <Container maxWidth="md" sx={{ position: 'relative' }}>
        <Box
          sx={{
            maxWidth: 720,
            mx: 'auto',
            textAlign: 'center',
            bgcolor: '#FFFAFA',
            borderRadius: { xs: 3, md: 5 },
            border: '1px solid #E1F0FD',
            px: { xs: 3, md: 8 },
            py: { xs: 6, md: 9 },
            boxShadow: '0 24px 70px rgba(8, 89, 193, 0.08)',
          }}
        >
          <Typography
            component="p"
            sx={{
              color: '#0859C1',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              mb: 2,
            }}
          >
            AcoLead
          </Typography>
          {page?.status && (
            <Chip
              label={page.status}
              size="small"
              sx={{
                mb: 2,
                bgcolor: '#E1F0FD',
                color: '#0859C1',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontWeight: 700,
              }}
            />
          )}
          {(isModule || isSolution) && (
            <Breadcrumbs aria-label="Breadcrumb" sx={{ justifyContent: 'center', display: 'flex', mb: 2 }}>
              {isModule ? (
                <Link component={RouterLink} to="/features" underline="hover" color="inherit">
                  Features
                </Link>
              ) : (
                <Typography color="text.secondary">Solutions</Typography>
              )}
              <Typography color="text.primary">{title}</Typography>
            </Breadcrumbs>
          )}
          <Typography
            component="h1"
            sx={{
              color: '#000000',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: { xs: 36, md: 56 },
              fontWeight: 700,
              lineHeight: 1.15,
              mb: 2,
            }}
          >
            {title}
          </Typography>
          <Box
            aria-hidden="true"
            sx={{ width: 48, height: 4, borderRadius: 2, bgcolor: '#3B9D1D', mx: 'auto', mb: 3 }}
          />
          <Typography sx={{ color: '#000000', fontSize: { xs: 16, md: 18 }, lineHeight: 1.7, mb: 4 }}>
            This page is coming soon. In the meantime, see how AcoLead can help your real estate sales team.
          </Typography>
          <Button
            component={RouterLink}
            to="/request-a-demo"
            variant="contained"
            color="primary"
            sx={{ px: 3, py: 1.25, mr: 1, mb: { xs: 1, sm: 0 } }}
          >
            Book a Demo
          </Button>
          <Button
            component={RouterLink}
            to="/"
            variant="outlined"
            color="primary"
            sx={{ px: 3, py: 1.25 }}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
      </Box>
      <BookDemo />
      <Footer />
    </Box>
  );
};

export default ComingSoonPage;
