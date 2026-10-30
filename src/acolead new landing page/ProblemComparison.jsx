import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import InputIcon from '@mui/icons-material/Input';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InsightsIcon from '@mui/icons-material/Insights';
import CampaignIcon from '@mui/icons-material/Campaign';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const comparisons = [
    { Icon: InputIcon, without: 'Leads scattered across portals, Meta and walk-ins', with: 'Every enquiry captured in one CRM, with its source attached' },
    { Icon: AssignmentIndIcon, without: 'Manual lead sharing makes ownership unclear', with: 'Smart Assignment gives each enquiry a clear owner' },
    { Icon: NotificationsActiveIcon, without: 'Follow-ups depend on memory and WhatsApp messages', with: 'A daily call list shows each salesperson who to contact next' },
    { Icon: CalendarMonthIcon, without: 'Site visits and bookings tracked across separate chats', with: 'Visits and bookings stay on the buyer’s CRM timeline' },
    { Icon: InsightsIcon, without: 'Hot, cooling and ignored leads are hard to spot', with: 'Sales Intelligence flags intent and follow-up risk' },
    { Icon: CampaignIcon, without: 'Ad spend and sales results are difficult to connect', with: 'Project-wise reports show marketing ROI and sales results' },
];

const ComparisonIcon = ({ Icon, positive }) => (
    <Box sx={{ width: 44, height: 44, flex: '0 0 44px', borderRadius: '15px', display: 'grid', placeItems: 'center', bgcolor: positive ? '#E1F0FD' : '#FFF0EE', boxShadow: positive ? 'inset 0 2px 0 #fff, 0 5px 9px rgba(8,89,193,.13)' : 'inset 0 2px 0 #fff, 0 5px 9px rgba(253,69,56,.11)', transform: 'rotate(-3deg)' }}>
        <Box sx={{ width: 30, height: 30, borderRadius: '10px', display: 'grid', placeItems: 'center', color: '#fff', background: positive ? 'linear-gradient(145deg, #58A0F3 0%, #0859C1 75%)' : 'linear-gradient(145deg, #FF948A 0%, #FD4538 75%)', boxShadow: positive ? '0 3px 5px rgba(8,89,193,.28)' : '0 3px 5px rgba(253,69,56,.26)' }}>
            <Icon sx={{ fontSize: 20 }} />
        </Box>
    </Box>
);

const ProblemComparison = () => (
    <Box component="section" aria-labelledby="problem-comparison-title" sx={{ py: { xs: 6, md: 9 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
            <Box sx={{ maxWidth: 780, mx: 'auto', textAlign: 'center', mb: { xs: 3.5, md: 5 } }}>
                <Typography component="h2" id="problem-comparison-title" sx={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, color: '#101C2E', fontSize: { xs: 29, sm: 38, md: 44 }, letterSpacing: '-.04em', lineHeight: 1.15 }}>
                    Still Running Site Sales on <Box component="span" sx={{ color: '#0859C1' }}>Excel and WhatsApp Groups?</Box>
                </Typography>
                <Box sx={{ width: 48, height: 4, bgcolor: '#3B9D1D', borderRadius: 4, mx: 'auto', mt: 2 }} />
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 1.5, md: 2.5 }, alignItems: 'stretch' }}>
                <Box sx={{ borderRadius: 3, overflow: 'hidden', border: '1px solid #F8C5C0', bgcolor: '#FFFAFA' }}>
                    <Box sx={{ px: { xs: 2, md: 2.5 }, py: 1.7, bgcolor: '#FD4538', color: '#fff' }}>
                        <Typography sx={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 18, fontWeight: 800 }}>Without AcoLead</Typography>
                    </Box>
                    {comparisons.map(({ Icon, without }, index) => (
                        <Box key={without} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minHeight: { xs: 78, md: 84 }, p: { xs: 1.5, md: 2 }, borderTop: index ? '1px solid #F5DEDC' : 'none' }}>
                            <ComparisonIcon Icon={Icon} />
                            <Typography sx={{ color: '#28374B', fontSize: { xs: 14, md: 15 }, fontWeight: 600, lineHeight: 1.45 }}>{without}</Typography>
                        </Box>
                    ))}
                </Box>

                <Box sx={{ borderRadius: 3, overflow: 'hidden', border: '1px solid #BDD7F5', bgcolor: '#F8FBFF' }}>
                    <Box sx={{ px: { xs: 2, md: 2.5 }, py: 1.7, bgcolor: '#0859C1', color: '#fff' }}>
                        <Typography sx={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 18, fontWeight: 800 }}>With AcoLead</Typography>
                    </Box>
                    {comparisons.map(({ Icon, with: withAcoLead }, index) => (
                        <Box key={withAcoLead} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minHeight: { xs: 78, md: 84 }, p: { xs: 1.5, md: 2 }, borderTop: index ? '1px solid #DCEAF8' : 'none' }}>
                            <ComparisonIcon Icon={Icon} positive />
                            <Typography sx={{ flex: 1, color: '#14243A', fontSize: { xs: 14, md: 15 }, fontWeight: 600, lineHeight: 1.45 }}>{withAcoLead}</Typography>
                            <CheckCircleRoundedIcon sx={{ color: '#0859C1', fontSize: 20, flex: '0 0 auto' }} />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    </Box>
);

export default ProblemComparison;
