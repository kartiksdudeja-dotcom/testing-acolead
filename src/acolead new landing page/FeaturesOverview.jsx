import React from 'react';
import { Box, Button, Chip, Container, Grid, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
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
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import Header from './Header';
import Footer from './Footer';
import KeyFeatures from './KeyFeatures';

const groups = [
  {
    id: 'leads-pipeline', title: 'Leads & Pipeline', features: [
      { title: 'Lead Capture & Sources', href: '/features/lead-capture', description: 'Bring portal, Meta, website and walk-in enquiries into one CRM.', Icon: PersonAddAlt1RoundedIcon },
      { title: 'Smart Assignment & Response Timer', href: '/features/lead-routing', description: 'Assign enquiries to the right salesperson and track response time.', Icon: AssignmentTurnedInRoundedIcon },
      { title: 'Pipeline & CRM Boards', href: '/features/pipeline', description: 'Track every buyer from new enquiry through booking.', Icon: ViewKanbanRoundedIcon },
      { title: 'Sales Intelligence', href: '/features/sales-intelligence', description: 'See buyer intent and spot leads that need attention.', Icon: QueryStatsRoundedIcon },
    ],
  },
  {
    id: 'sales-inventory', title: 'Sales & Inventory', features: [
      { title: 'Site Visits & Bookings', href: '/features/site-visits', description: 'Schedule visits and keep booking updates with the buyer.', Icon: EventAvailableRoundedIcon },
      { title: 'Inventory & Property Matching', href: '/features/inventory', description: 'Keep unit availability, pricing and buyer matches together.', Icon: ApartmentRoundedIcon },
      { title: 'Post-Sales Payment Management', href: '/features/post-sales', description: 'Track instalments, loan disbursements and dues after booking.', Icon: PaymentsRoundedIcon, status: 'Launching Soon' },
      { title: 'Resale Flow', href: '/features/resale', description: 'Connect seller listings with buyer requirements.', Icon: HomeWorkRoundedIcon },
    ],
  },
  {
    id: 'communication', title: 'Communication', features: [
      { title: 'WhatsApp', href: '/features/whatsapp', description: 'Keep customer chats and follow-ups connected to the lead.', Icon: ForumRoundedIcon },
      { title: 'Calling, Call ID & Number Masking', href: '/features/calling', description: 'Connect calls to lead records while protecting phone numbers.', Icon: CallRoundedIcon },
      { title: 'Mobile App – Android & iOS', href: '/features/mobile-app', description: 'Give your sales team lead tools wherever they work.', Icon: SmartphoneRoundedIcon },
    ],
  },
  {
    id: 'team-growth', title: 'Team & Growth', features: [
      { title: 'Team, Attendance & Field Tracking', href: '/features/team-field', description: 'Coordinate attendance, field tasks and team performance.', Icon: GroupsRoundedIcon },
      { title: 'Marketing ROI', href: '/features/marketing-roi', description: 'See which campaigns bring enquiries, visits and bookings.', Icon: CampaignRoundedIcon },
      { title: 'Maintenance-Free Website', href: '/features/website', description: 'Publish project inventory and capture enquiries online.', Icon: LanguageRoundedIcon },
      { title: 'Reports & Automation', href: '/features/reports', description: 'Build reports and automate routine sales follow-ups.', Icon: AssessmentRoundedIcon },
    ],
  },
  {
    id: 'partners', title: 'Partners', features: [
      { title: 'Channel Partner Management', href: '/features/channel-partners', description: 'Organize partner relationships, events and updates.', Icon: HandshakeRoundedIcon },
      { title: 'Partner Lead Integration', href: '/features/partner-leads', description: 'Receive partner enquiries and track their progress.', Icon: HubRoundedIcon },
      { title: 'Invoice Board', href: '/features/invoice-board', description: 'Track brokerage invoices through payment stages.', Icon: ReceiptLongRoundedIcon, status: 'To Confirm' },
    ],
  },
];

const dashboardRows = [
  ['Priya Shah', '99acres · 3 BHK', 'Ready to close'],
  ['Rahul Mehta', 'Google · 1 BHK', 'Hot'],
  ['Anita Rao', 'WhatsApp · 2 BHK', 'Warm'],
];

const HeroPreview = () => (
  <Box sx={{ position: 'relative', maxWidth: 520, mx: 'auto', p: { xs: 1.4, sm: 2.2 }, borderRadius: 4, bgcolor: '#fff', border: '1px solid #DFE8F2', boxShadow: '0 24px 60px rgba(20,44,74,.12)' }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
      <Box><Typography sx={{ color: '#14243A', fontSize: 13, fontWeight: 800 }}>Sales overview</Typography><Typography sx={{ color: '#7D8A9B', fontSize: 9 }}>All projects · This month</Typography></Box>
      <Chip size="small" label="Today" sx={{ height: 22, bgcolor: '#F1F6FD', color: '#0859C1', fontWeight: 700, fontSize: 9 }} />
    </Box>
    <Grid container spacing={1} sx={{ mb: 1.2 }}>
      {[['New leads', '128'], ['Site visits', '42'], ['Bookings', '12']].map(([label, value]) => <Grid item xs={4} key={label}><Box sx={{ p: 1, border: '1px solid #E9EEF5', borderRadius: 1.8, bgcolor: '#FBFDFF' }}><Typography sx={{ color: '#748196', fontSize: 8 }}>{label}</Typography><Typography sx={{ color: '#14243A', fontWeight: 800, fontSize: 16 }}>{value}</Typography></Box></Grid>)}
    </Grid>
    {dashboardRows.map(([name, source, status]) => <Box key={name} sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', alignItems: 'center', gap: 1, p: .9, mb: .65, border: '1px solid #EDF1F6', borderRadius: 1.5 }}><Typography sx={{ color: '#26374F', fontSize: 9, fontWeight: 700 }}>{name}</Typography><Typography sx={{ color: '#7A8799', fontSize: 8 }}>{source}</Typography><Box sx={{ px: .7, py: .3, borderRadius: 4, bgcolor: status === 'Hot' ? '#FDE8D8' : '#E6F4EA', color: status === 'Hot' ? '#A94A19' : '#246B38', fontSize: 7, fontWeight: 700, whiteSpace: 'nowrap' }}>{status}</Box></Box>)}
  </Box>
);

const FeaturesOverview = () => (
  <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', '@media (max-width:1023.95px)': { pb: 8 } }}>
    <Header />
    <Box component="main" sx={{ flex: 1 }}>
      <Box sx={{ bgcolor: '#F2F6FC', py: { xs: 6, md: 8 }, borderBottom: '1px solid #E1E9F3' }}>
        <Container maxWidth="lg" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 6 }, alignItems: 'center' }}>
          <Box>
            <Typography sx={{ color: '#0859C1', textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 800, fontSize: 11, mb: 1.5 }}>AcoLead product features</Typography>
            <Typography component="h1" sx={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#101C2E', fontWeight: 800, fontSize: { xs: 38, md: 50 }, lineHeight: 1.1, letterSpacing: '-.04em', mb: 2 }}>
              Everything your real estate sales team needs.
            </Typography>
            <Box sx={{ width: 48, height: 4, bgcolor: '#3B9D1D', borderRadius: 3, mb: 2 }} />
            <Typography sx={{ color: '#536277', fontSize: 16, lineHeight: 1.65, mb: 2.5, maxWidth: 560 }}>
              Capture enquiries, keep follow-ups moving and see progress from first call to booking in one real estate CRM.
            </Typography>
            <Button component={RouterLink} to="/request-a-demo" variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={{ bgcolor: '#0859C1', px: 2.4, py: 1.2, borderRadius: 2, fontWeight: 700, textTransform: 'none', '&:hover': { bgcolor: '#06489D' } }}>Book a Free Demo</Button>
          </Box>
          <HeroPreview />
        </Container>
      </Box>

      <Box sx={{ py: 2, bgcolor: '#fff', borderBottom: '1px solid #E7EDF5' }}>
        <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
          <Typography sx={{ color: '#536277', fontSize: 12, fontWeight: 700, mr: .5 }}>Jump to:</Typography>
          {groups.map((group) => <Button key={group.id} component="a" href={`#${group.id}`} size="small" sx={{ color: '#0859C1', textTransform: 'none', fontWeight: 700, borderRadius: 5, px: 1.4, bgcolor: '#F1F6FD' }}>{group.title}</Button>)}
        </Container>
      </Box>

      {groups.map((group) => (
        <Box component="section" id={group.id} key={group.id} sx={{ py: { xs: 4.5, md: 6 }, scrollMarginTop: '88px', bgcolor: group.id === 'sales-inventory' || group.id === 'team-growth' ? '#F8FBFF' : '#fff' }}>
          <Container maxWidth="lg">
            <Typography component="h2" sx={{ color: '#101C2E', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: { xs: 23, md: 28 }, mb: 2.3 }}>{group.title}</Typography>
            <Grid container spacing={1.5}>
              {group.features.map(({ title, href, description, Icon, status }) => (
                <Grid item xs={12} sm={6} md={3} key={href}>
                  <Box component={RouterLink} to={href} sx={{ height: '100%', minHeight: 190, display: 'flex', flexDirection: 'column', p: 2, borderRadius: 2.5, bgcolor: '#FFFAFA', border: '1px solid #E7EDF5', textDecoration: 'none', transition: 'border-color .2s ease, transform .2s ease, box-shadow .2s ease', '&:hover': { borderColor: '#B8D2F1', transform: 'translateY(-3px)', boxShadow: '0 12px 26px rgba(8,89,193,.09)' } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.3 }}>
                      <Box sx={{ width: 42, height: 42, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: '#E1F0FD', color: '#0859C1', boxShadow: 'inset 0 2px 3px #fff, 0 4px 9px rgba(8,89,193,.12)' }}><Icon sx={{ fontSize: 22 }} /></Box>
                      <Chip label={status || 'Live'} size="small" sx={{ height: 22, bgcolor: status ? '#EAF2FC' : '#E9F5E7', color: status ? '#0859C1' : '#347D22', fontWeight: 700, fontSize: 9 }} />
                    </Box>
                    <Typography sx={{ color: '#14243A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 14, lineHeight: 1.35, fontWeight: 800, mb: .65 }}>{title}</Typography>
                    <Typography sx={{ color: '#596A80', fontSize: 12, lineHeight: 1.5, flex: 1 }}>{description}</Typography>
                    <Typography sx={{ color: '#0859C1', fontSize: 11, fontWeight: 800, mt: 1.1 }}>Explore feature →</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      ))}
      <KeyFeatures />
      <Box component="section" sx={{ bgcolor: '#071B3A', color: '#fff', py: { xs: 4, md: 5 } }}>
        <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between', gap: 2.5 }}>
          <Box>
            <Typography component="h2" sx={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: { xs: 24, md: 34 }, lineHeight: 1.2, fontWeight: 800, mb: .5 }}>
              See it on your own leads in 20 minutes
            </Typography>
            <Typography sx={{ color: '#C4D2E7', fontSize: { xs: 13, md: 15 } }}>
              For sales teams of 5 or more. Own Every Lead. Close Every Deal.
            </Typography>
          </Box>
          <Button component={RouterLink} to="/request-a-demo" variant="contained" sx={{ flex: '0 0 auto', bgcolor: '#fff', color: '#14243A', borderRadius: 2, px: 2.5, py: 1.25, fontWeight: 800, textTransform: 'none', '&:hover': { bgcolor: '#EAF2FC' } }}>
            Book a free demo
          </Button>
        </Container>
      </Box>
    </Box>
    <Footer />
  </Box>
);

export default FeaturesOverview;
