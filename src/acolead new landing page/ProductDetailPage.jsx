import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Accordion, AccordionDetails, AccordionSummary, Box, Breadcrumbs, Button, Chip, Container, Grid, Link, Typography } from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Header from './Header';
import Footer from './Footer';
import BookDemo from './BookDemo';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import ViewKanbanRoundedIcon from '@mui/icons-material/ViewKanbanRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';

const allAudiences = [
  { title: 'Builders & Developers', href: '/solutions/builders' },
  { title: 'Channel Partner Agencies', href: '/solutions/channel-partners' },
  { title: 'Mandate Companies', href: '/solutions/mandate-companies' },
  { title: 'Brokers & Resale', href: '/solutions/resale' },
];

const F = (title, headline, Icon, screens, audiences = allAudiences, related = [], benefits = [], status = 'Live') => ({
  title,
  headline,
  description: benefits[0]?.[1]?.split('. ')[0] ? `${benefits[0][1].split('. ')[0]}.` : headline,
  Icon,
  screens,
  audiences,
  related,
  benefits,
  status,
});

const pages = {
  '/features/lead-capture': F('Lead Capture & Sources', 'Every Lead in One Place', PersonAddAlt1RoundedIcon, ['S03', 'S33', 'S05'], allAudiences, ['/features/lead-routing', '/features/whatsapp', '/features/pipeline'], [
    ['Capture enquiries from every source', 'Bring portal, Meta and Google ads, website forms and walk-ins into AcoLead. Each enquiry keeps its source attached for follow-up and reporting.'],
    ['Respond to social enquiries', 'AcoLead Bot can collect Instagram and Facebook DM enquiries. Keep the conversation connected to the lead record for your team.'],
    ['Use QR codes and prevent duplicates', 'Create project or exhibition QR codes to identify where an enquiry came from. Duplicate checks help your team avoid working the same buyer twice.'],
  ]),
  '/features/lead-routing': F('Smart Assignment & Response Timer', 'The First to Call Wins the Buyer', AssignmentTurnedInRoundedIcon, ['S06', 'S03'], allAudiences, ['/features/lead-capture', '/features/pipeline', '/features/team-field'], [
    ['Route by project, source or area', 'Set routing rules around the way your team sells. Send each enquiry to the team responsible for that project, source or location.'],
    ['Choose a fair assignment method', 'Use round robin or percentage shares to distribute new leads. Adjust the distribution to match your team structure.'],
    ['Keep response time visible', 'An acceptance timer shows when a lead has not been picked up. If nobody accepts it, the lead can move to the next salesperson.'],
  ]),
  '/features/pipeline': F('Pipeline & CRM Boards', 'Your Process, Not Ours', ViewKanbanRoundedIcon, ['S07'], allAudiences, ['/features/lead-capture', '/features/sales-intelligence', '/features/reports'], [
    ['Set Your Stages, Statuses and Sources', 'Customize stages, statuses and lead sources to fit the way your team works. Keep the CRM aligned with your sales process.'],
    ['Use Separate Boards for Each Workflow', 'Keep buyers, sellers, rentals, tasks and invoices on separate boards. Give every workflow a clear view.'],
    ['Move Work with Drag and Drop', 'Drag and drop records between stages as work progresses. See what is moving and what needs attention.'],
  ]),
  '/features/sales-intelligence': F('Sales Intelligence', 'Which of Your 500 Leads Will Buy This Month?', QueryStatsRoundedIcon, ['S08', 'S02', 'S09'], allAudiences, ['/features/pipeline', '/features/mobile-app', '/features/reports'], [
    ['See buyer intent bands', 'Group leads from Cold through Ready to Close. Give salespeople a clearer view of which opportunities to work first.'],
    ['Catch ignored and cooling leads', 'Risk flags highlight leads marked Ignored, Cooling or At Risk. Managers can spot follow-ups waiting across the team.'],
    ['Make priorities clear each day', 'My Day gives salespeople a prioritized call list. Team Risk helps managers see unattended opportunities.'],
  ]),
  '/features/site-visits': F('Site Visits & Bookings', 'Never Miss a Site Visit', EventAvailableRoundedIcon, ['S13', 'S14'], [allAudiences[0], allAudiences[2]], ['/features/inventory', '/features/pipeline', '/features/mobile-app'], [
    ['Schedule, Reschedule and Complete Visits', 'Create each site visit from the lead record and keep the appointment linked to the buyer. Record when the visit is completed.'],
    ['See Overdue Visits', 'AcoLead flags overdue visits so the team can follow up. Keep visit status and history connected to the lead.'],
    ['Record Bookings Against Units', 'Link each booking to its unit and buyer. Keep progress from enquiry to visit to booking in context.'],
  ]),
  '/features/inventory': F('Inventory & Property Matching', 'Units, Pricing and Availability in One View', ApartmentRoundedIcon, ['S14', 'S15'], [allAudiences[0], allAudiences[2], allAudiences[3]], ['/features/site-visits', '/features/resale', '/features/whatsapp'], [
    ['Organize Towers, Units and Floor Plans', 'Keep towers, units, floor plans, pricing and media together. Your team can refer to project inventory while speaking with buyers.'],
    ['See live availability', 'Track which units are available and keep unit status up to date. Reduce the need to check separate spreadsheets.'],
    ['Match needs and share options', 'Compare buyer requirements with available units. Share suitable property details with buyers on WhatsApp.'],
  ]),
  '/features/whatsapp': F('WhatsApp', 'Every WhatsApp Chat Inside Your CRM', ForumRoundedIcon, ['S11', 'S10'], allAudiences, ['/features/lead-capture', '/features/calling', '/features/mobile-app'], [
    ['Use the In-House WhatsApp API', 'AcoLead offers an affordable in-house WhatsApp API for CRM-linked customer communication. The team can also use built-in personal WhatsApp chat.'],
    ['Send Approved Templates and Bulk Campaigns', 'Use approved message templates and bulk campaigns for customer and partner communication. Keep the conversation linked to the lead.'],
    ['Share Project Brochures in One Tap', 'Share brochures directly from the customer chat. Keep communication close to the enquiry and follow-up history.'],
  ]),
  '/features/calling': F('Calling, Call ID & Number Masking', 'Know Who’s Calling Before You Answer', CallRoundedIcon, ['S12', 'S10'], allAudiences, ['/features/whatsapp', '/features/mobile-app', '/features/pipeline'], [
    ['Recognize Calls from CRM Leads', 'Call ID identifies callers from the CRM so the team can see customer context before answering.'],
    ['Mask Numbers without an IVR', 'Protect personal phone numbers with number masking, without adding an IVR step to the call.'],
    ['Keep Every Call on the Lead Timeline', 'Calls appear in the lead timeline. Call recording is available on supported phones.'],
  ]),
  '/features/team-field': F('Team, Attendance & Field Tracking', 'Know Where Your Team Is and What They Closed Today', GroupsRoundedIcon, ['S23', 'S32'], [allAudiences[0], allAudiences[2]], ['/features/site-visits', '/features/reports', '/features/mobile-app'], [
    ['Set Up Roles and Teams', 'Organize salespeople into roles and teams. Give managers a clear view of team activity.'],
    ['Track Attendance and Check-Ins', 'Record attendance and field check-ins. Keep field activity connected to the team’s work.'],
    ['Manage Tasks and Field Performance', 'Use the task manager with live location for field work. Review results with the performance leaderboard.'],
  ]),
  '/features/mobile-app': F('Mobile App – Android & iOS', 'Your Team Works From the Mobile App', SmartphoneRoundedIcon, ['S16', 'S02'], allAudiences, ['/features/site-visits', '/features/calling', '/features/sales-intelligence'], [
    ['Work Leads and Follow-Ups on Your Phone', 'Open leads and follow-ups on Android or iOS. Keep customer and project context close during the workday.'],
    ['Use My Day to Plan Calls', 'See prioritized work in My Day and keep the next call clear. Follow-up activity stays connected to the lead.'],
    ['Manage Visits and Calls on Mobile', 'Access visits, calls and customer communication away from the desk. Call ID helps recognize known leads.'],
  ]),
  '/features/marketing-roi': F('Marketing ROI', 'Which Ad Rupee Actually Brought Bookings?', CampaignRoundedIcon, ['S17'], [allAudiences[0], allAudiences[2]], ['/features/reports', '/features/lead-capture', '/features/sales-intelligence'], [
    ['Track Spend by Source', 'Record marketing spend against each source. Review results in the context of projects and campaigns.'],
    ['Compare Costs through the Funnel', 'Review cost per lead, completed visit and booking. See how each source performs beyond enquiry volume.'],
    ['Use Efficiency Scores to Guide Spend', 'Compare source efficiency and get a spend recommendation per source. Use the results to decide which campaigns to grow.'],
  ]),
  '/features/website': F('Maintenance-Free Website', 'Your Inventory, Live on Your Website, No Developer', LanguageRoundedIcon, ['S18'], [allAudiences[0], allAudiences[1]], ['/features/inventory', '/features/lead-capture', '/features/marketing-roi'], [
    ['Publish Your Project and Inventory', 'AcoLead builds the site and publishes your project inventory. Keep your available units ready to share online.'],
    ['Capture Every Website Enquiry', 'Website forms send enquiries into AcoLead CRM. Each record retains its website source.'],
    ['Keep Website Leads in the Sales Flow', 'Your team can assign and follow up with website enquiries in AcoLead. Lead activity remains connected to the CRM record.'],
  ]),
  '/features/channel-partners': F('Channel Partner Management', 'Units, Pricing and Channel Partners in One View', HandshakeRoundedIcon, ['S30', 'S21'], [allAudiences[0], allAudiences[2]], ['/features/partner-leads', '/features/inventory', '/features/site-visits'], [
    ['Organize Your Partner Network', 'Keep channel partner profiles and relationships in one place. Give sourcing managers a shared view of partner activity.'],
    ['Engage Partners with Events and Updates', 'Sourcing managers can run partner events and share project launch updates. Help partners stay current with units and pricing.'],
    ['Bring Partner Activity to Site Visits', 'Track partner enquiries through follow-up and site visit. See the visits partners bring into each project.'],
  ]),
  '/features/partner-leads': F('Partner Lead Integration', 'Leads From Partners, Not From WhatsApp Groups', HubRoundedIcon, ['S21'], [allAudiences[0], allAudiences[2], allAudiences[1]], ['/features/lead-capture', '/features/channel-partners', '/features/pipeline'], [
    ['Receive partner enquiries', 'Partners can submit leads by webhook or partner login. Bring new enquiries into the CRM workflow.'],
    ['Check for duplicate buyers', 'Duplicate checks help identify a buyer who has already been registered. Keep lead ownership and source easier to review.'],
    ['Let partners track status', 'Partners can follow the status of their submitted leads. Keep progress visible without relying on WhatsApp groups.'],
  ]),
  '/features/invoice-board': F('Invoice Board', 'Track Every Brokerage Invoice Until It Is Paid', ReceiptLongRoundedIcon, ['S29'], [allAudiences[1]], ['/features/pipeline', '/features/reports', '/features/channel-partners'], [
    ['Connect invoices to the booking', 'Link an invoice to the buyer, project and booking that earned it. Keep the proof and claim together.'],
    ['Follow invoice progress', 'Track an invoice through proposed stages such as To Raise, Raised, Follow-up and Paid. Final stage names are to be confirmed.'],
    ['Keep due dates in view', 'Use reminders for due and overdue invoices. Confirm available totals and reporting with the product team.'],
  ], 'To Confirm'),
  '/features/post-sales': F('Post-Sales Payment Management', 'Track Every Instalment From Booking to Possession', PaymentsRoundedIcon, ['S19', 'S20'], [allAudiences[0]], ['/features/inventory', '/features/reports', '/features/pipeline'], [
    ['Create payment plans', 'Set flexible payment plans per unit or project. Confirm available plan types with the product team before launch.'],
    ['Track instalments, loans and dues', 'Follow each instalment, home-loan disbursement and outstanding amount by buyer and project. Keep payment context with the sale.'],
    ['Issue letters and receipts', 'Prepare demand letters and receipts from AcoLead. Keep post-sales documents linked to the customer record.'],
  ], 'Launching Soon'),
  '/features/resale': F('Resale Flow', 'Match Every Seller to a Buyer Automatically', HomeWorkRoundedIcon, ['S22', 'S15'], [allAudiences[3]], ['/features/inventory', '/features/pipeline', '/features/whatsapp'], [
    ['Keep seller listings and buyer needs apart', 'Record seller properties and buyer requirements separately. Keep each side clear as your team works on a match.'],
    ['Match properties to requirements', 'Compare listing details with buyer needs to find suitable options. Keep the match connected to both records.'],
    ['Track the deal to closure', 'Manage the resale journey from listing through match and follow-up to closure. Use a separate flow for rentals.'],
  ]),
  '/features/reports': F('Reports & Automation', 'Reports Your Business Actually Uses', AssessmentRoundedIcon, ['S31', 'S01'], allAudiences, ['/features/marketing-roi', '/features/team-field', '/features/pipeline'], [
    ['Build custom reports', 'Choose the views your team needs to review pipeline and business activity. Keep reporting relevant to your workflow.'],
    ['Automate Reminders, Notifications and Recurring Tasks', 'Automate reminders and notifications for follow-ups and set recurring tasks. Help your team keep routine actions moving.'],
    ['Review performance across projects', 'Use reports to see activity and progress. Share the right view with the people responsible for each project.'],
  ]),
  '/ai/sales-agent': F('AI Sales Agent', 'Your Leads Get a Reply in Seconds, Even at 11 pm', AutoAwesomeRoundedIcon, ['S24', 'S25'], allAudiences, ['/features/whatsapp', '/features/lead-capture', '/ai/nova'], [
    ['Keep the salesperson first', 'The salesperson replies first when available. The AI agent can cover the gap when a response is needed outside the team’s working hours.'],
    ['Respond across customer channels', 'Support conversations on WhatsApp, Instagram and AI calling. Keep the conversation connected to the customer enquiry.'],
    ['Use verified product facts', 'The agent responds using verified facts. Configure its knowledge so it can answer questions about your projects accurately.'],
  ]),
  '/ai/nova': F('AcoLead Nova', 'Talk to AcoLead Like You Talk to Your Team', PsychologyRoundedIcon, ['S26'], allAudiences, ['/ai/sales-agent', '/ai/connector', '/features/reports'], [
    ['Update a lead after a call', 'Tell Nova what happened in your latest call. Review the proposed update before it is saved.'],
    ['Get a quick team brief', 'Ask for a summary of team activity and priorities. Use the brief to understand what needs attention.'],
    ['Preview changes before saving', 'Nova shows proposed CRM changes for review. Confirm the update before it changes a record.'],
  ], 'Launching Soon'),
  '/ai/connector': F('AI Connector (MCP)', 'Ask Your CRM a Question in Claude or ChatGPT', HubRoundedIcon, ['S27'], [{ title: 'Builders & Developers', href: '/solutions/builders' }, { title: 'Mandate Companies', href: '/solutions/mandate-companies' }], ['/ai/nova', '/features/reports', '/features/sales-intelligence'], [
    ['Ask questions in your AI workspace', 'Connect AcoLead with Claude or ChatGPT through the AI Connector. Ask questions using the CRM data your role can access.'],
    ['Keep answers role-limited', 'The connector respects role-based access. Staff location is not shared through the connector.'],
    ['Use real CRM numbers', 'Answers use available CRM data instead of invented estimates. Check the underlying CRM records when you need detail.'],
  ], 'Early Access'),
  '/zero-lead-breach': F('Zero Lead Breach', 'Your Customer Relationships Stay With the Company', ShieldRoundedIcon, ['S28'], [allAudiences[0]], ['/features/calling', '/features/whatsapp', '/features/team-field'], [
    ['Keep company contact channels in use', 'Use managed phone numbers and company SIMs for customer contact. Keep business communication connected to the organization.'],
    ['Mask numbers in the CRM', 'Use masked CRM numbers to help protect customer and staff contact details. Review the access controls that apply to your setup.'],
    ['Understand what is and is not covered', 'The page explains what the protection setup includes and what it does not. Confirm device, SIM and WhatsApp requirements with the team.'],
  ], 'Pilot'),
};

const defaultStatusFor = (path) => pages[path]?.status || 'Live';

const MiniScreen = ({ code, title, Icon }) => (
  <Box role="img" aria-label={`${title} interface preview, screenshot ${code}`} sx={{ p: { xs: 1.3, sm: 1.7 }, borderRadius: 3, bgcolor: '#fff', border: '1px solid #DFE8F2', boxShadow: '0 16px 38px rgba(20,44,74,.11)' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: .9 }}><Box sx={{ width: 31, height: 31, display: 'grid', placeItems: 'center', borderRadius: 1.3, bgcolor: '#E1F0FD', color: '#0859C1' }}><Icon sx={{ fontSize: 18 }} /></Box><Box><Typography sx={{ color: '#14243A', fontSize: 10, fontWeight: 800 }}>{title}</Typography><Typography sx={{ color: '#8793A3', fontSize: 7 }}>AcoLead · Product preview · {code}</Typography></Box></Box>
      <Box sx={{ display: 'flex', gap: .35 }}>{[0, 1, 2].map((x) => <Box key={x} sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: '#CED9E6' }} />)}</Box>
    </Box>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: .7, mb: 1 }}>
      {['New', 'In Progress', 'Completed'].map((label, i) => <Box key={label} sx={{ p: .8, borderRadius: 1.4, bgcolor: ['#F5F9FE', '#F8FBFF', '#F1F6FD'][i], minHeight: 40 }}><Typography sx={{ color: '#718096', fontSize: 7 }}>{label}</Typography><Box sx={{ width: `${62 + i * 9}%`, height: 4, mt: .55, borderRadius: 3, bgcolor: ['#B9D4F4', '#5791D6', '#0859C1'][i] }} /></Box>)}
    </Box>
    {[['Priya Shah', '99acres · 3 BHK', 'Ready to close'], ['Rahul Mehta', 'Google · 1 BHK', 'Follow-up due'], ['Anita Rao', 'WhatsApp · 2 BHK', 'New enquiry']].map(([name, source, state]) => <Box key={name} sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', alignItems: 'center', gap: .7, p: .75, mb: .55, borderRadius: 1.3, border: '1px solid #E9EEF5' }}><Typography sx={{ color: '#26374F', fontSize: 8, fontWeight: 700 }}>{name}</Typography><Typography sx={{ color: '#8290A1', fontSize: 7 }}>{source}</Typography><Typography sx={{ color: '#0859C1', fontSize: 7, fontWeight: 700 }}>{state}</Typography></Box>)}
    <Box sx={{ height: 22, display: 'flex', alignItems: 'end', gap: .45, px: .7, bgcolor: '#F8FBFF', borderRadius: 1, mt: .8 }}>{[35, 55, 42, 74, 62, 92, 68, 100, 78, 88, 60, 81].map((height, i) => <Box key={i} sx={{ flex: 1, height: `${height}%`, borderRadius: '2px 2px 0 0', bgcolor: i > 8 ? '#0859C1' : '#B9D4F4' }} />)}</Box>
  </Box>
);

const SalesAgentPreview = () => (
  <Box role="img" aria-label="Illustrative AcoLead AI Sales Agent conversation with a salesperson handoff" sx={{ width: '100%', maxWidth: 520, ml: 'auto', p: { xs: 1.5, sm: 2 }, borderRadius: 3, bgcolor: '#fff', border: '1px solid #DFE8F2', boxShadow: '0 18px 42px rgba(20,44,74,.12)', fontFamily: 'Poppins, sans-serif' }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1.1, mb: 1.1, borderBottom: '1px solid #EDF1F6' }}>
      <Box><Typography sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 12, fontWeight: 800 }}>AcoLead AI Sales Agent</Typography><Typography sx={{ color: '#7D8A9B', fontSize: 8 }}>WhatsApp conversation · Skyline Realty</Typography></Box>
      <Typography sx={{ color: '#718096', fontSize: 9 }}>11:04 pm</Typography>
    </Box>
    <Box sx={{ display: 'grid', gap: .9 }}>
      <Box sx={{ justifySelf: 'start', maxWidth: '72%', p: 1, borderRadius: '12px 12px 12px 3px', bgcolor: '#F1F4F8', color: '#26374F', fontSize: 10, lineHeight: 1.55 }}>Is a 3 BHK available in this project?</Box>
      <Box sx={{ justifySelf: 'end', maxWidth: '88%', p: 1.2, borderRadius: '12px 12px 3px 12px', bgcolor: '#E2EFFD', color: '#26374F', fontSize: 10, lineHeight: 1.55 }}>3 BHK homes are available. I can share the current price sheet and floor plan. Would you like to visit this weekend?</Box>
      <Box sx={{ justifySelf: 'start', maxWidth: '72%', p: 1, borderRadius: '12px 12px 12px 3px', bgcolor: '#F1F4F8', color: '#26374F', fontSize: 10, lineHeight: 1.55 }}>Sunday morning works.</Box>
      <Box sx={{ justifySelf: 'end', maxWidth: '88%', p: 1.2, borderRadius: '12px 12px 3px 12px', bgcolor: '#E2EFFD', color: '#26374F', fontSize: 10, lineHeight: 1.55 }}>Noted. Your sales manager will confirm the Sunday visit first thing tomorrow.</Box>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: .7, mt: 1.3, pt: 1, borderTop: '1px solid #E8EEF5' }}>
      <CheckCircleRoundedIcon sx={{ color: '#3B9D1D', fontSize: 15 }} />
      <Typography sx={{ color: '#3B9D1D', fontSize: 9, fontWeight: 800 }}>Handed over to the assigned salesperson with the full conversation.</Typography>
    </Box>
    <Typography sx={{ color: '#8895A7', fontSize: 8, mt: .8 }}>Illustrative conversation preview</Typography>
  </Box>
);

const SalesAgentCapabilities = () => (
  <>
    <Box component="section" sx={{ py: { xs: 5, md: 7 }, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography component="h2" sx={{ color: '#101C2E', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 27, md: 34 }, fontWeight: 800, lineHeight: 1.17, letterSpacing: '-.03em', mb: 1.5 }}>A real sales agent, not a chatbot</Typography>
            <Typography sx={{ color: '#536277', fontFamily: 'Poppins, sans-serif', fontSize: 14, lineHeight: 1.7, mb: 1.4 }}>It understands where each lead stands, uses live facts from your CRM, and does the permitted sales work.</Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.4, color: '#536277', fontFamily: 'Poppins, sans-serif', fontSize: 13, lineHeight: 1.65, '& li': { pl: .4, mb: .75 }, '& li::marker': { color: '#0859C1' } }}>
              <li>Qualifies the buyer and captures requirements such as budget, configuration and location</li>
              <li>Answers verified property questions</li>
              <li>Schedules follow-ups and site visits</li>
              <li>Hands over to your salesperson with the full conversation</li>
              <li>Gives hot and at-risk leads priority, using Lead Intent and Risk</li>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ minHeight: { xs: 'auto', md: 270 }, p: { xs: 2.2, md: 3 }, borderRadius: 3, bgcolor: '#071B3A', color: '#fff' }}>
              <Typography sx={{ color: '#9DC2F6', fontSize: 10, fontWeight: 800, letterSpacing: '.1em', mb: 1.2 }}>VERIFIED FACTS ONLY</Typography>
              <Typography component="h3" sx={{ color: '#fff', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 20, md: 23 }, fontWeight: 800, lineHeight: 1.25, mb: 1.2 }}>It never invents a price or a unit</Typography>
              <Typography sx={{ color: '#C4D2E7', fontFamily: 'Poppins, sans-serif', fontSize: 12.5, lineHeight: 1.7, mb: 1.4 }}>Prices, availability and offers come from your AcoLead data. Amenities and specifications come from your approved project material.</Typography>
              <Typography sx={{ color: '#C4D2E7', fontFamily: 'Poppins, sans-serif', fontSize: 12.5, lineHeight: 1.7 }}>If AcoLead cannot verify a live fact, such as whether a specific unit is available, the agent says it cannot confirm and either offers a verified alternative or hands over to your team.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Box component="section" sx={{ bgcolor: '#071B3A', color: '#fff', py: { xs: 3.5, md: 4.5 } }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between', gap: 2.5 }}>
        <Box>
          <Typography component="h2" sx={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 23, md: 31 }, lineHeight: 1.2, fontWeight: 800, mb: .45 }}>See it on your own leads in 20 minutes</Typography>
          <Typography sx={{ color: '#C4D2E7', fontFamily: 'Poppins, sans-serif', fontSize: { xs: 12, md: 14 } }}>For sales teams of 5 or more. Own Every Lead. Close Every Deal.</Typography>
        </Box>
        <Button component={RouterLink} to="/request-a-demo" variant="contained" sx={{ flex: '0 0 auto', bgcolor: '#fff', color: '#14243A', borderRadius: 2, px: 2.5, py: 1.15, fontWeight: 800, textTransform: 'none', '&:hover': { bgcolor: '#EAF2FC' } }}>Book a free demo</Button>
      </Container>
    </Box>
  </>
);

const NovaPreview = () => (
  <Box role="img" aria-label="Illustrative AcoLead Nova change preview using sample data" sx={{ width: '100%', maxWidth: 520, ml: 'auto', p: { xs: 1.5, sm: 2 }, borderRadius: 3, bgcolor: '#fff', border: '1px solid #DFE8F2', boxShadow: '0 18px 42px rgba(0,0,0,.16)' }}>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}><Box sx={{ p: .9, borderRadius: '12px 12px 3px 12px', bgcolor: '#E5F0FC', color: '#26374F', fontFamily: 'Poppins, sans-serif', fontSize: 10 }}>Update Rahul from my last call.</Box></Box>
    <Box sx={{ p: { xs: 1.4, sm: 1.7 }, borderRadius: 2, bgcolor: '#F1F4F8' }}>
      <Typography sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 12, mb: 1.2 }}>Here is what changed. Confirm to save.</Typography>
      {[
        ['Budget', '1.8 Cr → 1.4 Cr'],
        ['Configuration', '3 BHK'],
        ['Next step', 'Site visit, Sunday 11 am'],
      ].map(([label, value]) => <Box key={label} sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, py: .65 }}><Typography sx={{ color: '#6B788A', fontSize: 11 }}>{label}</Typography><Typography sx={{ color: '#26374F', fontSize: 11, fontWeight: 700, textAlign: 'right' }}>{value}</Typography></Box>)}
      <Box sx={{ display: 'flex', gap: .8, mt: .9 }}><Box sx={{ px: 1.5, py: .7, borderRadius: 1.3, bgcolor: '#0859C1', color: '#fff', fontSize: 9, fontWeight: 800 }}>Confirm</Box><Box sx={{ px: 1.5, py: .7, borderRadius: 1.3, bgcolor: '#fff', border: '1px solid #CFD9E5', color: '#26374F', fontSize: 9, fontWeight: 800 }}>Edit</Box></Box>
    </Box>
    <Typography sx={{ color: '#8895A7', fontSize: 8, mt: .9 }}>Illustration with sample data.</Typography>
  </Box>
);

const NovaCapabilities = () => {
  const capabilities = [
    ['Ask', 'What is happening with your leads, team and campaigns?'],
    ['Capture', 'Turn calls and conversations into CRM data.'],
    ['Act', 'Create follow-ups, schedule visits and send messages.'],
    ['Explain', 'See why a lead was assigned, or why AI took over.'],
    ['Follow through', 'Keep agreed next steps connected to the lead and your team’s work.'],
  ];

  return (
    <Box component="section" sx={{ py: { xs: 5, md: 7 }, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography component="h2" sx={{ color: '#101C2E', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 27, md: 34 }, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.17, mb: 2.5 }}>More than a chatbot that answers questions</Typography>
        <Grid container spacing={1.4}>
          {capabilities.map(([title, description], index) => <Grid item xs={12} sm={6} md={index === 4 ? 12 : 3} key={title}><Box sx={{ minHeight: index === 4 ? 92 : 135, height: '100%', p: 2, borderRadius: 2.5, bgcolor: '#F1F5FE', border: '1px solid #E0E9F8' }}><Typography sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 15, fontWeight: 800, mb: .7 }}>{title}</Typography><Typography sx={{ color: '#536277', fontFamily: 'Poppins, sans-serif', fontSize: 12.5, lineHeight: 1.6 }}>{description}</Typography></Box></Grid>)}
        </Grid>
      </Container>
    </Box>
  );
};

const NovaExpansion = () => {
  const prompts = [
    ['“Update this lead from my last call.”', 'Nova extracts changed requirements, objections, visit preference and next step, and shows the changes before saving.'],
    ['“Create a lead from this conversation.”', 'Identity, property interest, budget, source and next action, checked for duplicates and shown as a preview.'],
    ['“Conclude my last call.”', 'A call summary, the CRM update, the next action and a WhatsApp follow-up draft.'],
    ['“What should my team do right now?”', 'New leads, hot and ready-to-close opportunities, and leads that are ignored, cooling or at risk.'],
    ['“Give me the business situation, not a dashboard.”', 'Response health, the high-intent pipeline, visits and bookings, in a short brief.'],
    ['“Set up the policy in plain language.”', 'Office hours, routing and AI settings, changed only with the right permission and explicit confirmation.'],
  ];
  const roles = [
    ['Sales staff', '“Brief me before I call Rahul.”', '“Book site visit Sunday at 11 for this lead.”', '“Show my Hot leads I have not contacted today.”'],
    ['Sales managers', '“Give me the team brief for today.”', '“Why was this lead assigned to Amit?”', '“Create callback tasks for all Hot leads with missed calls.”'],
    ['Builders and owners', '“Which serious opportunities are we about to lose?”', '“Compare Project A, B and C this month.”', '“Prepare weekly sales review.”'],
    ['Channel partners', '“Add this buyer as my lead for Project X.”', '“What is the status of Rahul’s enquiry?”', '“Which of my leads booked this month?”'],
    ['Marketing', '“Which Meta campaign is giving the best qualified visits?”', '“Which channel has the lowest cost per completed visit and booking?”', '“Create three Meta lead-ad variants for Project X.”'],
    ['By voice, on mobile', '“Create lead: Rahul Shah, 3 BHK Baner, budget 1.5 Cr, met at exhibition.”', '“Add note: wife will join next visit.”', '“Call him tomorrow at 11.”'],
  ];
  const controls = [
    ['Answering', 'Search, summaries, analytics', 'No confirmation needed'],
    ['Preparing a draft', 'Lead form, message, report', 'You review before use'],
    ['Changing a record', 'Update requirement, add follow-up', 'Preview and confirm'],
    ['Acting outside the CRM', 'Send WhatsApp, schedule visit', 'Explicit confirmation'],
    ['Changing settings', 'Routing, office hours, budgets', 'Permission, confirmation and audit'],
  ];
  const products = [
    ['/ai/nova', 'AcoLead Nova', 'Works for your staff', 'Inside AcoLead, by text or voice. Asks, captures and acts on the CRM.'],
    ['/ai/sales-agent', 'AI Sales Agent', 'Talks to your buyers', 'On WhatsApp, Instagram and calls, when your team has not replied in time.'],
    ['/ai/connector', 'AI Connector', 'Works in your own AI assistant', 'Brings AcoLead answers into Claude or ChatGPT.'],
  ];
  const cardSx = { height: '100%', p: 2.2, borderRadius: 2.5, bgcolor: '#fff', border: '1px solid #E1E9F3' };
  const headingSx = { color: '#101C2E', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 27, md: 34 }, fontWeight: 800, letterSpacing: '-.03em', mb: 2.5 };
  return <>
    <Box component="section" sx={{ py: { xs: 5, md: 7 }, bgcolor: '#fff' }}><Container maxWidth="lg"><Typography component="h2" sx={headingSx}>Six things you will say to Nova</Typography><Grid container spacing={1.5}>{prompts.map(([title, body]) => <Grid item xs={12} md={4} key={title}><Box sx={{ ...cardSx, minHeight: 150 }}><Typography sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 15, fontWeight: 800, mb: .8 }}>{title}</Typography><Typography sx={{ color: '#536277', fontFamily: 'Poppins, sans-serif', fontSize: 12.5, lineHeight: 1.65 }}>{body}</Typography></Box></Grid>)}</Grid></Container></Box>
    <Box component="section" sx={{ py: { xs: 5, md: 7 }, bgcolor: '#F2F6FC' }}><Container maxWidth="lg"><Typography component="h2" sx={headingSx}>For everyone who works in AcoLead</Typography><Grid container spacing={1.5}>{roles.map(([role, ...examples]) => <Grid item xs={12} md={4} key={role}><Box sx={{ ...cardSx, minHeight: 180 }}><Typography sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 15, fontWeight: 800, mb: 1 }}>{role}</Typography>{examples.map((line) => <Typography key={line} sx={{ color: '#536277', fontFamily: 'Poppins, sans-serif', fontSize: 12, lineHeight: 1.6, mb: .8 }}>{line}</Typography>)}</Box></Grid>)}</Grid></Container></Box>
    <Box component="section" sx={{ py: { xs: 5, md: 7 }, bgcolor: '#fff' }}><Container maxWidth="lg"><Grid container spacing={{ xs: 3, md: 5 }} alignItems="flex-start"><Grid item xs={12} md={5}><Typography component="h2" sx={headingSx}>You stay in control</Typography>{['Nova works only within your own role and data access.', 'Prices, inventory, intent and risk come from AcoLead, not from the AI’s guess.', 'When Nova fills fields from a conversation, unknown information stays unknown.', 'Every change Nova makes is recorded.', 'AI is optional. With Nova off, your CRM works as normal.'].map((line) => <Typography key={line} sx={{ color: '#536277', fontFamily: 'Poppins, sans-serif', fontSize: 13, lineHeight: 1.65, mb: 1 }}>• &nbsp;{line}</Typography>)}</Grid><Grid item xs={12} md={7}><Box sx={{ overflowX: 'auto', border: '1px solid #E1E9F3', borderRadius: 2.5 }}><Box component="table" sx={{ width: '100%', minWidth: 520, borderCollapse: 'collapse', '& th, & td': { textAlign: 'left', p: 1.35, borderBottom: '1px solid #E1E9F3', color: '#536277', fontFamily: 'Poppins, sans-serif', fontSize: 12 }, '& th': { bgcolor: '#F2F6FC', color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }, '& tr:last-child td': { borderBottom: 0 } }}><thead><tr><th>What Nova is doing</th><th>Example</th><th>Your control</th></tr></thead><tbody>{controls.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></Box></Box></Grid></Grid></Container></Box>
    <Box component="section" sx={{ py: { xs: 5, md: 7 }, bgcolor: '#F2F6FC' }}><Container maxWidth="lg"><Typography component="h2" sx={headingSx}>Three AI products, three jobs</Typography><Grid container spacing={1.5}>{products.map(([href, title, subhead, body], i) => <Grid item xs={12} md={4} key={href}><Box component={RouterLink} to={href} sx={{ ...cardSx, display: 'block', minHeight: 150, textDecoration: 'none', border: i === 0 ? '2px solid #3B82F6' : '1px solid #E1E9F3' }}><Typography sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 16, mb: .7 }}>{title}</Typography><Typography sx={{ color: '#14243A', fontWeight: 700, fontSize: 12, mb: .7 }}>{subhead}</Typography><Typography sx={{ color: '#536277', fontFamily: 'Poppins, sans-serif', fontSize: 12, lineHeight: 1.6 }}>{body}</Typography></Box></Grid>)}</Grid></Container></Box>
    <Box component="section" id="product-demo" sx={{ bgcolor: '#071B3A', color: '#fff', py: { xs: 4, md: 5 }, scrollMarginTop: '88px' }}><Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between', gap: 2.5 }}><Box><Typography component="h2" sx={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 24, md: 31 }, lineHeight: 1.2, fontWeight: 800, mb: .5 }}>Nova is launching soon</Typography><Typography sx={{ color: '#C4D2E7', fontFamily: 'Poppins, sans-serif', fontSize: { xs: 12, md: 14 } }}>Tell us you are interested and we will let you know when it is ready for your team.</Typography></Box><Button component={RouterLink} to="/request-a-demo" variant="contained" sx={{ flex: '0 0 auto', bgcolor: '#fff', color: '#14243A', borderRadius: 2, px: 2.5, py: 1.15, fontWeight: 800, textTransform: 'none', '&:hover': { bgcolor: '#EAF2FC' } }}>Get notified at launch</Button></Container></Box>
  </>;
};

const NovaHero = ({ config }) => (
  <Box sx={{ bgcolor: '#071B3A', color: '#fff', py: { xs: 5, md: 7 } }}>
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.8 }}>
            <Typography sx={{ color: '#9DC2F6', fontSize: 10, fontWeight: 800, letterSpacing: '.1em' }}>ACOLEAD NOVA</Typography>
            <Chip label="Launching soon" size="small" sx={{ height: 22, bgcolor: '#DDF3E4', color: '#246B38', fontSize: 9, fontWeight: 800 }} />
          </Box>
          <Typography component="h1" sx={{ color: '#fff', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 36, md: 48 }, fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.1, mb: 1.7 }}>{config.headline}</Typography>
          <Typography sx={{ color: '#C4D2E7', fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.7, mb: 2.5 }}>{config.description}</Typography>
          <Button component="a" href="#product-demo" variant="contained" sx={{ bgcolor: '#fff', color: '#14243A', px: 2.4, py: 1.25, borderRadius: 2, fontWeight: 800, textTransform: 'none', '&:hover': { bgcolor: '#EAF2FC' } }}>Get notified at launch</Button>
        </Grid>
        <Grid item xs={12} md={6}><NovaPreview /></Grid>
      </Grid>
    </Container>
  </Box>
);

const ConnectorPreview = () => (
  <Box role="img" aria-label="Illustrative AI Connector answer using sample CRM data" sx={{ width: '100%', maxWidth: 520, ml: 'auto', p: { xs: 1.5, sm: 2 }, borderRadius: 3, bgcolor: '#fff', border: '1px solid #DFE8F2', boxShadow: '0 18px 42px rgba(20,44,74,.13)' }}>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}><Box sx={{ p: 1, borderRadius: '12px 12px 3px 12px', bgcolor: '#E5F0FC', color: '#26374F', fontSize: 11 }}>Which serious opportunities are we about to lose?</Box></Box>
    <Box sx={{ p: { xs: 1.5, sm: 1.8 }, borderRadius: 2, bgcolor: '#F1F4F8' }}><Typography sx={{ color: '#26374F', fontSize: 12, fontWeight: 700, mb: .8 }}>Three ready-to-close leads are flagged At Risk today:</Typography>{[['Priya', 'No staff action today'], ['Kamal', 'Visit cancelled, not rescheduled'], ['Suresh', 'Follow-up overdue']].map(([name, detail]) => <Box key={name} sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, py: .45 }}><Typography sx={{ color: '#14243A', fontSize: 11, fontWeight: 800 }}>{name}</Typography><Typography sx={{ color: '#6B788A', fontSize: 11, textAlign: 'right' }}>{detail}</Typography></Box>)}</Box>
    <Typography sx={{ color: '#8895A7', fontSize: 9, mt: 1 }}>Illustration with sample data.</Typography>
  </Box>
);

const ConnectorCapabilities = () => {
  const asks = [
    ['Pipeline and funnel', '“How many of this month’s leads reached a site visit and a booking?”'],
    ['Leads at risk', '“Show Hot or Ready-to-Close leads that are At Risk.”'],
    ['Site visits and bookings', '“How many site visits are planned for tomorrow, and which are overdue?”'],
    ['Team performance', '“Who has the most overdue follow-ups?”'],
    ['Marketing ROI', '“Which source is producing the best site visits and bookings?”'],
    ['Attendance and availability', '“Who is available to take new leads right now?”'],
    ['My Day', '“What should I do first today?”'],
    ['Lead lookup', '“Find leads for this project that nobody has contacted.”'],
  ];
  const controls = [
    ['Sign in as yourself', 'You connect with your own AcoLead account. Nothing is shared without your sign-in.'],
    ['Limited to your role', 'Owners and admins see the whole company, managers their team, and staff their own leads.'],
    ['Real numbers only', 'Figures come from AcoLead, using the same definitions as your dashboards. The assistant does not estimate them.'],
    ['No staff location', 'AcoLead never shares staff location with AI assistants.'],
  ];
  return <>
    <Box component="section" sx={{ py: { xs: 5, md: 7 }, bgcolor: '#fff' }}><Container maxWidth="lg"><Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 27, md: 34 }, fontWeight: 800, mb: .8 }}>What you can ask</Typography><Typography sx={{ color: '#596A80', fontSize: 14, mb: 3 }}>The business situation, not a dashboard.</Typography><Grid container spacing={1.5}>{asks.map(([title, example], i) => <Grid item xs={12} md={i > 5 ? 6 : 4} key={title}><Box sx={{ height: '100%', minHeight: 110, p: 2, border: '1px solid #E1E9F3', borderRadius: 2.5, bgcolor: '#fff' }}><Typography sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 14, mb: .7 }}>{title}</Typography><Typography sx={{ color: '#596A80', fontSize: 12, lineHeight: 1.6 }}>{example}</Typography></Box></Grid>)}</Grid></Container></Box>
    <Box component="section" sx={{ py: { xs: 5, md: 7 }, bgcolor: '#071B3A' }}><Container maxWidth="lg"><Typography sx={{ color: '#9DC2F6', fontSize: 10, fontWeight: 800, letterSpacing: '.1em', mb: 1 }}>ACCESS AND CONTROL</Typography><Typography component="h2" sx={{ maxWidth: 680, color: '#fff', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 27, md: 34 }, fontWeight: 800, mb: 3 }}>The assistant sees only what you can see</Typography><Grid container spacing={1.5}>{controls.map(([title, body]) => <Grid item xs={12} sm={6} md={title.startsWith('No staff') ? 12 : 4} key={title}><Box sx={{ height: '100%', minHeight: 120, p: 2, borderRadius: 2.5, bgcolor: '#112B50', border: '1px solid #1F3F6B' }}><Typography sx={{ color: '#fff', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 14, mb: .8 }}>{title}</Typography><Typography sx={{ color: '#C4D2E7', fontSize: 12, lineHeight: 1.65 }}>{body}</Typography></Box></Grid>)}</Grid></Container></Box>
    <Box component="section" sx={{ py: { xs: 5, md: 7 }, bgcolor: '#fff' }}><Container maxWidth="lg"><Grid container spacing={{ xs: 3, md: 5 }} alignItems="center"><Grid item xs={12} md={6}><Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 26, md: 32 }, fontWeight: 800, mb: 1.5 }}>Connect in three steps</Typography>{['Add AcoLead as a connector in your AI assistant.', 'Sign in with your AcoLead account.', 'Ask your first question.'].map((step, i) => <Typography key={step} sx={{ color: '#596A80', fontSize: 13, lineHeight: 1.7, mb: .8 }}>{i + 1}. &nbsp;{step}</Typography>)}<Typography sx={{ color: '#7A8798', fontSize: 11, lineHeight: 1.6, mt: 1.5 }}>The connector uses the Model Context Protocol (MCP), an open standard for connecting AI assistants to business software.</Typography></Grid><Grid item xs={12} md={6}><Box sx={{ p: 2.5, borderRadius: 2.5, bgcolor: '#F1F5FE', border: '1px solid #E1E9F3' }}><Typography sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 16, mb: 1 }}>One set of facts across every AI surface</Typography><Typography sx={{ color: '#596A80', fontSize: 13, lineHeight: 1.7, mb: 1.5 }}>The connector, the AI Sales Agent and AcoLead Nova all use the same AcoLead business rules. A lead’s intent, a unit’s price or a team’s numbers mean the same thing wherever you ask.</Typography><Box sx={{ display: 'flex', gap: 2 }}><Link component={RouterLink} to="/ai/sales-agent" underline="hover" sx={{ color: '#0859C1', fontSize: 12, fontWeight: 800 }}>AI Sales Agent</Link><Link component={RouterLink} to="/ai/nova" underline="hover" sx={{ color: '#0859C1', fontSize: 12, fontWeight: 800 }}>AcoLead Nova</Link></Box></Box></Grid></Grid></Container></Box>
    <Box component="section" id="product-demo" sx={{ bgcolor: '#071B3A', color: '#fff', py: { xs: 4, md: 5 }, scrollMarginTop: '88px' }}><Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between', gap: 2.5 }}><Box><Typography component="h2" sx={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 24, md: 31 }, fontWeight: 800, mb: .5 }}>Want to try the connector?</Typography><Typography sx={{ color: '#C4D2E7', fontFamily: 'Poppins, sans-serif', fontSize: { xs: 12, md: 14 } }}>The AI Connector is in early access for AcoLead customers.</Typography></Box><Button component={RouterLink} to="/request-a-demo" variant="contained" sx={{ bgcolor: '#fff', color: '#14243A', borderRadius: 2, px: 2.5, py: 1.15, fontWeight: 800, textTransform: 'none', '&:hover': { bgcolor: '#EAF2FC' } }}>Request early access</Button></Container></Box>
  </>;
};

const ZeroLeadHero = () => (
  <Box sx={{ bgcolor: '#071B3A', color: '#fff', py: { xs: 5, md: 7 } }}><Container maxWidth="lg"><Grid container spacing={{ xs: 4, md: 6 }} alignItems="center"><Grid item xs={12} md={6}><Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.8 }}><Typography sx={{ color: '#9DC2F6', fontSize: 10, fontWeight: 800, letterSpacing: '.1em' }}>ACOLEAD ZERO LEAD BREACH</Typography><Chip label="Pilot programme" size="small" sx={{ height: 22, bgcolor: '#FFF1CF', color: '#815700', fontSize: 9, fontWeight: 800 }} /></Box><Typography component="h1" sx={{ color: '#fff', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 35, md: 47 }, fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.1, mb: 1.7 }}>When a salesperson leaves, your customer relationships should not leave with them</Typography><Typography sx={{ color: '#C4D2E7', fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.7, mb: 2.5 }}>On the AcoLead phone, customer numbers are never exposed unmonitored. Taking leads stops being easy and starts being visible.</Typography><Button component={RouterLink} to="/request-a-demo" variant="contained" sx={{ bgcolor: '#fff', color: '#14243A', px: 2.4, py: 1.25, borderRadius: 2, fontWeight: 800, textTransform: 'none', '&:hover': { bgcolor: '#EAF2FC' } }}>Ask about the pilot</Button></Grid><Grid item xs={12} md={6}><Box sx={{ maxWidth: 480, ml: 'auto', p: { xs: 2, md: 2.3 }, borderRadius: 3, bgcolor: '#112B50', border: '1px solid #1F3F6B' }}><Typography sx={{ color: '#C4D2E7', fontSize: 10, mb: 1 }}>What your salesperson sees</Typography><Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, p: 1.4, borderRadius: 2, bgcolor: '#fff' }}><Box><Typography sx={{ color: '#14243A', fontSize: 14, fontWeight: 800 }}>Yogesh Ji</Typography><Typography sx={{ color: '#6B788A', fontSize: 10 }}>3 BHK enquiry · number hidden</Typography></Box><Box sx={{ display: 'flex', gap: .7 }}><Box sx={{ px: 1.2, py: .7, borderRadius: 4, bgcolor: '#E1F0FD', color: '#0859C1', fontSize: 10, fontWeight: 800 }}>Call</Box><Box sx={{ px: 1.2, py: .7, borderRadius: 4, bgcolor: '#DDF3E4', color: '#246B38', fontSize: 10, fontWeight: 800 }}>WhatsApp</Box></Box></Box><Typography sx={{ color: '#C4D2E7', fontSize: 11, lineHeight: 1.6, mt: 1.2 }}>Staff work by name and tap to call or send. They never see the digits.</Typography><Typography sx={{ color: '#9AAAC0', fontSize: 9, mt: .8 }}>Illustration.</Typography></Box></Grid></Grid></Container></Box>
);

const ZeroLeadCapabilities = () => {
  const methods = [
    ['Removed', 'No path to the number exists.', ['The phone runs only AcoLead, the AcoLead dialler and WhatsApp', 'Names and aliases only on AcoLead screens, exports and reports', 'Incoming chats are matched to a lead before they are seen', 'Exports are restricted to the owner role']],
    ['Monitored', 'A path exists, so it is watched.', ['The few WhatsApp screens that could show a raw number are watched', 'Honest staff have no reason to open them, so false alarms stay low', 'Checks run on the phone, and ordinary chat screens are discarded there', 'If monitoring stops, the owner sees it. It is never silent']],
    ['Reviewed', 'The owner decides, with evidence.', ['Alerts go to the owner and named stakeholders only, never managers or team leads', 'Alerts always say “review needed”. The product never labels a person', 'A graduated response: no action rests on a single alert', 'Staff always know monitoring is active']],
  ];
  const comparison = [
    ['CRM masking only', 'Hides numbers in the CRM', 'Staff still use personal phones and WhatsApp, so conversations sit outside the company'],
    ['Virtual numbers, IVR, API messaging', 'Route calls and messages through a platform', 'Direct SIM calls and normal WhatsApp stay, because that is how builders sell'],
    ['Generic device management', 'Locks the phone', 'Adds lead context, monitored screens and a review workflow'],
    ['Employment contracts and non-solicit clauses', 'Legal remedy after the fact', 'Needs evidence of what happened, which AcoLead provides'],
    ['Do nothing', 'Free', 'Loss stays invisible until a lead is already gone'],
  ];
  return <>
    <Box component="section" sx={{ py: { xs: 5, md: 7 }, bgcolor: '#fff' }}><Container maxWidth="lg"><Grid container spacing={{ xs: 3, md: 5 }} alignItems="flex-start"><Grid item xs={12} md={6}><Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 27, md: 34 }, fontWeight: 800, mb: 1.2 }}>The problem</Typography><Typography sx={{ color: '#596A80', fontSize: 14, lineHeight: 1.7, mb: 1.2 }}>In Indian real estate the sale runs on phone calls and WhatsApp. A salesperson who leaves can take the customer relationships built at the builder’s cost.</Typography><Typography sx={{ color: '#596A80', fontSize: 13, lineHeight: 1.7 }}>Hiding numbers in the CRM is not enough. Staff still use personal phones and WhatsApp, so the conversations sit outside the company.</Typography></Grid><Grid item xs={12} md={6}><Box sx={{ p: 2.3, borderRadius: 2.5, bgcolor: '#F1F5FE', border: '1px solid #E1E9F3' }}><Typography sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 16, mb: 1 }}>What you get</Typography>{['A managed phone for each salesperson', 'Organisation SIMs and company numbers', 'A company-owned WhatsApp account', 'A masked AcoLead CRM and dialler', 'Monitoring and evidence when a number could be exposed'].map((item) => <Typography key={item} sx={{ color: '#596A80', fontSize: 13, lineHeight: 1.7, mb: .6 }}>• &nbsp;{item}</Typography>)}</Box></Grid></Grid></Container></Box>
    <Box component="section" sx={{ py: { xs: 5, md: 7 }, bgcolor: '#fff' }}><Container maxWidth="lg"><Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 27, md: 34 }, fontWeight: 800, mb: .7 }}>How it works</Typography><Typography sx={{ color: '#596A80', fontSize: 13, mb: 2.5 }}>Every place a number could appear on the phone is either removed or monitored.</Typography><Grid container spacing={1.5}>{methods.map(([title, summary, bullets]) => <Grid item xs={12} md={4} key={title}><Box sx={{ height: '100%', p: 2.2, border: '1px solid #E1E9F3', borderRadius: 2.5, bgcolor: '#fff' }}><Typography sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 18, mb: .8 }}>{title}</Typography><Typography sx={{ color: '#14243A', fontWeight: 700, fontSize: 12, mb: 1 }}>{summary}</Typography>{bullets.map((item) => <Typography key={item} sx={{ color: '#596A80', fontSize: 11.5, lineHeight: 1.6, mb: .65 }}>• &nbsp;{item}</Typography>)}</Box></Grid>)}</Grid><Box sx={{ mt: 2, p: 2, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' }, gap: 1, border: '1px solid #E1E9F3', borderRadius: 2.5, bgcolor: '#F1F5FE' }}><Typography sx={{ color: '#14243A', fontWeight: 800, fontSize: 13 }}>Walk-in visitors are covered too</Typography><Typography sx={{ color: '#596A80', fontSize: 12, lineHeight: 1.6 }}>The visitor enters their own number on a tablet or by QR code and verifies it with an OTP. Reception sees only a token, the assigned manager and a waiting status.</Typography></Box></Container></Box>
    <Box component="section" sx={{ py: { xs: 5, md: 7 }, bgcolor: '#F2F6FC' }}><Container maxWidth="lg"><Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 27, md: 34 }, fontWeight: 800, mb: .8 }}>What you get, and what you do not</Typography><Typography sx={{ color: '#596A80', fontSize: 13, lineHeight: 1.7, mb: 2.5 }}>We cannot stop a salesperson sharing a personal number in person, or memorising one. We make quiet copying from the company phone hard, visible and evidenced.</Typography><Grid container spacing={1.5}><Grid item xs={12} md={6}><Box sx={{ ...{ height: '100%', p: 2.3, borderRadius: 2.5, bgcolor: '#fff', border: '1px solid #C8DAF3' } }}><Typography sx={{ color: '#0859C1', fontWeight: 800, fontSize: 15, mb: 1 }}>You get</Typography>{['Removed or monitored number-exposure paths on the managed phone', 'Early warning and evidence for review', 'Company ownership of numbers and WhatsApp', 'A visible deterrent from day one'].map((item) => <Typography key={item} sx={{ color: '#26374F', fontSize: 12, lineHeight: 1.65, mb: .8 }}>{item}</Typography>)}</Box></Grid><Grid item xs={12} md={6}><Box sx={{ height: '100%', p: 2.3, borderRadius: 2.5, bgcolor: '#fff', border: '1px solid #E1E9F3' }}><Typography sx={{ color: '#536277', fontWeight: 800, fontSize: 15, mb: 1 }}>You do not get</Typography>{['A guarantee that no lead can ever be taken', 'Proof of intent from a single alert', 'Protection against personal numbers shared in person', 'A substitute for employment contracts and HR action'].map((item) => <Typography key={item} sx={{ color: '#26374F', fontSize: 12, lineHeight: 1.65, mb: .8 }}>{item}</Typography>)}</Box></Grid></Grid></Container></Box>
    <Box component="section" sx={{ py: { xs: 5, md: 7 }, bgcolor: '#fff' }}><Container maxWidth="lg"><Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 27, md: 34 }, fontWeight: 800, mb: 2 }}>How it compares</Typography><Box sx={{ overflowX: 'auto', border: '1px solid #E1E9F3', borderRadius: 2.5 }}><Box component="table" sx={{ width: '100%', minWidth: 700, borderCollapse: 'collapse', '& th, & td': { textAlign: 'left', p: 1.4, borderBottom: '1px solid #E1E9F3', color: '#596A80', fontSize: 12, lineHeight: 1.5 }, '& th': { bgcolor: '#F2F6FC', color: '#14243A', fontWeight: 800 }, '& td:first-of-type': { color: '#14243A', fontWeight: 700 }, '& tr:last-child td': { borderBottom: 0 } }}><thead><tr><th>Alternative</th><th>What it does</th><th>Where AcoLead differs</th></tr></thead><tbody>{comparison.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></Box></Box></Container></Box>
    <Box component="section" id="product-demo" sx={{ bgcolor: '#071B3A', color: '#fff', py: { xs: 4, md: 5 }, scrollMarginTop: '88px' }}><Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between', gap: 2.5 }}><Box><Typography component="h2" sx={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 24, md: 31 }, fontWeight: 800, mb: .5 }}>Prove it with a 30-day pilot</Typography><Typography sx={{ color: '#C4D2E7', fontFamily: 'Poppins, sans-serif', fontSize: { xs: 12, md: 14 } }}>We are running Zero Lead Breach with design-partner builders first. Ask us whether your team is a fit.</Typography></Box><Button component={RouterLink} to="/request-a-demo" variant="contained" sx={{ bgcolor: '#fff', color: '#14243A', borderRadius: 2, px: 2.5, py: 1.15, fontWeight: 800, textTransform: 'none', '&:hover': { bgcolor: '#EAF2FC' } }}>Ask about the pilot</Button></Container></Box>
  </>;
};

const PostSalesInterestPage = () => {
  const featureItems = [
    [PaymentsRoundedIcon, 'Payment plans', 'Create flexible payment plans per unit or project. The payment-plan types shipping first are being confirmed with product.'],
    [EventAvailableRoundedIcon, 'Instalments, loans and dues', 'Track each instalment, the home-loan disbursement and what is outstanding, per buyer and per project.'],
    [ReceiptLongRoundedIcon, 'Demand letters and receipts', 'Issue demand letters and receipts from AcoLead.'],
    [NotificationsActiveRoundedIcon, 'Automated reminders', 'Payment reminders go out before and after each due date.'],
    [PersonAddAlt1RoundedIcon, 'One customer record', 'The buyer’s enquiry, visits, booking and payments sit on one timeline.'],
  ];
  const iconDisc = { width: 58, height: 58, flex: '0 0 58px', borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: '#E1F0FD', color: '#0859C1', boxShadow: 'inset 0 3px 5px rgba(255,255,255,.95), 0 7px 15px rgba(8,89,193,.13)' };
  return <>
    <Box component="section" sx={{ bgcolor: '#F2F6FC', py: { xs: 5, md: 7 } }}><Container maxWidth="lg"><Breadcrumbs sx={{ mb: 2 }}><Link component={RouterLink} to="/features" underline="hover" sx={{ color: '#536277', fontSize: 12 }}>Features</Link><Typography sx={{ color: '#14243A', fontSize: 12 }}>Post-Sales Payment Management</Typography></Breadcrumbs><Grid container spacing={{ xs: 4, md: 6 }} alignItems="center"><Grid item xs={12} md={6}><Typography sx={{ color: '#0859C1', textTransform: 'uppercase', letterSpacing: '.08em', fontSize: 11, fontWeight: 800, mb: 1.2 }}>POST-SALES PAYMENT MANAGEMENT</Typography><Chip label="Launching Soon" size="small" sx={{ bgcolor: '#E1F0FD', color: '#0859C1', fontWeight: 700, mb: 1.2 }} /><Typography component="h1" sx={{ color: '#101C2E', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 36, md: 48 }, fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.1, mb: 1.7 }}>Track Every Instalment From Booking to Possession</Typography><Box sx={{ width: 48, height: 4, borderRadius: 3, bgcolor: '#3B9D1D', mb: 1.7 }} /><Typography sx={{ color: '#536277', fontSize: 16, lineHeight: 1.65, mb: 2.3 }}>Flexible payment plans, instalments, loans and dues in the same CRM as the sale.</Typography><Button component="a" href="#post-sales-interest" variant="contained" sx={{ bgcolor: '#0859C1', px: 2.4, py: 1.2, borderRadius: 2, fontWeight: 700, textTransform: 'none', '&:hover': { bgcolor: '#06489D' } }}>Get Early Access</Button></Grid><Grid item xs={12} md={6}><Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 1.3, maxWidth: 480, ml: 'auto' }}>{featureItems.slice(0, 4).map(([Icon, title]) => <Box key={title} sx={{ minHeight: 130, p: 1.8, borderRadius: 2.5, bgcolor: '#fff', border: '1px solid #E1E9F3' }}><Box sx={{ ...iconDisc, width: 48, height: 48, mb: 1.1 }}><Icon sx={{ fontSize: 24 }} /></Box><Typography sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 12, fontWeight: 800 }}>{title}</Typography><Typography sx={{ color: '#7A8798', fontSize: 9, mt: .4 }}>For builders</Typography></Box>)}</Box></Grid></Grid></Container></Box>
    <Box component="section" sx={{ py: { xs: 5, md: 7 }, bgcolor: '#fff' }}><Container maxWidth="lg"><Grid container spacing={{ xs: 3, md: 5 }} alignItems="center"><Grid item xs={12} md={5}><Box sx={{ ...iconDisc, mb: 1.5 }}><ApartmentRoundedIcon sx={{ fontSize: 28 }} /></Box><Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 27, md: 34 }, fontWeight: 800, mb: 1 }}>The problem</Typography><Typography sx={{ color: '#596A80', fontSize: 14, lineHeight: 1.7 }}>After booking, dues move to Excel and the sales context is lost; customers chase receipts, accounts chase customers.</Typography></Grid><Grid item xs={12} md={7}><Grid container spacing={1.5}>{featureItems.map(([Icon, title, body], index) => <Grid item xs={12} sm={index === 4 ? 12 : 6} key={title}><Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.4, height: '100%', minHeight: 135, p: 1.8, border: '1px solid #E1E9F3', borderRadius: 2.5, bgcolor: '#FFFAFA' }}><Box sx={{ ...iconDisc, width: 48, height: 48, flex: '0 0 48px' }}><Icon sx={{ fontSize: 24 }} /></Box><Box><Typography sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 13, fontWeight: 800, mb: .5 }}>{index + 3}. {title}</Typography><Typography sx={{ color: '#596A80', fontSize: 11.5, lineHeight: 1.6 }}>{body}</Typography></Box></Box></Grid>)}</Grid></Grid></Grid></Container></Box>
    <Box id="post-sales-interest" sx={{ scrollMarginTop: '88px' }}><BookDemo includeActiveBookings title="Get Early Access" description="Tell us about your team and active bookings. We will share the confirmed launch scope and let you know when Post-Sales Payment Management is ready." submitLabel="Get Early Access" /></Box>
  </>;
};

const ProductDetailPage = () => {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, '') || '/';
  const page = pages[path];
  const baseConfig = page || F('AcoLead Feature', 'See how AcoLead helps your real estate sales team.', CheckCircleRoundedIcon, ['S01'], allAudiences, [], [['See AcoLead in action', 'Explore the tools your real estate sales team needs.']]);
  const config = path === '/ai/sales-agent' ? {
    ...baseConfig,
    description: 'Most buyers enquire after office hours and choose whoever answers first. AcoLead’s AI Sales Agent replies on WhatsApp and Instagram, calls the lead, and passes ready buyers to your team.',
  } : path === '/ai/nova' ? {
    ...baseConfig,
    description: 'Nova understands, captures, explains, prepares and, when permitted, operates your CRM using natural language, by text or voice. Fewer forms, better CRM data and faster next actions.',
  } : path === '/ai/connector' ? {
    ...baseConfig,
    description: 'Connect AcoLead to the AI assistant you already use. Ask about leads, site visits, bookings, team performance and marketing spend in plain language, and get answers from your live CRM data.',
  } : baseConfig;
  const status = defaultStatusFor(path);

  const related = (config.related || []).map((href) => ({ href, item: pages[href] })).filter(({ item }) => item);
  const screenAt = (index) => config.screens[index % config.screens.length];
  const defaultSteps = [
    ['Set up your workflow', `Configure ${config.title.toLowerCase()} around your projects, team and process.`],
    ['Use it in daily sales work', config.benefits[0][1].split('. ')[0] + '.'],
    ['Track progress and follow up', 'Keep activity connected to the lead and review what needs attention next.'],
  ];
  const steps = path === '/ai/sales-agent' ? [
    ['Salesperson first', 'Your salesperson replies when available and remains the primary contact for the buyer.'],
    ['AI covers the gap', 'When the team is unavailable, the agent can respond on WhatsApp, Instagram or AI calling using verified facts.'],
    ['Hand ready buyers to the team', 'Pass the conversation and buyer context to the assigned salesperson for the next step.'],
  ] : path === '/ai/nova' ? [
    ['Ask by text or voice', 'Ask Nova about your leads, team and campaigns in natural language.'],
    ['Review the proposed changes', 'Check the CRM updates Nova prepared from the call or conversation.'],
    ['Confirm to save', 'Approve or edit the proposed changes before they are saved to AcoLead.'],
  ] : defaultSteps;
  const questions = [
    [`What does ${config.title} help my team do?`, config.description + ' ' + config.benefits[0][1]],
    ['Who is this feature for?', `It is designed for ${config.audiences.map((a) => a.title).join(', ')}.`],
    [`How does ${config.title} work with AcoLead?`, 'It fits into your AcoLead workflow and keeps relevant activity connected to your CRM records. The team can walk through the setup in a demo.'],
  ];

  useEffect(() => {
    const id = 'acolead-faq-structured-data';
    const existing = document.getElementById(id);
    if (existing) existing.remove();
    if (path === '/features/post-sales' && status === 'Launching Soon') return undefined;
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: questions.map(([name, answer]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text: answer } })) });
    document.head.appendChild(script);
    return () => script.remove();
    // questions are derived from the route's stable page configuration.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, status, config.title]);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', '@media (max-width:1023.95px)': { pb: 8 } }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        {path === '/features/post-sales' && status === 'Launching Soon' ? <PostSalesInterestPage /> : <>
        {path === '/ai/nova' ? <NovaHero config={config} /> : path === '/zero-lead-breach' ? <ZeroLeadHero /> : <Box sx={{ bgcolor: '#F2F6FC', borderBottom: '1px solid #E1E9F3', py: { xs: 5, md: 7 } }}>
          <Container maxWidth="lg">
            <Breadcrumbs sx={{ mb: 2 }}>
              {path.startsWith('/ai/') ? <Typography sx={{ color: '#536277', fontSize: 12 }}>AI</Typography> : path === '/zero-lead-breach' ? <Typography sx={{ color: '#536277', fontSize: 12 }}>Protection</Typography> : <Link component={RouterLink} to="/features" underline="hover" sx={{ color: '#536277', fontSize: 12 }}>Features</Link>}
              <Typography sx={{ color: '#14243A', fontSize: 12 }}>{config.title}</Typography>
            </Breadcrumbs>
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography sx={{ color: '#0859C1', textTransform: 'uppercase', letterSpacing: '.08em', fontSize: 11, fontWeight: 800, mb: 1.2 }}>{config.title}</Typography>
                {status !== 'Live' && <Chip label={status} size="small" sx={{ bgcolor: '#E1F0FD', color: '#0859C1', fontWeight: 700, mb: 1.2 }} />}
                <Typography component="h1" sx={{ color: '#101C2E', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 36, md: 48 }, fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.1, mb: 1.7 }}>{config.headline}</Typography>
                <Box sx={{ width: 48, height: 4, borderRadius: 3, bgcolor: '#3B9D1D', mb: 1.7 }} />
                <Typography sx={{ color: '#536277', fontSize: 16, lineHeight: 1.65, mb: 2.3 }}>{config.description}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2 }}>
                  <Button component={RouterLink} to="/request-a-demo" variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={{ bgcolor: '#0859C1', px: 2.4, py: 1.2, borderRadius: 2, fontWeight: 700, textTransform: 'none', '&:hover': { bgcolor: '#06489D' } }}>{path === '/ai/connector' ? 'Request early access' : 'Book a Free Demo'}</Button>
                  {path === '/ai/sales-agent' && <Button component="a" href="#how-it-works" variant="outlined" sx={{ bgcolor: '#fff', borderColor: '#B9CBE0', color: '#14243A', px: 2.1, py: 1.2, borderRadius: 2, fontWeight: 700, textTransform: 'none' }}>How Human First Works</Button>}
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>{path === '/ai/sales-agent' ? <SalesAgentPreview /> : path === '/ai/connector' ? <ConnectorPreview /> : <MiniScreen code={screenAt(0)} title={config.title} Icon={config.Icon} />}</Grid>
            </Grid>
          </Container>
        </Box>}

        {path === '/ai/connector' ? <ConnectorCapabilities /> : path === '/zero-lead-breach' ? <ZeroLeadCapabilities /> : path === '/ai/nova' ? <NovaCapabilities /> : <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
          {config.benefits.map(([title, description], index) => <Grid container spacing={{ xs: 2.5, md: 5 }} alignItems="center" key={title} sx={{ mb: index === config.benefits.length - 1 ? 0 : { xs: 4, md: 6 } }}>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: index % 2 === 0 ? 1 : 2 } }}><Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 23, md: 28 }, fontWeight: 800, textTransform: 'capitalize', mb: 1 }}>{title}</Typography><Typography sx={{ color: '#596A80', fontSize: 14, lineHeight: 1.7 }}>{description}</Typography></Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: index % 2 === 0 ? 2 : 1 } }}><MiniScreen code={screenAt(index + 1)} title={title} Icon={config.Icon} /></Grid>
          </Grid>)}
        </Container>}

        {path !== '/ai/connector' && path !== '/zero-lead-breach' && <Box sx={{ bgcolor: '#F8FBFF', py: { xs: 5, md: 7 } }}>
          <Container maxWidth="lg" id="how-it-works" sx={{ scrollMarginTop: '96px' }}>
            <Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 25, md: 30 }, fontWeight: 800, mb: 2.5 }}>How it works</Typography>
            <Grid container spacing={1.5}>{steps.map(([title, description], i) => <Grid item xs={12} md={4} key={title}><Box sx={{ display: 'flex', gap: 1.2, height: '100%', p: 2, border: '1px solid #E1E9F3', borderRadius: 2.5, bgcolor: '#fff' }}><Box sx={{ flex: '0 0 30px', width: 30, height: 30, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: '#E1F0FD', color: '#0859C1', fontWeight: 800, fontSize: 13 }}>{i + 1}</Box><Box><Typography sx={{ color: '#14243A', fontSize: 14, fontWeight: 800, mb: .5 }}>{title}</Typography><Typography sx={{ color: '#596A80', fontSize: 12, lineHeight: 1.6 }}>{description}</Typography></Box></Box></Grid>)}</Grid>
          </Container>
        </Box>}

        {path !== '/ai/connector' && path !== '/zero-lead-breach' && <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
          <Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 25, md: 30 }, fontWeight: 800, mb: 2 }}>Who it is for</Typography>
          <Grid container spacing={1.3}>{config.audiences.map((audience) => <Grid item xs={12} sm={6} md={3} key={audience.href}><Box component={RouterLink} to={audience.href} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, height: '100%', minHeight: 64, p: 1.5, borderRadius: 2, border: '1px solid #E1E9F3', bgcolor: '#FFFAFA', color: '#0859C1', fontSize: 13, fontWeight: 800, textDecoration: 'none', '&:hover': { borderColor: '#B8D2F1', bgcolor: '#F8FBFF' } }}>{audience.title}<ArrowForwardRoundedIcon sx={{ fontSize: 17 }} /></Box></Grid>)}</Grid>
        </Container>}

        {path !== '/ai/connector' && path !== '/zero-lead-breach' && related.length > 0 && <Box sx={{ bgcolor: '#F8FBFF', py: { xs: 5, md: 6 } }}><Container maxWidth="lg"><Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 25, md: 30 }, fontWeight: 800, mb: 2 }}>Works with</Typography><Grid container spacing={1.3}>{related.slice(0, 3).map(({ href, item }) => <Grid item xs={12} sm={4} key={href}><Box component={RouterLink} to={href} sx={{ display: 'block', height: '100%', p: 1.8, borderRadius: 2.2, bgcolor: '#fff', border: '1px solid #E1E9F3', textDecoration: 'none', '&:hover': { borderColor: '#B8D2F1' } }}><Typography sx={{ color: '#0859C1', fontWeight: 800, fontSize: 13, mb: .5 }}>{item.title}</Typography><Typography sx={{ color: '#596A80', fontSize: 12, lineHeight: 1.5 }}>{item.description}</Typography></Box></Grid>)}</Grid></Container></Box>}

        {path !== '/ai/connector' && path !== '/zero-lead-breach' && <Container maxWidth="md" sx={{ py: { xs: 5, md: 7 } }}>
          <Typography component="h2" sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 25, md: 30 }, fontWeight: 800, mb: 2 }}>Frequently asked questions</Typography>
          {questions.map(([question, answer]) => <Accordion key={question} disableGutters elevation={0} sx={{ border: '1px solid #E1E9F3', borderRadius: '10px !important', mb: 1, '&:before': { display: 'none' } }}><AccordionSummary expandIcon={<ExpandMoreRoundedIcon sx={{ color: '#0859C1' }} />}><Typography sx={{ color: '#14243A', fontWeight: 700, fontSize: 14 }}>{question}</Typography></AccordionSummary><AccordionDetails><Typography sx={{ color: '#596A80', fontSize: 13, lineHeight: 1.65 }}>{answer}</Typography></AccordionDetails></Accordion>)}
        </Container>}
        {path === '/ai/sales-agent' ? <SalesAgentCapabilities /> : path === '/ai/nova' ? <NovaExpansion /> : path !== '/ai/connector' && path !== '/zero-lead-breach' && <Box id="product-demo" sx={{ scrollMarginTop: '88px' }}><BookDemo /></Box>}
        </>}
      </Box>
      <Footer />
    </Box>
  );
};

export default ProductDetailPage;
