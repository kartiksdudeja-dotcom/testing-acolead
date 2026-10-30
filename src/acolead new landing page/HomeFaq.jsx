import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

const questions = [
  {
    question: 'Can you migrate our existing leads into AcoLead?',
    answer: 'Migration depends on your current tool and the format and quality of your data. Share those details with our team so they can confirm the available approach and scope.',
  },
  {
    question: 'How long does setup take?',
    answer: 'Setup timing depends on your team, lead sources and configuration needs. We’ll review your requirements and confirm a timeline before you begin.',
  },
  {
    question: 'Which portals and lead sources are supported?',
    answer: 'AcoLead is designed to bring enquiries from property portals, Meta campaigns, your website and walk-ins into one CRM. Ask the team to confirm the connection method for each source you use.',
  },
  {
    question: 'How much does WhatsApp API usage cost?',
    answer: 'WhatsApp charges can depend on the account, provider and message usage. The current applicable charges and any AcoLead add-on cost will be confirmed in your quote.',
  },
  {
    question: 'Is there a mobile app for my sales team?',
    answer: 'Yes. AcoLead has Android and iOS apps to help your team manage leads, follow-ups, visit schedules and customer communication while in the field.',
  },
  {
    question: 'How does AcoLead protect our customer data?',
    answer: 'AcoLead includes lead privacy controls such as phone number masking. In your demo, our team can explain the access controls and data handling that apply to your setup.',
  },
];

const HomeFaq = () => (
  <Box component="section" aria-labelledby="home-faq-title" sx={{ py: { xs: 6, md: 8 }, bgcolor: '#F8FBFF' }}>
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 4 } }}>
        <Typography component="h2" id="home-faq-title" sx={{ color: '#101C2E', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: { xs: 30, md: 38 }, letterSpacing: '-.035em' }}>
          Frequently Asked <Box component="span" sx={{ color: '#0859C1' }}>Questions</Box>
        </Typography>
        <Box sx={{ width: 48, height: 4, borderRadius: 2, bgcolor: '#3B9D1D', mx: 'auto', mt: 1.7 }} />
      </Box>
      {questions.map(({ question, answer }) => (
        <Accordion key={question} disableGutters elevation={0} sx={{ bgcolor: '#fff', border: '1px solid #E1E9F3', borderRadius: '12px !important', mb: 1, '&:before': { display: 'none' } }}>
          <AccordionSummary expandIcon={<ExpandMoreRoundedIcon sx={{ color: '#0859C1' }} />} sx={{ px: { xs: 1.7, sm: 2.2 }, minHeight: 58 }}>
            <Typography sx={{ color: '#14243A', fontWeight: 700, fontSize: { xs: 13, sm: 14 } }}>{question}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: { xs: 1.7, sm: 2.2 }, pt: 0 }}>
            <Typography sx={{ color: '#596A80', fontSize: 13, lineHeight: 1.7 }}>{answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  </Box>
);

export default HomeFaq;
