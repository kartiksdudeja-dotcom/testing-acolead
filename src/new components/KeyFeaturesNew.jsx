import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import FirstKey from './Custom Icons/FirstKey'
import Key from './Custom Icons/Key'
const features = [
  { title: 'Secure access', subtitle: 'Vendors and partners get secure access to submit data. No need for additional licenses for ERP, PLM, or CRM systems. Secure link to access the job.' },
  { title: 'Dynamic Form Builder', subtitle: 'Use AI powered form builder. Upload you form images, and process document, AcoFlow will build multisteps & ready to use forms.' },
  { title: 'Multi-User Workflows', subtitle: 'Collaborate with teams, clients, and stakeholders. Build simple to complex workflow in a minute. Try predefined templates for all your need in one click.' },
  { title: 'SDK Integration', subtitle: 'Connect seamlessly with any system your are using. Free integration support to onboard any system you want.' }
]

const KeyFeaturesNew = () => {
  return (
    <Box bgcolor="#1677F7" py={3} mt={7} position={'relative'} mb={7}>
        <Box position="absolute" top={0} left={0}>
        <FirstKey />
      </Box>
      <Box position="absolute" top={0} right={0}>
        <Key />
      </Box>
      <Typography
        variant="h2"
        align="center"
        sx={{
          fontWeight: 800,
          letterSpacing: '-0.06em',
          lineHeight: 1,
          color: '#0F172A',
          fontSize: { xs: '2.4rem', md: '4rem' },
        }}
      >
        Key{' '}
        <Box component="span" sx={{ color: '#1677F7' }}>
          Features
        </Box>
      </Typography>
      <Box display="flex" justifyContent="center">
        <Grid container justifyContent="center" maxWidth="lg">
          {features.map((feature, index) => (
            <Grid item xs={6} sm={6} md={3} key={index}>
              <Box textAlign="left" p={3}>
                <Typography variant="h6" color="white" fontWeight={700}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="white" mt={1}>
                  {feature.subtitle}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default KeyFeaturesNew
