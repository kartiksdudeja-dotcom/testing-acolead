import React from 'react';
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link as RouterLink } from 'react-router-dom';
import { pushTrackingEvent } from '../utils/tracking';

const SiteFloatingActions = () => (
  <Box
    component="aside"
    aria-label="Contact AcoLead"
    sx={{
      position: 'fixed',
      zIndex: 1300,
      left: { xs: 0, md: 'auto' },
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      width: '100%',
      p: 1.25,
      bgcolor: '#FFFFFF',
      borderTop: '1px solid #E1F0FD',
      '@media (min-width:1024px)': {
        left: 'auto',
        width: 'auto',
        p: 0,
        bgcolor: 'transparent',
        borderTop: 0,
      },
    }}
  >
    <Button
      component={RouterLink}
      to="/demo"
      variant="contained"
      color="primary"
      sx={{
        display: 'inline-flex',
        flex: 1,
        minHeight: 46,
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        '@media (min-width:1024px)': { display: 'none' },
      }}
    >
      Book a Demo
    </Button>
    <Tooltip title="Chat with AcoLead on WhatsApp">
      <IconButton
        component="a"
        href="https://api.whatsapp.com/send?phone=919112614174"
        onClick={() => pushTrackingEvent('whatsapp_click', { page_path: window.location.pathname })}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AcoLead on WhatsApp"
        sx={{
          width: 46,
          height: 46,
          color: '#FFFFFF',
          bgcolor: '#0859C1',
          boxShadow: '0 8px 24px rgba(8, 89, 193, 0.25)',
          '&:hover': { bgcolor: '#06489D' },
          '@media (min-width:1024px)': { width: 58, height: 58 },
        }}
      >
        <WhatsAppIcon />
      </IconButton>
    </Tooltip>
  </Box>
);

export default SiteFloatingActions;
