import React from "react";
import { Grid, Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme, keyframes } from "@mui/material/styles";
import Contact from "./Contact";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const BookDemo = React.forwardRef(({ formSectionRef }, ref) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 5,
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        maxWidth="lg"
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            animation: `${slideInLeft} 0.8s ease forwards`,
          }}
        >
          <Box p={isMobile ? 2 : 0}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Smarter{" "}
              <Box component="span" sx={{ color: "#1677F7" }}>
                Lead Management
              </Box>{" "}
              Starts Here
            </Typography>

            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Book a personalized AcoLead demo and see how we simplify, secure,
              and supercharge your sales workflows.
            </Typography>

            <Box mt={4}>
              <Typography variant="subtitle1" gutterBottom>
                How to automate lead routing and follow-ups
              </Typography>

              <Typography variant="body1" gutterBottom>
                🔹 Instant WhatsApp & call-based customer engagement
              </Typography>

              <Typography variant="body1" gutterBottom>
                🔹 lead masking and caller identification
              </Typography>

              <Typography variant="body1" gutterBottom>
                🔹 How AcoLead Helps Teams Improve Lead Management
              </Typography>

              <Typography variant="body1">
                🔹 Mobile-first lead management for field teams
              </Typography>
            </Box>
          </Box>
        </Grid>

       <Grid
  item
  xs={12}
  md={6}
  ref={formSectionRef}
>
  <Box
    sx={{
      px: { xs: 1, md: 0 },
    }}
  >
    <Contact ref={ref} />
  </Box>
</Grid>
      </Grid>
    </Box>
  );
});

export default BookDemo;