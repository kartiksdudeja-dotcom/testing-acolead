import React from 'react';
import { Box, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import iconsimg from './images/icons.webp';
import CommanSvg from './icons/CommanSvg';
import EmpowermentIcon from './icons/EmpowermentIcon';
import Innovation from './icons/Innovation';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const listContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const missionPoints = [
  {
    text: 'Product-Led Efficiency',
    subtext: 'Build cloud-first tools that automate daily tasks,helping teams focus on growth.',
    icon: <CommanSvg />,
  },
  {
    text: 'Cutting-Edge, Cost-Effective',
    subtext: 'Deliver AI-powered, enterprise-grade solutions at accessible prices.',
    icon: <CommanSvg />,
  },
  {
    text: 'Widespread Empowerment',
    subtext: 'Offer broad regional reach, multilingual support, and scalable technology for businesses of all sizes and locations.',
    icon: <EmpowermentIcon />,
  },
  {
    text: 'Continuous Innovation & Partnership',
    subtext: 'Co-create with customers and partners to ensure secure, future-ready solutions.',
    icon: <Innovation />,
  },
];

const Mission = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{ width: '100%', bgcolor: '#E0EDFF33', mt: 7 }}>
      <Box
        sx={{
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto',
          py: { xs: 2, sm: 2 },
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ ml: { xs: 0, sm: 2 } }} p={isMobile ? 2 : 0}>
              <Typography
                variant={isMobile ? "h6" : "h4"}
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  '&::after': {
                    content: '""',
                    display: 'block',
                    width: 48,
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: '#3B9D1D',
                    mt: 2,
                  },
                }}
              >
                Mission
              </Typography>
            
              {/* <Stack spacing={3}>
                {missionPoints.map(({ text, subtext, icon }, index) => (
                  <Box
                    key={index}
                    sx={{ display: 'flex', alignItems: 'flex-start' }}
                  >
                    <Box sx={{ mt: '3px' }}>{icon}</Box>
                    <Stack spacing={0.5} sx={{ ml: 2 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {text}
                      </Typography>

                      <Typography variant="body2" sx={{ color: '#555', textAlign: 'justify' }}>
                        {subtext}
                      </Typography>
                    </Stack>
                  </Box>
                ))}
              </Stack> */}

              <MotionBox
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                <Stack spacing={3}>
                  {missionPoints.map(({ text, subtext, icon }, index) => (
                    <MotionBox
                      key={index}
                      variants={itemVariants}
                      sx={{ display: 'flex', alignItems: 'flex-start' }}
                    >
                      <Box sx={{ mt: '3px' }}>{icon}</Box>
                      <Stack spacing={0.5} sx={{ ml: 2 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                          {text}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: '#555', textAlign: 'justify' }}
                        >
                          {subtext}
                        </Typography>
                      </Stack>
                    </MotionBox>
                  ))}
                </Stack>
              </MotionBox>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={iconsimg}
              alt="Icons"
              sx={{
                width: '100%',
                maxWidth: 500,
                height: 'auto',
                display: 'block',
                mx: 'auto',
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Mission;
