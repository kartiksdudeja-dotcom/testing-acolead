import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  Paper,
  Popper,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Bot,
  Building,
  CalendarDays,
  ChartNoAxesCombined,
  ClipboardList,
  ContactRound,
  GitBranch,
  Globe,
  Handshake,
  House,
  Kanban,
  MapPin,
  Megaphone,
  MessageCircle,
  Phone,
  Plug,
  Receipt,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserPlus,
  UsersRound,
  Wallet,
} from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/acolead-crm.png';

const menuVisuals = {
  '/features/lead-capture': { icon: ContactRound, description: 'Bring portal, Meta, website and walk-in enquiries together.' },
  '/features/lead-routing': { icon: GitBranch, description: 'Assign each lead fast and keep response times on track.' },
  '/features/pipeline': { icon: Kanban, description: 'Manage every buyer journey on boards that fit your process.' },
  '/features/sales-intelligence': { icon: ChartNoAxesCombined, description: 'Find the leads showing intent and the ones at risk.' },
  '/features/site-visits': { icon: CalendarDays, description: 'Schedule visits, track attendance and record bookings.' },
  '/features/inventory': { icon: Building, description: 'Keep units, pricing and availability in one view.' },
  '/features/whatsapp': { icon: MessageCircle, description: 'Keep customer conversations and follow-ups with the lead.' },
  '/features/calling': { icon: Phone, description: 'Connect calls to the lead timeline with number privacy.' },
  '/features/team-field': { icon: MapPin, description: 'Track attendance, field tasks and team performance.' },
  '/features/mobile-app': { icon: Smartphone, description: 'Give your sales team lead tools wherever they work.' },
  '/features/marketing-roi': { icon: Megaphone, description: 'See which campaigns bring enquiries, visits and bookings.' },
  '/features/website': { icon: Globe, description: 'Publish project inventory and capture enquiries online.' },
  '/features/channel-partners': { icon: Handshake, description: 'Organise partner relationships, events and updates.' },
  '/features/partner-leads': { icon: UserPlus, description: 'Receive partner enquiries and track their progress.' },
  '/features/invoice-board': { icon: Receipt, description: 'Track brokerage invoices through their payment stages.' },
  '/features/post-sales': { icon: Wallet, description: 'Track instalments and dues after a booking.' },
  '/features/resale': { icon: House, description: 'Connect seller listings with buyer requirements.' },
  '/features/reports': { icon: ClipboardList, description: 'Build reports and automate routine follow-ups.' },
  '/ai/sales-agent': { icon: Bot, description: 'Help your team respond to enquiries and hand-offs.' },
  '/ai/nova': { icon: Sparkles, description: 'Update leads and get team briefs with natural language.' },
  '/ai/connector': { icon: Plug, description: 'Ask your CRM questions through AI assistants.' },
  '/zero-lead-breach': { icon: ShieldCheck, description: 'Protect customer relationships across calls and messages.' },
};

const productGroups = [
  {
    title: 'Leads & Pipeline',
    links: [
      ['Lead Capture', '/features/lead-capture'],
      ['Smart Assignment', '/features/lead-routing'],
      ['Pipeline & Boards', '/features/pipeline'],
      ['Sales Intelligence', '/features/sales-intelligence'],
    ],
  },
  {
    title: 'Sales & Inventory',
    links: [
      ['Site Visits & Bookings', '/features/site-visits'],
      ['Inventory & Matching', '/features/inventory'],
      ['Post-Sales', '/features/post-sales', 'Launching Soon'],
      ['Resale Flow', '/features/resale'],
    ],
  },
  {
    title: 'Communication',
    links: [
      ['WhatsApp', '/features/whatsapp'],
      ['Calling & Number Masking', '/features/calling'],
      ['Mobile App', '/features/mobile-app'],
    ],
  },
  {
    title: 'Team & Growth',
    links: [
      ['Team & Field', '/features/team-field'],
      ['Marketing ROI', '/features/marketing-roi'],
      ['Website', '/features/website'],
      ['Reports', '/features/reports'],
    ],
  },
  {
    title: 'Partners',
    links: [
      ['Channel Partner Management', '/features/channel-partners'],
      ['Partner Lead Integration', '/features/partner-leads'],
      ['Invoice Board', '/features/invoice-board', 'To Confirm'],
    ],
  },
];

const aiLinks = [
  ['AI Sales Agent', '/ai/sales-agent'],
  ['AcoLead Nova', '/ai/nova', 'Launching Soon'],
  ['AI Connector', '/ai/connector', 'Early Access'],
];

const solutionGroups = [
  {
    title: 'Builders & Developers',
    href: '/solutions/builders',
    modules: [['Inventory', '/features/inventory'], ['Channel Partners', '/features/channel-partners']],
  },
  {
    title: 'Channel Partner Agencies',
    href: '/solutions/channel-partners',
    modules: [['Partner Leads', '/features/partner-leads'], ['Invoice Board', '/features/invoice-board']],
  },
  {
    title: 'Mandate Companies',
    href: '/solutions/mandate-companies',
    modules: [['Marketing ROI', '/features/marketing-roi'], ['Sales Intelligence', '/features/sales-intelligence']],
  },
  {
    title: 'Brokers & Resale',
    href: '/solutions/resale',
    modules: [['Resale Flow', '/features/resale'], ['Property Matching', '/features/inventory']],
  },
];

const LinkList = ({ links, onNavigate, compact = false, detailed = false }) => (
  <Stack spacing={compact ? 0.5 : 1}>
    {links.map(([label, href, status]) => (
      (() => {
        const visual = menuVisuals[href];
        const Icon = visual?.icon || ChartNoAxesCombined;
        return (
          <Link
            key={href}
            component={RouterLink}
            to={href}
            onClick={onNavigate}
            underline="none"
            sx={{
              display: 'flex',
              alignItems: detailed ? 'flex-start' : 'center',
              gap: 1.25,
              p: detailed ? 1 : compact ? 0.7 : 0.5,
              borderRadius: 1.5,
              color: '#000000',
              fontFamily: 'Poppins, sans-serif',
              fontSize: compact ? 14 : 13,
              lineHeight: 1.35,
              '&:hover': { color: '#0859C1', bgcolor: '#F8FBFF' },
            }}
          >
            <Box
              sx={{
                width: detailed ? 38 : 30,
                height: detailed ? 38 : 30,
                flex: '0 0 auto',
                display: 'grid',
                placeItems: 'center',
                borderRadius: 1.5,
                color: '#0859C1',
                bgcolor: '#E1F0FD',
                border: '1px solid #C7DFF8',
              }}
            >
              <Icon size={detailed ? 18 : 16} strokeWidth={1.8} />
            </Box>
            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 0.75 }}>
                <Typography component="span" sx={{ color: 'inherit', fontSize: compact ? 14 : 14, fontWeight: 700, lineHeight: 1.35 }}>
                  {label}
                </Typography>
                {status && (
                  <Typography
                    component="span"
                    sx={{
                      px: 0.8,
                      py: 0.15,
                      borderRadius: 99,
                      color: '#FFFFFF',
                      bgcolor: '#0859C1',
                      fontSize: 9,
                      fontWeight: 800,
                      lineHeight: 1.4,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {status === 'To Confirm' ? 'TO CONFIRM' : status.toUpperCase()}
                  </Typography>
                )}
              </Box>
              {detailed && visual?.description && (
                <Typography component="span" sx={{ display: 'block', mt: 0.25, color: '#475569', fontSize: 11, lineHeight: 1.4 }}>
                  {visual.description}
                </Typography>
              )}
            </Box>
          </Link>
        );
      })()
    ))}
  </Stack>
);

function Header() {
  const isDesktop = useMediaQuery('(min-width:1024px)');
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [activeMenu, setActiveMenu] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openMenu = (event, menu) => {
    setMenuAnchor(event.currentTarget.closest('header'));
    setActiveMenu(menu);
  };
  const closeMenu = () => {
    setMenuAnchor(null);
    setActiveMenu('');
  };
  const closeDrawer = () => setDrawerOpen(false);
  const menuWidth = activeMenu === 'product' ? 1060 : activeMenu === 'solutions' ? 760 : 260;

  const menuButton = (label, key) => (
    <Button
      key={key}
      onClick={(event) => openMenu(event, key)}
      onMouseEnter={(event) => openMenu(event, key)}
      endIcon={<ExpandMoreIcon />}
      aria-haspopup="true"
      aria-expanded={activeMenu === key}
      sx={{ color: '#000000', fontWeight: 700, px: 1, whiteSpace: 'nowrap' }}
    >
      {label}
    </Button>
  );

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1200,
        bgcolor: '#FFFFFF',
        borderBottom: '1px solid #E1F0FD',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ height: { xs: 68, md: 82 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, position: 'relative' }}>
          <Link component={RouterLink} to="/" aria-label="AcoLead home" sx={{ display: 'flex', flexShrink: 0 }}>
            <Box component="img" src={logo} alt="AcoLead" sx={{ width: { xs: 142, md: 164 }, height: 'auto' }} />
          </Link>

          {isDesktop ? (
            <>
            <Stack
              direction="row"
              alignItems="center"
              spacing={0.5}
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                whiteSpace: 'nowrap',
              }}
            >
              {menuButton('Product', 'product')}
              {menuButton('AI', 'ai')}
              {menuButton('Solutions', 'solutions')}
              <Button component={RouterLink} to="/customers" sx={{ color: '#000000', fontWeight: 700, px: 1 }}>
                Customers
              </Button>
              <Button component={RouterLink} to="/pricing" sx={{ color: '#000000', fontWeight: 700, px: 1 }}>
                Pricing
              </Button>
            </Stack>
            <Button
              component={RouterLink}
              to="/demo"
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              sx={{ ml: 'auto', px: 2, whiteSpace: 'nowrap' }}
            >
              Book a Free Demo
            </Button>
            </>
          ) : (
            <Stack direction="row" alignItems="center" spacing={1}>
              <Button
                component={RouterLink}
                to="/demo"
                variant="contained"
                color="primary"
                size="small"
                sx={{ whiteSpace: 'nowrap', px: { xs: 1.3, sm: 2 } }}
              >
                Book a Demo
              </Button>
              <IconButton aria-label="Open navigation menu" onClick={() => setDrawerOpen(true)} sx={{ color: '#0859C1' }}>
                <MenuIcon />
              </IconButton>
            </Stack>
          )}
        </Box>
      </Container>

      <Popper
        open={Boolean(menuAnchor)}
        anchorEl={menuAnchor}
        placement="bottom"
        modifiers={[
          { name: 'offset', options: { offset: [0, 8] } },
          { name: 'preventOverflow', options: { padding: 16 } },
        ]}
        sx={{ zIndex: 1300, width: Math.min(menuWidth, window.innerWidth - 32), maxWidth: 'calc(100vw - 32px)' }}
      >
        <Paper onMouseLeave={closeMenu} sx={{ p: 3, width: '100%', maxWidth: 'calc(100vw - 32px)', color: '#000000', bgcolor: '#FFFFFF', border: '1px solid #E1F0FD', borderRadius: 3, boxShadow: '0 20px 56px rgba(8, 89, 193, 0.16)' }}>
        {activeMenu === 'product' && (
          <Box sx={{ width: '100%', maxWidth: '100%' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 3 }}>
              {productGroups.map((group) => (
                <Box key={group.title}>
                  <Typography sx={{ color: '#0859C1', fontWeight: 800, fontSize: 13, letterSpacing: '0.05em', mb: 1.3 }}>
                    {group.title.toUpperCase()}
                  </Typography>
                  <LinkList links={group.links} onNavigate={closeMenu} detailed />
                </Box>
              ))}
            </Box>
            <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid #E1F0FD', display: 'flex', gap: 3 }}>
              <Link component={RouterLink} to="/features" onClick={closeMenu} underline="hover" sx={{ color: '#0859C1', fontWeight: 700 }}>
                Features Overview
              </Link>
              <Link component={RouterLink} to="/zero-lead-breach" onClick={closeMenu} underline="hover" sx={{ color: '#0859C1', fontWeight: 700, display: 'flex', gap: 0.75 }}>
                Zero Lead Breach <Typography component="span" sx={{ color: '#475569', fontSize: 11 }}>(Pilot)</Typography>
              </Link>
            </Box>
          </Box>
        )}
        {activeMenu === 'ai' && (
          <Box sx={{ width: '100%', maxWidth: '100%' }}>
            <Typography sx={{ color: '#0859C1', fontWeight: 800, letterSpacing: '0.05em', mb: 1.5 }}>AGENTIC & AI</Typography>
            <LinkList links={aiLinks} onNavigate={closeMenu} detailed />
          </Box>
        )}
        {activeMenu === 'solutions' && (
          <Box sx={{ width: '100%', maxWidth: '100%', display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 2.5 }}>
            {solutionGroups.map((group) => (
              <Box key={group.href}>
                <Link component={RouterLink} to={group.href} onClick={closeMenu} underline="none" sx={{ color: '#0859C1', fontWeight: 800, lineHeight: 1.35, display: 'block', mb: 1.2 }}>
                  {group.title}
                </Link>
                <LinkList links={group.modules} onNavigate={closeMenu} detailed />
              </Box>
            ))}
          </Box>
        )}
        </Paper>
      </Popper>

      <Drawer
        anchor="right"
        open={drawerOpen && !isDesktop}
        onClose={closeDrawer}
        PaperProps={{ sx: { width: '100vw', maxWidth: '100vw', bgcolor: '#FFFFFF' } }}
      >
        <Box sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ px: 2.5, py: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E1F0FD' }}>
            <Link component={RouterLink} to="/" onClick={closeDrawer} sx={{ display: 'flex' }}>
              <Box component="img" src={logo} alt="AcoLead" sx={{ width: 150, height: 'auto' }} />
            </Link>
            <IconButton aria-label="Close navigation menu" onClick={closeDrawer}><Typography sx={{ fontSize: 26, lineHeight: 1 }}>×</Typography></IconButton>
          </Box>
          <Box sx={{ flex: 1, overflowY: 'auto', px: 2, py: 2 }}>
            <Accordion disableGutters elevation={0}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography fontWeight={800}>Product</Typography></AccordionSummary>
              <AccordionDetails sx={{ pt: 0 }}>
                {productGroups.map((group) => (
                  <Box key={group.title} sx={{ mb: 2 }}>
                    <Typography sx={{ fontWeight: 700, borderLeft: '3px solid #3B9D1D', pl: 1, mb: 0.5 }}>{group.title}</Typography>
                    <LinkList links={group.links} onNavigate={closeDrawer} compact />
                  </Box>
                ))}
                <LinkList links={[[ 'Features Overview', '/features' ], [ 'Zero Lead Breach (Pilot)', '/zero-lead-breach' ]]} onNavigate={closeDrawer} compact />
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters elevation={0}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography fontWeight={800}>AI</Typography></AccordionSummary>
              <AccordionDetails sx={{ pt: 0 }}><LinkList links={aiLinks} onNavigate={closeDrawer} compact /></AccordionDetails>
            </Accordion>
            <Accordion disableGutters elevation={0}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography fontWeight={800}>Solutions</Typography></AccordionSummary>
              <AccordionDetails sx={{ pt: 0 }}>
                {solutionGroups.map((group) => (
                  <Box key={group.href} sx={{ mb: 1.5 }}>
                    <Link component={RouterLink} to={group.href} onClick={closeDrawer} underline="none" sx={{ color: '#0859C1', fontWeight: 800 }}>{group.title}</Link>
                    <Box sx={{ pl: 1.5, mt: 0.5 }}><LinkList links={group.modules} onNavigate={closeDrawer} compact /></Box>
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>
            <Stack direction="row" spacing={2} sx={{ px: 2, py: 2 }}>
              <Link component={RouterLink} to="/customers" onClick={closeDrawer} underline="none" sx={{ fontWeight: 700 }}>Customers</Link>
              <Link component={RouterLink} to="/pricing" onClick={closeDrawer} underline="none" sx={{ fontWeight: 700 }}>Pricing</Link>
              <Link component={RouterLink} to="/about" onClick={closeDrawer} underline="none" sx={{ fontWeight: 700 }}>About</Link>
            </Stack>
          </Box>
          <Box sx={{ px: 3, py: 2.5, borderTop: '1px solid #E1F0FD', bgcolor: '#F8FBFF' }}>
            <Link href="https://api.whatsapp.com/send?phone=919112614174" target="_blank" rel="noopener noreferrer" underline="hover" sx={{ display: 'block', textAlign: 'center', mb: 1.5, fontWeight: 700 }}>
              Chat with us on WhatsApp
            </Link>
            <Button component={RouterLink} to="/demo" fullWidth variant="contained" onClick={closeDrawer}>
              Book a Demo
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Header;
