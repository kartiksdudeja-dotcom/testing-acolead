import React from "react";
import { Container, Grid, Box, Typography, Divider, List, ListItem, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const HowItWorks = ({ data, data1, data2, data3, flag }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm", "xs"));
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box textAlign="center" py={3}>
            <Typography variant="h4" fontWeight={600}>
              How It Works
            </Typography>
          </Box>
        </Grid>
        {
          !flag && (
            <Grid item xs={12}>
              <Box display="flex" flexDirection="column" alignItems="center" border={'1px solid black'}>
                <Box
                  display="flex"
                  flexDirection={isMobile ? "column" : "row"}
                  justifyContent="space-between"
                  sx={{ minHeight: "150px", width: "100%", gap: 2, p: 1 }}
                >
                  <Box
                    flex={1}
                    p={isMobile ? 2 : 3}
                    textAlign="left"
                    sx={{ minWidth: 0 }}
                  >
                    <Typography variant="h6" fontWeight={600} mb={1}>
                      {data.title}
                    </Typography>
                    <List dense>
                      {data.details.map((item, index) => (
                        <ListItem key={index} sx={{ alignItems: "flex-start" }}>
                          <ListItemIcon sx={{ minWidth: 30, mt: 0.5 }}>
                            <CheckCircleIcon sx={{ color: "black", fontSize: 18 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{ variant: "body2" }}
                            sx={{ textAlign: "left", ml: 0.5 }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  <Divider
                    sx={{ bgcolor: "grey.400", height: isMobile ? '1px' : '145px', alignSelf: isMobile ? "stretch" : "center" }}
                    orientation={isMobile ? "horizontal" : "vertical"}
                    flexItem
                  />
                  <Box
                    flex={1}
                    p={isMobile ? 2 : 3}
                    textAlign="left"
                    sx={{ minWidth: 0 }}
                  >
                    <Typography variant="h6" fontWeight={400} mb={1} mt={isMobile ? 1 : 5.9}>
                      {data1.title}
                    </Typography>
                    <List dense>
                      {data1.details.map((item, index) => (
                        <ListItem key={index} sx={{ alignItems: "flex-start" }}>
                          <ListItemIcon sx={{ minWidth: 30, mt: 0.5 }}>
                            <CheckCircleIcon sx={{ color: "black", fontSize: 18 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{ variant: "body2" }}
                            sx={{ textAlign: "left", ml: 0.5 }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
              </Box>
            </Grid>

          )
        }

        <Grid container item xs={12} spacing={3} alignItems="stretch" justifyContent="space-between" mt={0.2}>
          <Grid item xs={12} md={6}>
            <Box p={3} height="80%" border={'1px solid black'} mb={isMobile ? 3 : 0}>
              <Typography variant="h6" fontWeight={600} mb={1}>
                {data2.title}
              </Typography>
              <List dense>
                {data2.details.map((item, index) => (
                  <ListItem key={index} sx={{ alignItems: "flex-start" }}>
                    <ListItemIcon sx={{ minWidth: 30, mt: 0.5 }}>
                      <CheckCircleIcon sx={{ color: "black", fontSize: 18 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{ variant: "body2" }}
                      sx={{ textAlign: "left", ml: 0.5 }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
          {/* <Divider orientation="vertical" flexItem sx={{ bgcolor: "grey.400", height: "60%", alignSelf: "center" }} /> */}
          <Grid item xs={12} md={6}>
            <Box p={3} height="80%" border={'1px solid black'}>
              <Typography variant="h6" fontWeight={600} mb={1}>
                {data3.title}
              </Typography>
              <List dense sx={{ mb: 4 }}>
                {data3.details.map((item, index) => (
                  <ListItem key={index} sx={{ alignItems: "flex-start" }}>
                    <ListItemIcon sx={{ minWidth: 30, mt: 0.5 }}>
                      <CheckCircleIcon sx={{ color: "black", fontSize: 18 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{ variant: "body2" }}
                      sx={{ textAlign: "left", ml: 0.5 }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HowItWorks;
