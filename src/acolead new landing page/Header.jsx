import {
  Box,
  Grid,
  Stack,
  Button,
  IconButton,
  Drawer,
  useMediaQuery,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Divider,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../assets/acolead-crm.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { APP_URLS } from "../utils";

function Header({ scrollToSection, handleScrollToForm, country, setCountry }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const countries = [
    { code: "IN", label: "India", icon: "🇮🇳" },
    { code: "US", label: "United States", icon: "🇺🇸" },
  ];
  const navLinks = [
    { label: "Home", to: "home" },
    { label: "About Us", to: "about" },
    { label: "Features", to: "feature" },
    // { label: "Insights", to: "insights" },
    // { label: 'Pricing', to: 'plans' },
  ];
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={1000}
      display="flex"
      justifyContent="center"
      width="100%"
      // mt={3}
      bgcolor={"white"}
      height={isMobile ? 60 : 80}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: isMobile ? 1 : 1 }}
        maxWidth="xl"
        ml={isMobile ? 0 : 3}
        mr={3}
      >
        {isMobile ? (
          <>
            <Grid item xs={6}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                sx={{ cursor: "pointer" }}
                onClick={handleNavigate}
              >
                <img
                  src={logo}
                  alt="AcoLead Logo"
                  height={28}
                  style={{ cursor: "pointer" }}
                />

                <Box
                  component="a"
                  href={APP_URLS.coalitionifyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    ml: isMobile ? 2 : 4,
                    mt: 0.5,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    "&:hover .brand-name": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: isMobile ? "11px" : "14px",
                      color: "#94A3B8",
                      fontStyle: "italic",

                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    By
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: isMobile ? "11px" : "14px",
                      lineHeight: 1,
                    }}
                  >
                    •
                  </Typography>

                  <Typography
                    className="brand-name"
                    sx={{
                      fontSize: isMobile ? "12px" : "13px",
                      color: "#334155",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    Coalitionify Innovate
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="flex-end">
              <IconButton
                onClick={toggleDrawer}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  bgcolor: "#1677F7",
                  color: "#ffffff",
                  "&:hover": {
                    bgcolor: "#125fcc",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </>
        ) : (
          <>
            <Grid item md={2}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                sx={{ cursor: "pointer" }}
                onClick={handleNavigate}
              >
                <img
                  src={logo}
                  alt="Colitionify Logo"
                  height={40}
                  style={{ cursor: "pointer" }}
                  onClick={handleNavigate}
                />
                <Box
                  component="a"
                  href={APP_URLS.coalitionifyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: isMobile ? "4px" : "8px",
                    ml: isMobile ? 2 : 4,
                    mt: isMobile ? 0.5 : 0.5,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    "&:hover .brand-name": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: isMobile ? "10px" : "14px",
                      color: "#94A3B8",
                      fontStyle: "italic",
                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    By
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: isMobile ? "10px" : "14px",
                      lineHeight: 1,
                    }}
                  >
                    •
                  </Typography>

                  <Typography
                    className="brand-name"
                    sx={{
                      fontSize: isMobile ? "10px" : "13px",
                      color: "#334155",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    Coalitionify Innovate
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} display="flex" justifyContent="center">
              <Stack direction="row" gap={3}>
                {navLinks.map(({ label, to }) => (
                  <Button
                    key={label}
                    color="inherit"
                    sx={{
                      textTransform: "none",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      minWidth: "auto",
                    }}
                    onClick={() => {
                      scrollToSection(to);
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </Stack>
            </Grid>
            <Grid
              item
              md={4}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              {/* Book a Demo Button */}
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: "#1677F7",
                  color: "white",
                  textTransform: "none",
                  fontSize: "0.9rem",
                  minWidth: "auto",
                  px: 2,
                  fontWeight: "bold",
                }}
                onClick={handleScrollToForm}
              >
                Book a Demo
              </Button>

              {/* Free Trial Button */}
              {/* <Button
                                variant="outlined"
                                target="_blank"
                                href="https://app.crm.acolead.com/"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    bgcolor: '#1677F7',
                                    color: 'white',
                                    textTransform: 'none',
                                    fontSize: '0.9rem',
                                    minWidth: 'auto',
                                    px: 2,
                                    fontWeight: 'bold',
                                }}
                            >
                                Free Trial
                            </Button> */}

              <Select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                variant="outlined"
                size="small"
                sx={{
                  ml: 2,
                  fontWeight: "bold",
                  bgcolor: "#fff",
                  borderRadius: 2,
                  minWidth: 100,
                  px: 1.5,
                }}
                displayEmpty
                renderValue={(selected) => {
                  const selectedCountry = countries.find(
                    (c) => c.code === selected,
                  );
                  return (
                    <Box display="flex" alignItems="center">
                      <Typography sx={{ mr: 1 }}>
                        {selectedCountry?.icon}
                      </Typography>
                      <Typography>{selectedCountry?.code}</Typography>
                    </Box>
                  );
                }}
              >
                {countries.map((c) => (
                  <MenuItem key={c.code} value={c.code}>
                    <Box display="flex" alignItems="center">
                      <Typography sx={{ mr: 1 }}>{c.icon}</Typography>
                      {c.label}
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </>
        )}
      </Grid>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, p: 2 }}>
          <img
            src={logo}
            alt="Colitionify Logo"
            height={40}
            onClick={handleNavigate}
            style={{ cursor: "pointer" }}
          />
          <List sx={{ mt: 2 }}>
            {navLinks.map(({ label, to }) => (
              <ListItem key={label} disablePadding>
                <ListItemButton
                  onClick={() => {
                    toggleDrawer();
                    scrollToSection(to);
                  }}
                >
                  <Typography>{label}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
          <Box display="flex" flexDirection="column" gap={1.5} maxWidth={120}>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: "#1677F7",
                color: "#fff",
                textTransform: "none",
                borderRadius: "999px",
                fontWeight: 700,
                px: 4,
                py: 1.4,
                fontSize: "16px",
                whiteSpace: "nowrap",
                width: "100%",
                minWidth: "220px",
                "&:hover": { bgcolor: "#125fcc" },
              }}
              onClick={() => {
                toggleDrawer();
                handleScrollToForm();
              }}
            >
              Book a Demo
            </Button>

            {/* <Button
                            variant="outlined"
                            target="_blank"
                            href="https://app.crm.acolead.com/"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                bgcolor: '#1677F7',
                                color: 'white',
                                textTransform: 'none',
                                fontSize: '0.9rem',
                                minWidth: 'auto',
                                px: 2,
                                fontWeight: 'bold',
                            }}
                        >
                            Free Trial
                        </Button> */}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Header;
