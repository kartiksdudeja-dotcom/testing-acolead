import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded';
import Header from './Header';
import Footer from './Footer';

const blue = '#0B5BC4';
const ink = '#111827';
const muted = '#4F5D70';
const pale = '#F4F9FF';
const green = '#43A047';
const MCP_URL = '[ACOLEAD MCP SERVER URL]';

const GreenRule = ({ centered = false, width = 74 }) => <Box sx={{ width, height: 3, borderRadius: 4, bgcolor: green, ml: centered ? 'auto' : 0, mr: centered ? 'auto' : 0, mb: 1.5 }} />;
const PageTitle = ({ before, blueText, center = true }) => <Box sx={{ textAlign: center ? 'center' : 'left', mb: 1.2 }}><Typography component="h2" sx={{ color: ink, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 30, md: 43 }, fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.12 }}>{before} <Box component="span" sx={{ color: blue }}>{blueText}</Box></Typography><GreenRule centered={center} /></Box>;
const CopyPanel = ({ label, code, multiline = false }) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(code); setCopied(true); window.setTimeout(() => setCopied(false), 1600); } catch { setCopied(false); }
  };
  return <Box sx={{ p: { xs: 1.8, md: 2.2 }, borderRadius: 2, bgcolor: '#0B1B35', color: '#E6EDF8', minWidth: 0 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.4 }}><Typography sx={{ color: '#AFC2DD', fontSize: 11 }}>{label}</Typography><Button onClick={copy} size="small" sx={{ minWidth: 0, px: 1.4, bgcolor: '#fff', color: ink, borderRadius: 1, fontSize: 11, fontWeight: 800, textTransform: 'none', '&:hover': { bgcolor: '#EAF2FC' } }}>{copied ? 'Copied' : 'Copy'}</Button></Box>
    <Box component="pre" sx={{ m: 0, whiteSpace: multiline ? 'pre-wrap' : 'pre', overflowX: 'auto', color: '#F1F5FB', fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, monospace', fontSize: { xs: 11, md: 13 }, lineHeight: 1.65 }}>{code}</Box>
  </Box>;
};
const StepText = ({ children }) => <Typography sx={{ color: ink, fontSize: 13, lineHeight: 1.8, mb: .7 }}>{children}</Typography>;

const AIConnectorPage = () => <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', '@media (max-width:1023.95px)': { pb: 8 } }}>
  <Header />
  <Box component="main" sx={{ flex: 1 }}>
    <Box sx={{ bgcolor: pale, py: { xs: 6, md: 10 } }}><Container maxWidth="lg"><Grid container spacing={{ xs: 4, md: 6 }} alignItems="center"><Grid item xs={12} md={6}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 2 }}><Typography sx={{ color: blue, fontSize: 11, fontWeight: 800, letterSpacing: '.08em' }}>ACOLEAD AI CONNECTOR</Typography><Box sx={{ px: 1.2, py: .55, borderRadius: 5, bgcolor: '#FFF0CD', color: '#835A00', fontSize: 11, fontWeight: 800 }}>Early Access</Box></Box>
      <Typography component="h1" sx={{ color: ink, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 39, md: 58 }, fontWeight: 800, letterSpacing: '-.05em', lineHeight: 1.04, mb: 2 }}>Bring AcoLead to Your <Box component="span" sx={{ color: blue, display: 'block' }}>AI Assistant</Box></Typography>
      <GreenRule width={120} />
      <Typography sx={{ color: '#1F2937', fontSize: { xs: 15, md: 18 }, lineHeight: 1.65, mb: 2.5 }}>Connect your AcoLead account to Claude, ChatGPT and the AI tools your team already uses. Ask about leads, site visits, bookings, team performance and marketing spend in plain language, and get answers from your live CRM.</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2, mb: 2 }}><Button component="a" href="#connect-with" variant="contained" sx={{ bgcolor: blue, borderRadius: 1.5, px: 2.5, py: 1.4, fontSize: 14, fontWeight: 800, textTransform: 'none', boxShadow: 'none', '&:hover': { bgcolor: '#06489D', boxShadow: 'none' } }}>Connect Your Assistant</Button><Button component="a" href="#what-you-can-ask" variant="outlined" sx={{ borderColor: blue, color: blue, borderRadius: 1.5, px: 2.5, py: 1.4, fontSize: 14, fontWeight: 800, textTransform: 'none', bgcolor: '#fff' }}>See What You Can Ask</Button></Box>
      <Typography sx={{ color: muted, fontSize: 14 }}>Works with your existing AcoLead login. No API keys.</Typography>
    </Grid><Grid item xs={12} md={6}><Box sx={{ maxWidth: 610, ml: 'auto', p: { xs: 2, md: 2.7 }, borderRadius: 3, bgcolor: '#fff', border: '1px solid #E1E7EF', boxShadow: '0 16px 38px rgba(20,44,74,.07)' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: .8, mb: 2 }}><Box sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: green }} /><Typography sx={{ color: muted, fontSize: 13 }}>AcoLead connected</Typography></Box>
      <Box sx={{ ml: { xs: 0, md: 4 }, p: 1.4, borderRadius: 2, bgcolor: '#E0F1FF', color: ink, fontSize: 13, lineHeight: 1.5, mb: 1.4 }}>Which serious opportunities are we about to lose this week?</Box>
      <Box sx={{ mr: { xs: 0, md: 5 }, p: 1.6, borderRadius: 2, bgcolor: '#F2F4F7' }}><Typography sx={{ color: ink, fontSize: 13, fontWeight: 700, mb: 1.1 }}>Three ready-to-close leads are flagged At Risk:</Typography>{[['Priya · 3 BHK', 'No staff action today'], ['Kamal · 2 BHK', 'Visit cancelled, not rescheduled'], ['Suresh · Villa', 'Follow-up overdue']].map(([name, status]) => <Box key={name} sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: .5, mb: .7 }}><Typography sx={{ color: ink, fontSize: 12, fontWeight: 800 }}>{name}</Typography><Typography sx={{ color: muted, fontSize: 12 }}>{status}</Typography></Box>)}<Typography sx={{ color: muted, fontSize: 11, mt: 1 }}>Source: AcoLead lead risk summary</Typography></Box>
      <Typography sx={{ color: muted, fontSize: 11, mt: 1.4 }}>Illustration with sample data.</Typography>
    </Box></Grid></Grid></Container></Box>

    <Box component="section" id="connect-with" sx={{ py: { xs: 6, md: 9 }, bgcolor: '#fff' }}><Container maxWidth="lg"><PageTitle before="Connect" blueText="With" /><Typography sx={{ textAlign: 'center', color: muted, fontSize: 15, mb: 4 }}>Pick your assistant. Claude and ChatGPT connect in a few clicks; developer tools take one command.</Typography><Grid container spacing={1.5}>{[
      ['C', 'Claude', 'Connect in minutes'], ['G', 'ChatGPT', 'Connect in minutes'], ['>_', 'Claude Code', 'View command'], ['{ }', 'Cursor', 'View setup steps'],
    ].map(([symbol, name, action]) => <Grid item xs={12} sm={6} md={3} key={name}><Box sx={{ height: '100%', display: 'flex', alignItems: 'center', gap: 1.5, p: 2.2, borderRadius: 2, bgcolor: '#FFFCFC', border: '1px solid #E5EAF1', boxShadow: '0 7px 20px rgba(31,46,67,.05)' }}><Box sx={{ width: 54, height: 54, flex: '0 0 54px', display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: '#E2F1FF', color: blue, fontSize: 20, fontWeight: 800 }}>{symbol}</Box><Box><Typography sx={{ color: ink, fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 16 }}>{name}</Typography><Typography sx={{ color: blue, fontSize: 13, fontWeight: 700 }}>{action}</Typography></Box></Box></Grid>)}</Grid>
      <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center" sx={{ mt: { xs: 5, md: 7 } }}><Grid item xs={12} md={5}><Typography component="h3" sx={{ color: blue, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 24, md: 32 }, fontWeight: 800, mb: .5 }}>Add AcoLead to Claude or ChatGPT</Typography><GreenRule width={75} /><StepText>1. Open your assistant’s settings and choose to add a custom connector.</StepText><StepText>2. Name it AcoLead and paste the server URL below.</StepText><StepText>3. Sign in with your AcoLead account and approve access.</StepText><StepText>4. Start a new chat and ask your first question.</StepText><Typography sx={{ color: muted, fontSize: 12, lineHeight: 1.65, mt: 1.5 }}>On team or enterprise plans, your workspace admin may need to allow custom connectors first.</Typography></Grid><Grid item xs={12} md={7}><CopyPanel label="Server URL" code={MCP_URL} /></Grid></Grid>
      <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center" sx={{ mt: { xs: 4, md: 6 } }}><Grid item xs={12} md={5}><Typography component="h3" sx={{ color: blue, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 24, md: 32 }, fontWeight: 800, mb: .5 }}>Add AcoLead to Claude Code</Typography><GreenRule width={75} /><StepText>1. Run the command in your terminal.</StepText><StepText>2. Start a Claude Code session and type /mcp to sign in to AcoLead.</StepText></Grid><Grid item xs={12} md={7}><CopyPanel label="Terminal" code={`claude mcp add --transport http acolead ${MCP_URL}`} /></Grid></Grid>
      <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center" sx={{ mt: { xs: 4, md: 6 } }}><Grid item xs={12} md={5}><Typography component="h3" sx={{ color: blue, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 24, md: 32 }, fontWeight: 800, mb: .5 }}>Add AcoLead to Cursor</Typography><GreenRule width={75} /><StepText>1. Open Cursor settings and go to MCP.</StepText><StepText>2. Add a new server and paste this configuration.</StepText><StepText>3. Click to authenticate and sign in to AcoLead.</StepText></Grid><Grid item xs={12} md={7}><CopyPanel label="mcp.json" multiline code={`{\n  "mcpServers": {\n    "acolead": {\n      "url": "${MCP_URL}"\n    }\n  }\n}`} /></Grid></Grid>
    </Container></Box>

    <Box component="section" id="what-you-can-ask" sx={{ py: { xs: 6, md: 9 }, bgcolor: pale }}><Container maxWidth="lg"><PageTitle before="What You" blueText="Can Ask" /><Typography sx={{ maxWidth: 920, mx: 'auto', textAlign: 'center', color: muted, fontSize: 15, lineHeight: 1.65, mb: 4 }}>The connector gives your assistant read-only access to your AcoLead data, limited to what your role can see. Ask the way you would ask your sales manager.</Typography><Grid container spacing={1.5}>{[
      ['Pipeline & Funnel', 'Leads by stage, and how many became valid, contacted, visited and booked.', 'How many of this month’s leads reached a site visit and a booking?'],
      ['Leads at Risk', 'Intent bands and Ignored, Cooling and At Risk flags, by salesperson.', 'Show Hot or Ready-to-Close leads that are At Risk.'],
      ['My Day', 'Today’s follow-ups and the overdue backlog, in priority order.', 'What should I do first today?'],
      ['Site Visits & Bookings', 'Planned, overdue, completed and cancelled visits and bookings.', 'Which site visits are planned for tomorrow, and which are overdue?'],
      ['Team Performance', 'Calls, follow-ups, visits and bookings per team member.', 'Who has the most overdue follow-ups this week?'],
      ['Marketing ROI', 'Spend, cost per lead, completed visit and booking, by source.', 'Which source gives the lowest cost per booking?'],
      ['Meta Ads', 'Campaign structure and performance from your connected ad accounts.', 'Which Meta campaign brought the most site visits last month?'],
      ['Attendance & Availability', 'Who is checked in, on leave or available for new leads.', 'Who can take new leads right now?'],
    ].map(([title, body, question]) => <Grid item xs={12} sm={6} md={4} key={title}><Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2.2, borderRadius: 2.3, bgcolor: '#FFFCFC', border: '1px solid #E1E7EF', boxShadow: '0 7px 20px rgba(31,46,67,.05)' }}><Typography sx={{ color: blue, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 18, fontWeight: 800, mb: .8 }}>{title}</Typography><Typography sx={{ color: ink, fontSize: 13, lineHeight: 1.6, mb: 1.5 }}>{body}</Typography><Box sx={{ mt: 'auto', p: 1.2, borderRadius: 1.5, bgcolor: '#E0F1FF', color: ink, fontSize: 12, lineHeight: 1.55 }}>“{question}”</Box></Box></Grid>)}</Grid></Container></Box>

    <Box component="section" sx={{ py: { xs: 6, md: 9 }, bgcolor: '#fff' }}><Container maxWidth="lg"><PageTitle before="How It" blueText="Works" /><Grid container spacing={1.5} sx={{ mt: 3 }}>{[
      ['1', 'Connect', 'Add AcoLead to your assistant with the server URL or one command.'],
      ['2', 'Authorize', 'Sign in with your AcoLead account. The assistant sees only what your role can see.'],
      ['3', 'Ask', 'Ask in plain language and get answers from your live CRM data.'],
    ].map(([n, title, body]) => <Grid item xs={12} md={4} key={n}><Box sx={{ height: '100%', p: 2.5, borderRadius: 2.3, bgcolor: pale }}><Box sx={{ width: 44, height: 44, display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: blue, color: '#fff', fontSize: 18, fontWeight: 800, mb: 1.5 }}>{n}</Box><Typography sx={{ color: blue, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 19, fontWeight: 800, mb: .7 }}>{title}</Typography><Typography sx={{ color: ink, fontSize: 13, lineHeight: 1.7 }}>{body}</Typography></Box></Grid>)}</Grid><Typography sx={{ color: ink, textAlign: 'center', fontSize: 14, fontWeight: 700, mt: 2.5 }}>No API keys to manage. Connect once, disconnect anytime.</Typography></Container></Box>

    <Box component="section" sx={{ py: { xs: 5, md: 7 }, bgcolor: blue, color: '#fff' }}><Container maxWidth="lg"><Typography component="h2" sx={{ textAlign: 'center', color: '#fff', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 28, md: 42 }, fontWeight: 800, mb: 3 }}>Your Data Stays Under Your Control</Typography><Grid container spacing={1.5}>{[
      ['Your Own Sign-In', 'Each person connects with their own AcoLead account.'],
      ['Limited to Your Role', 'Owners see the company, managers their team, staff their own leads.'],
      ['Read-Only', 'The assistant reads your data. It cannot change leads or settings.'],
      ['Staff Location Stays Private', 'AcoLead never shares staff location with AI assistants.'],
    ].map(([title, body], i) => <Grid item xs={12} sm={6} md={i === 3 ? 12 : 4} key={title}><Box sx={{ height: '100%', p: 2.3, borderRadius: 2, bgcolor: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)' }}><Typography sx={{ color: '#fff', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 17, fontWeight: 800, mb: .7 }}>{title}</Typography><Typography sx={{ color: '#EAF3FF', fontSize: 13, lineHeight: 1.7 }}>{body}</Typography></Box></Grid>)}</Grid></Container></Box>

    <Box component="section" sx={{ py: { xs: 6, md: 9 }, bgcolor: '#fff' }}><Container maxWidth="md"><Box sx={{ textAlign: 'center', mb: 3 }}><Typography component="h2" sx={{ color: ink, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 30, md: 43 }, fontWeight: 800, letterSpacing: '-.04em' }}>FA<Box component="span" sx={{ color: blue }}>Qs</Box></Typography><GreenRule centered /></Box>{[
      ['What is MCP?', 'The Model Context Protocol is an open standard that lets AI assistants connect to business software. AcoLead’s MCP server lets an assistant read your CRM data when you allow it.'],
      ['Is the connection secure?', 'You sign in with your AcoLead account; no API keys are shared or stored in the assistant. Access follows your AcoLead role, and you can disconnect from your assistant’s connector settings at any time.'],
      ['Which AI assistants work with AcoLead?', 'Claude and ChatGPT, plus developer tools that support remote MCP servers, such as Claude Code and Cursor.'],
      ['Can the assistant change my CRM data?', 'No. The connector is read-only today. To create leads, update records or schedule visits by chat, see AcoLead Nova.'],
      ['Do I need an AcoLead account?', 'Yes. The connector answers from your own AcoLead data, so you need an active AcoLead login.'],
    ].map(([q, answer]) => <Accordion key={q} disableGutters elevation={0} sx={{ mb: 1.2, border: '1px solid #DFE7F0', borderRadius: '13px !important', '&:before': { display: 'none' } }}><AccordionSummary expandIcon={<ExpandMoreRounded sx={{ color: blue }} />}><Typography sx={{ color: ink, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 15, fontWeight: 800 }}>{q}</Typography></AccordionSummary><AccordionDetails><Typography sx={{ color: muted, fontSize: 13, lineHeight: 1.7 }}>{answer}</Typography></AccordionDetails></Accordion>)}</Container></Box>

    <Box component="section" id="connector-early-access" sx={{ py: { xs: 6, md: 8 }, bgcolor: pale, textAlign: 'center' }}><Container maxWidth="md"><Typography component="h2" sx={{ color: blue, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 26, md: 38 }, fontWeight: 800, mb: 1 }}>READY TO ASK YOUR CRM?</Typography><Typography sx={{ color: ink, fontSize: 15, lineHeight: 1.7, mb: 2.5 }}>The AI Connector is in early access for AcoLead customers. New to AcoLead? Book a demo and we will set it up with you.</Typography><Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1.2 }}><Button component="a" href="mailto:sales@coalitionify.com?subject=AcoLead%20AI%20Connector%20Early%20Access" variant="contained" sx={{ bgcolor: blue, borderRadius: 1.5, px: 2.6, py: 1.35, fontWeight: 800, textTransform: 'none', boxShadow: 'none', '&:hover': { bgcolor: '#06489D', boxShadow: 'none' } }}>Request Early Access</Button><Button component="a" href="mailto:sales@coalitionify.com?subject=AcoLead%20AI%20Connector%20Sales%20Question" variant="outlined" sx={{ borderColor: blue, color: blue, bgcolor: '#fff', borderRadius: 1.5, px: 2.6, py: 1.35, fontWeight: 800, textTransform: 'none' }}>Talk to Sales</Button></Box><Typography sx={{ color: muted, fontSize: 13, mt: 2 }}>Own Every Lead. Close Every Deal.</Typography></Container></Box>
  </Box>
  <Footer />
</Box>;

export default AIConnectorPage;
