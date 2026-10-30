import React, { useRef } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, Typography } from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Header from './Header';
import Footer from './Footer';
import BookDemo from './BookDemo';

const teamBands = ['1–4 users', '5–10 users', '11–25 users', '26+ users'];
const addOns = ['WhatsApp', 'Instagram', 'AI Calling'];
const faqs = [
  { q: 'How is my AcoLead quote prepared?', a: 'Share your sales team size, current tools, lead volume and budget range. The team will use those details to recommend a suitable setup.' },
  { q: 'Can I add more users later?', a: 'Tell the AcoLead team how your sales team may grow so user requirements can be included in your quote.' },
  { q: 'Are WhatsApp, Instagram and AI Calling included?', a: 'These are listed as add-ons. Availability and pricing for your setup will be confirmed in your quote.' },
  { q: 'Is training included?', a: 'Training inclusions are being confirmed. Ask the team to include the training details in your quote.' },
  { q: 'Can you migrate our existing leads?', a: 'Share the tool and data format you use today. The team will confirm migration scope and any associated charges.' },
  { q: 'Can I see the product before deciding?', a: 'Yes. Request a demo and the team will walk you through the features relevant to your business.' },
];

const PricingPage = () => {
  const demoRef = useRef(null);
  const goToDemo = () => {
    const el = demoRef.current;
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', '@media (max-width:1023.95px)': { pb: 8 } }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#F2F6FC', borderBottom: '1px solid #E1E9F3' }}>
          <Container maxWidth="md" sx={{ textAlign: 'center' }}>
            <Typography sx={{ color: '#0859C1', textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 800, fontSize: 11, mb: 1.5 }}>AcoLead pricing</Typography>
            <Typography component="h1" sx={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#101C2E', fontWeight: 800, fontSize: { xs: 36, md: 48 }, lineHeight: 1.12, letterSpacing: '-.04em', mb: 2 }}>Find the right fit for your sales team.</Typography>
            <Box sx={{ width: 48, height: 4, bgcolor: '#3B9D1D', borderRadius: 3, mx: 'auto', mb: 2 }} />
            <Typography sx={{ color: '#536277', fontSize: 16, lineHeight: 1.65, maxWidth: 700, mx: 'auto', mb: 2.5 }}>
              Pricing is being finalized. Share your team size and budget before the demo, and we’ll prepare a quote for the modules and add-ons you need.
            </Typography>
            <Button onClick={goToDemo} variant="contained" sx={{ bgcolor: '#0859C1', px: 2.5, py: 1.2, borderRadius: 2, fontWeight: 700, textTransform: 'none', '&:hover': { bgcolor: '#06489D' } }}>Qualify your budget</Button>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
          <Typography component="h2" sx={{ color: '#101C2E', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 26, fontWeight: 800, mb: .7 }}>Plans sized to your team</Typography>
          <Typography sx={{ color: '#596A80', fontSize: 14, mb: 2.5 }}>Choose the closest user band so we can scope your quote. Plan names and rates are pending confirmation.</Typography>
          <Grid container spacing={1.5}>
            {teamBands.map((band) => <Grid item xs={6} md={3} key={band}><Box sx={{ p: 2, minHeight: 118, border: '1px solid #E1E9F3', borderRadius: 2.5, bgcolor: '#FFFAFA' }}><Typography sx={{ color: '#0859C1', fontWeight: 800, fontSize: 16 }}>{band}</Typography><Typography sx={{ color: '#596A80', fontSize: 12, mt: .7 }}>Request a tailored quote</Typography></Box></Grid>)}
          </Grid>
        </Container>

        <Box sx={{ bgcolor: '#F8FBFF', py: { xs: 5, md: 7 } }}>
          <Container maxWidth="lg">
            <Typography component="h2" sx={{ color: '#101C2E', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 26, fontWeight: 800, mb: .7 }}>Optional add-ons</Typography>
            <Typography sx={{ color: '#596A80', fontSize: 14, mb: 2.5 }}>Add-on availability and pricing are confirmed in your quote.</Typography>
            <Grid container spacing={1.5}>{addOns.map((item) => <Grid item xs={12} sm={4} key={item}><Box sx={{ p: 2, border: '1px solid #E1E9F3', borderRadius: 2.5, bgcolor: '#fff', color: '#14243A', fontWeight: 700 }}>{item}<Typography sx={{ color: '#718096', fontSize: 12, mt: .5, fontWeight: 400 }}>Pricing shared with your quote</Typography></Box></Grid>)}</Grid>
            <Box sx={{ mt: 3, p: { xs: 2, md: 2.5 }, border: '1px solid #E1E9F3', borderRadius: 2.5, bgcolor: '#fff' }}>
              <Typography sx={{ color: '#14243A', fontWeight: 800, mb: .6 }}>Training and migration</Typography>
              <Typography sx={{ color: '#596A80', fontSize: 13, lineHeight: 1.6 }}>Ask us to confirm the training and data migration scope for your team when preparing your quote.</Typography>
            </Box>
          </Container>
        </Box>

        <Container maxWidth="md" sx={{ py: { xs: 5, md: 7 } }}>
          <Typography component="h2" sx={{ color: '#101C2E', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 26, fontWeight: 800, mb: 2 }}>Pricing questions</Typography>
          {faqs.map(({ q, a }) => <Accordion key={q} disableGutters elevation={0} sx={{ border: '1px solid #E1E9F3', borderRadius: '10px !important', mb: 1, '&:before': { display: 'none' } }}><AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}><Typography sx={{ color: '#14243A', fontWeight: 700, fontSize: 14 }}>{q}</Typography></AccordionSummary><AccordionDetails><Typography sx={{ color: '#596A80', fontSize: 13, lineHeight: 1.65 }}>{a}</Typography></AccordionDetails></Accordion>)}
        </Container>

        <Box ref={demoRef}><BookDemo includeBudgetQuestion /></Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default PricingPage;
