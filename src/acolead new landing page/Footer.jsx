import React from 'react';
import { Box, Container, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/acolead-crm.png';

const footerGroups = [
  {
    title: 'Product',
    links: [
      ['Features', '/features'],
      ['Sales Intelligence', '/features/sales-intelligence'],
      ['AI Sales Agent', '/ai/sales-agent'],
      ['Mobile app', '/features/mobile-app'],
    ],
  },
  {
    title: 'Solutions',
    links: [
      ['Builders and developers', '/solutions/builders'],
      ['Channel partner agencies', '/solutions/channel-partners'],
      ['Brokers and resale', '/solutions/resale'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['Book a demo', '/request-a-demo'],
      ['Privacy Policy', '/privacy-policy'],
      ['Terms of Use', '/terms-of-use'],
    ],
  },
];

const FooterLinks = ({ links }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.7 }}>
    {links.map(([label, href]) => (
      <Link key={href} component={RouterLink} to={href} underline="none" sx={{ color: '#536277', fontFamily: 'Poppins, sans-serif', fontSize: 12, lineHeight: 1.45, '&:hover': { color: '#0859C1', textDecoration: 'underline' } }}>
        {label}
      </Link>
    ))}
  </Box>
);

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: '#fff', color: '#14243A', borderTop: '1px solid #E1E9F3', pt: { xs: 3.5, md: 5 }, pb: 2 }}>
    <Container maxWidth="lg">
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: '1.3fr 1fr 1.1fr 1fr' }, columnGap: { xs: 2, sm: 3, md: 5 }, rowGap: { xs: 3, sm: 0 }, alignItems: 'start' }}>
        <Box sx={{ gridColumn: { xs: '1 / -1', sm: 'auto' }, pr: { sm: 2, md: 5 } }}>
          <Link component={RouterLink} to="/" aria-label="AcoLead home" sx={{ display: 'inline-flex', mb: 1 }}>
            <Box component="img" src={logo} alt="AcoLead" sx={{ width: 174, height: 'auto' }} />
          </Link>
          <Typography sx={{ color: '#536277', fontSize: 12, lineHeight: 1.55, maxWidth: 340 }}>
            AcoLead is an all-in-one real estate CRM built to simplify lead management, communication and sales operations.
          </Typography>
        </Box>
        {footerGroups.map((group) => (
          <Box key={group.title}>
            <Typography sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 13, mb: 1.1 }}>
              {group.title}
            </Typography>
            <FooterLinks links={group.links} />
          </Box>
        ))}
      </Box>
      <Box sx={{ mt: { xs: 3, md: 3.5 }, pt: 1.6, borderTop: '1px solid #E1E9F3' }}>
        <Typography sx={{ color: '#68778B', fontSize: 11.5, lineHeight: 1.5 }}>
          AcoLead is a product of Coalitionify Innovate Private Limited.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
