import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import FirstKey from '../Custom Icons/FirstKey'
import Key from '../Custom Icons/Key'
const Challenges = ({keychallenges}) => {
  return (
    <Box bgcolor="#1677F7" py={3} mt={7} position={'relative'} mb={7}>
        <Box position="absolute" top={0} left={0}>
        <FirstKey />
      </Box>
      <Box position="absolute" top={0} right={0}>
        <Key />
      </Box>
      <Typography variant="h4" align="center" color="white" sx={{ fontWeight:700}}>
        Key Challenges
      </Typography>
      <Box display="flex" justifyContent="center">
        <Grid container justifyContent="center" maxWidth="lg">
          {keychallenges.map((feature, index) => (
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

export default Challenges
