import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import BookDemo from './BookDemo';

const SiteLayout = ({ children }) => (
  <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', '@media (max-width:1023.95px)': { pb: 8 } }}>
    <Header />
    <Box component="main" sx={{ flex: 1 }}>{children}</Box>
    <BookDemo />
    <Footer />
  </Box>
);

export default SiteLayout;
