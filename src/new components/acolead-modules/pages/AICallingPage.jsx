import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Grid, Button, Stack, Chip, IconButton, Drawer, List, ListItem, ListItemButton, Divider, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import InsightsIcon from '@mui/icons-material/Insights';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import MenuIcon from '@mui/icons-material/Menu';

import acoleadLogo from '../../../assets/acolead-crm.png';
import Footer from '../../../acolead new landing page/Footer';
import bgImage from '../../../acolead new landing page/images/bg.png';
import aiCallingImage from "../../../assets/images/ai calling.jpg";
import { LICENSE_NAV_ITEMS } from "../constants";
import { APP_URLS } from '../../../utils';

const AICallingPage = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleScrollToForm = () => {
    navigate("/request-a-demo");
  };


  const productName = "AI_CALLING";

  const handleStartClick = () => {
    navigate(`/product/signup?product=${productName}`);
  };

  const handleBookDemoClick = () => {
    navigate("/request-a-demo");
  };

  const workflow = [
    {
      title: 'Launch intelligent outbound calls',
      text: 'Use AI guidance to start conversations with better accuracy and natural pacing.',
    },
    {
      title: 'Capture key moments automatically',
      text: 'Each call is summarized with outcome, notes, and next steps for your team.',
    },
    {
      title: 'Turn conversations into action',
      text: 'Route opportunities straight into the CRM so follow-ups happen without delay.',
    },
  ];

  const benefits = [
    'Reduce manual call handling and improve speed to response',
    'Give sales reps real-time summaries and next-best actions',
    'Create consistent follow-up workflows from every conversation',
    'Improve conversion visibility with call insights in the CRM',
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ borderBottom: '1px solid #eef4ff', bgcolor: '#fff', position: 'sticky', top: 0, zIndex: 1000 }}>
        <Box sx={{ maxWidth: 1400, mx: 'auto', px: { xs: 2, md: 4 }, py: 1.4, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Box
              onClick={() => navigate("/")}
              sx={{ cursor: "pointer" }}
            >
              <img
                src={acoleadLogo}
                alt="AcoLead"
                style={{
                  height: isMobile ? "25px" : "40px",
                  maxWidth: "100%",
                  width: "auto",
                }}
              />
            </Box>

            <Box
              component="a"
              href={APP_URLS.coalitionifyWebsite}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                ml: isMobile ? 2 : 4,
                mt: -0.4,
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


          {isMobile ? (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                width: 42,
                height: 42,
                borderRadius: 2,
                bgcolor: '#1677F7',
                color: '#fff',
                '&:hover': { bgcolor: '#125fcc' },
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={1} sx={{ flexGrow: 1, justifyContent: 'center' }}>
              {LICENSE_NAV_ITEMS.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  sx={{
                    minWidth: 'auto',
                    px: 1.5,
                    color: item.path === '/modules/ai-calling' ? '#1677F7' : '#334155',
                    fontWeight: item.path === '/modules/ai-calling' ? 700 : 600,
                    textTransform: 'none',
                    borderRadius: '999px',
                    '&:hover': { bgcolor: '#f7fbff' },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          )}

          {!isMobile && <Box sx={{ width: 40 }} />}
        </Box>
      </Box>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Box onClick={() => { setDrawerOpen(false); navigate('/'); }} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', mb: 2 }}>
            <img src={acoleadLogo} alt="AcoLead" style={{ height: '40px', maxWidth: '100%', width: 'auto' }} />
          </Box>

          <List>
            {LICENSE_NAV_ITEMS.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  onClick={() => {
                    setDrawerOpen(false);
                    navigate(item.path);
                  }}
                  sx={{ borderRadius: 2, px: 1.5, py: 1 }}
                >
                  <Typography sx={{ fontWeight: item.path === '/modules/ai-calling' ? 700 : 500, color: '#0f172a' }}>
                    {item.label}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={() => {
              setDrawerOpen(false);
              navigate('/request-a-demo');
            }}
            sx={{
              bgcolor: '#1677F7',
              color: '#fff',
              textTransform: 'none',
              borderRadius: '999px',
              fontWeight: 700,
              width: '100%',
              '&:hover': { bgcolor: '#125fcc' },
            }}
          >
            Book a Demo
          </Button>
        </Box>
      </Drawer>

      <Box sx={{ flex: 1, px: { xs: 2.5, sm: 3, md: 10 }, py: { xs: 5, md: 8 }, backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right center', backgroundColor: '#f8fbff' }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" sx={{ maxWidth: 1400, mx: 'auto' }}>
          <Grid item xs={12} md={7}>
            <Stack spacing={2.5}>
              <Chip label="AI calling for modern sales" sx={{ alignSelf: 'flex-start', bgcolor: '#fff', border: '1px solid #dfefff', color: '#1677F7', fontWeight: 700, px: 1.5, py: 0.5, borderRadius: '999px' }} />

              <Typography sx={{ fontSize: { xs: 30, sm: 38, md: 50 }, fontWeight: 800, lineHeight: 1.15, color: '#111827' }}>
                Supercharge your sales team with{' '}
                <Box component="span" sx={{ color: '#5C6BC0' }}>
                  AI calling
                </Box>
              </Typography>

              <Typography sx={{ fontSize: { xs: 15, sm: 16, md: 18 }, color: '#4b5563', lineHeight: 1.8, maxWidth: 650 }}>
                Give your team real-time call support, accurate summaries, and faster follow-up actions so every conversation turns into momentum.
              </Typography>

              <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={handleStartClick} sx={{ bgcolor: '#5C6BC0', px: 4, py: 1.4, borderRadius: '999px', textTransform: 'none', fontWeight: 700, fontSize: { xs: 14, sm: 15, md: 16 }, width: { xs: '100%', sm: 'fit-content' }, '&:hover': { bgcolor: '#4b5aa5' } }}>
                Start with AI Calling
              </Button>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ pt: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#0f172a' }}>
                  <AutoAwesomeIcon sx={{ color: '#5C6BC0' }} />
                  <Typography fontWeight={600}>AI-guided calls</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#0f172a' }}>
                  <InsightsIcon sx={{ color: '#1677F7' }} />
                  <Typography fontWeight={600}>Smarter insights</Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 24px 70px rgba(15, 23, 42, 0.14)', border: '1px solid rgba(255,255,255,0.9)' }}>
              <img src={aiCallingImage} alt="AI calling experience" style={{ width: '100%', height: 'clamp(260px, 42vw, 420px)', objectFit: 'cover', display: 'block' }} />
              <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,23,42,0.05) 0%, rgba(15,23,42,0.35) 100%)' }} />
              <Box
                sx={{
                  position: 'absolute',
                  left: 16,
                  right: 16,
                  bottom: 16,
                  mx: 'auto',
                  maxWidth: 520,
                  width: 'calc(100% - 32px)',
                  borderRadius: '18px',
                  bgcolor: 'rgba(255,255,255,0.95)',
                  px: { xs: 1.5, sm: 2 },
                  py: { xs: 1.25, sm: 1.5 },
                  boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ flexWrap: 'wrap', textAlign: 'center' }}>
                  <PhoneInTalkOutlinedIcon sx={{ color: '#5C6BC0', fontSize: { xs: 22, sm: 26 } }} />
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: '#111827',
                      fontSize: { xs: 13, sm: 15, md: 17 },
                      lineHeight: 1.3,
                    }}
                  >
                    Automate outreach with intelligent voice workflows
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 }, px: { xs: 2.5, sm: 3, md: 10 }, bgcolor: '#fff' }}>
        <Typography align="center" sx={{ fontSize: { xs: 26, md: 36 }, fontWeight: 800, color: '#111827', mb: 2 }}>How AI calling fits into your pipeline</Typography>
        <Typography align="center" sx={{ color: '#64748b', fontSize: { xs: 15, md: 18 }, maxWidth: 760, mx: 'auto', mb: { xs: 4, md: 6 } }}>Move from conversation to action without losing context or momentum.</Typography>

        <Grid container spacing={{ xs: 2.5, md: 3 }} alignItems="stretch">
          {workflow.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%', p: { xs: 2.5, md: 4 }, borderRadius: 4, bgcolor: '#f8fbff', border: '1px solid #e6f0ff', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)' }}>
                <Box sx={{ width: 48, height: 48, borderRadius: '50%', bgcolor: index === 0 ? '#5C6BC0' : index === 1 ? '#1677F7' : '#0f172a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, mb: 2.5 }}>
                  {index + 1}
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: { xs: 18, md: 20 }, mb: 1, color: '#111827' }}>{item.title}</Typography>
                <Typography sx={{ color: '#64748b', lineHeight: 1.7 }}>{item.text}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 }, px: { xs: 2.5, sm: 3, md: 10 }, bgcolor: '#f8fbff' }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" sx={{ maxWidth: 1400, mx: 'auto' }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: '#fff', borderRadius: 4, p: { xs: 3, md: 4.5 }, boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)', border: '1px solid #eaf2ff' }}>
              <Typography sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, color: '#111827', mb: 2 }}>Why sales teams rely on it</Typography>
              <Typography sx={{ color: '#64748b', fontSize: { xs: 15, md: 17 }, lineHeight: 1.8, mb: 3 }}>AI calling helps teams work faster, follow up more consistently, and keep every conversation connected to the CRM.</Typography>

              <Stack spacing={1.8}>
                {benefits.map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <ChecklistRoundedIcon sx={{ color: '#5C6BC0', mt: 0.3 }} />
                    <Typography sx={{ color: '#334155', lineHeight: 1.7 }}>{item}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)', bgcolor: '#fff' }}>
              <img src={aiCallingImage} alt="AI calling dashboard" style={{ width: '100%', height: 'clamp(240px, 30vw, 360px)', objectFit: 'cover', display: 'block' }} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 }, px: { xs: 2.5, sm: 3, md: 10 }, bgcolor: '#111827' }}>
        <Box sx={{ maxWidth: 1100, mx: 'auto', borderRadius: 4, p: { xs: 3, md: 5 }, background: 'linear-gradient(135deg, #5C6BC0 0%, #1677F7 100%)', boxShadow: '0 20px 45px rgba(0,0,0,0.18)' }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }}>
            <Box>
              <Typography sx={{ color: '#fff', fontSize: { xs: 22, md: 32 }, fontWeight: 800, mb: 1 }}>Let AI calling power your next conversation</Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.9)', maxWidth: 620, lineHeight: 1.7 }}>Turn every outreach into a smarter, more actionable sales opportunity with AcoLead.</Typography>
            </Box>
            <Button variant="contained" onClick={handleBookDemoClick} sx={{ bgcolor: '#fff', color: '#5C6BC0', px: 4, py: 1.4, borderRadius: '999px', textTransform: 'none', fontWeight: 700, fontSize: { xs: 14, md: 16 }, width: { xs: '100%', md: 'auto' }, '&:hover': { bgcolor: '#f8fbff' } }}>
              Book a Demo
            </Button>
          </Stack>
        </Box>
      </Box>

      <Footer scrollToSection={scrollToSection} handleScrollToForm={handleScrollToForm} />
    </Box>
  );
};

export default AICallingPage;
