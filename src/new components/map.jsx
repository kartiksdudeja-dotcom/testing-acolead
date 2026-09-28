import React, { useEffect, useState } from 'react';
import { Box, Typography, Chip, Container, Paper } from '@mui/material';
import { MapPinned } from 'lucide-react';
import indiaMap from '@svg-maps/india';

const servedStates = [
  { id: 'mh', name: 'Maharashtra', city: 'Pune' },
  { id: 'hr', name: 'Haryana', city: 'Gurugram' },
  { id: 'wb', name: 'West Bengal', city: 'Kolkata' },
  { id: 'gj', name: 'Gujarat', city: 'Ahmedabad' },
  { id: 'ka', name: 'Karnataka', city: 'Bengaluru' },
  { id: 'ct', name: 'Chhattisgarh', city: 'Raipur' },
  { id: 'rj', name: 'Rajasthan', city: 'Jaipur' },
];

const HomePage = () => {
  const [activeServiceState, setActiveServiceState] = useState(0);
  const [markerPositions, setMarkerPositions] = useState({});
  const activeServiceStateIndex = activeServiceState % servedStates.length;

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveServiceState((current) => (current + 1) % servedStates.length);
    }, 2600);
    return () => window.clearInterval(rotation);
  }, []);

  useEffect(() => {
    const svg = document.getElementById('india-map-svg');
    if (!svg) return;

    const updatePositions = () => {
      const viewBox = svg.viewBox.baseVal;
      const nextPositions = {};

      svg.querySelectorAll('path[data-state-id]').forEach((pathNode) => {
        const stateId = pathNode.getAttribute('data-state-id');
        const isServed = servedStates.some((state) => state.id === stateId);
        if (!isServed || !stateId) return;

        const bounds = pathNode.getBBox();
        const centerX = ((bounds.x + bounds.width / 2) / viewBox.width) * 100;
        const centerY = ((bounds.y + bounds.height / 2) / viewBox.height) * 100;

        nextPositions[stateId] = { top: `${centerY}%`, left: `${centerX}%` };
      });

      setMarkerPositions(nextPositions);
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);

    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#F8FAFC',
        borderTop: '1px solid rgba(15, 23, 42, 0.06)',
        borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'absolute', top: '10%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: '5%', right: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', inset: 0, opacity: 0.4, backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          
          <Chip
            label="WHERE WE SERVE"
            sx={{
              backgroundColor: 'rgba(37, 99, 235, 0.08)',
              color: '#2563EB',
              fontWeight: 800,
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              mb: 2.5,
              border: '1px solid rgba(37, 99, 235, 0.18)',
            }}
          />
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '1.1rem', md: '2.9rem' }, lineHeight: 1.12, color: '#0F172A', letterSpacing: '-0.03em', mb: 2 }}>
            CRM Technology Powering{' '}
            <Box component="span" sx={{ background: 'linear-gradient(135deg, #2563EB, #059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Real Estate Across India
              </Box>
          </Typography>
          <Typography variant="body1" sx={{ color: '#475569', fontSize: { xs: '0.9rem', md: '1.25rem' }, lineHeight: 1.75, maxWidth: 680, mx: 'auto' }}>
            Our CRM platform serves real estate teams across India's key markets — from lead capture to site visits, bookings, and beyond.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Paper
            elevation={0}
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: { xs: '100%', md: 760 },
              height: { xs: 420, md: 520 },
              borderRadius: 4,
              overflow: 'hidden',
              background: 'linear-gradient(155deg, #FFFFFF 0%, #F8FAFC 100%)',
              border: '1px solid rgba(37, 99, 235, 0.15)',
              boxShadow: '0 20px 50px rgba(15, 23, 42, 0.06), 0 2px 8px rgba(37, 99, 235, 0.04)',
              mx: 'auto',
            }}
          >
            <Box className="india-map-grid" sx={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '70%', height: '70%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <Box sx={{ position: 'absolute', right: 20, top: 18, px: 1.8, py: 0.8, borderRadius: 2, background: '#FFFFFF', border: '1px solid rgba(37, 99, 235, 0.15)', boxShadow: '0 4px 12px rgba(15, 23, 42, 0.05)', zIndex: 2 }}>
              <Typography sx={{ color: '#2563EB', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>7 States</Typography>
            </Box>

            <Box sx={{ position: 'absolute', inset: { xs: '3% 10%', md: '2% 18%' }, zIndex: 1 }}>
              <svg id="india-map-svg" viewBox={indiaMap.viewBox} role="img" aria-label={indiaMap.label} width="100%" height="100%">
                <defs>
                  <linearGradient id="served-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#0D9488" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="active-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.95" />
                  </linearGradient>
                  <filter id="glow-filter">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {indiaMap.locations.map((location) => {
                  const isServed = servedStates.some((state) => state.id === location.id);
                  const isActive = servedStates[activeServiceStateIndex].id === location.id;

                  return (
                    <path
                      key={location.id}
                      data-state-id={location.id}
                      d={location.path}
                      aria-label={location.name}
                      fill={isActive ? 'url(#active-gradient)' : isServed ? 'url(#served-gradient)' : '#E2E8F0'}
                      fillOpacity={isActive ? 1 : isServed ? 1 : 0.6}
                      stroke={isActive ? '#1D4ED8' : isServed ? 'rgba(37, 99, 235, 0.4)' : '#CBD5E1'}
                      strokeWidth={isActive ? '2' : isServed ? '1' : '0.8'}
                      filter={isActive ? 'url(#glow-filter)' : 'none'}
                      style={{ transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)', cursor: isServed ? 'pointer' : 'default' }}
                    />
                  );
                })}
              </svg>
            </Box>

            <Box sx={{ position: 'absolute', inset: { xs: '3% 10%', md: '2% 18%' }, zIndex: 3, pointerEvents: 'none' }}>
              {servedStates.map((state, index) => (
                <Box
                  key={`${state.id}-${state.city}`}
                  sx={{
                    position: 'absolute',
                    top: markerPositions[state.id]?.top || '50%',
                    left: markerPositions[state.id]?.left || '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'auto',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: index === activeServiceStateIndex ? 36 : 0,
                      height: index === activeServiceStateIndex ? 36 : 0,
                      borderRadius: '50%',
                      border: '2px solid rgba(37, 99, 235, 0.4)',
                      opacity: index === activeServiceStateIndex ? 1 : 0,
                      transition: 'all 0.4s ease',
                    }}
                  />
                  <Box
                    sx={{
                      width: index === activeServiceStateIndex ? 14 : 9,
                      height: index === activeServiceStateIndex ? 14 : 9,
                      borderRadius: '50%',
                      background: index === activeServiceStateIndex ? 'linear-gradient(135deg, #1D4ED8, #2563EB)' : '#2563EB',
                      border: index === activeServiceStateIndex ? '2.5px solid #FFFFFF' : '2px solid #FFFFFF',
                      boxShadow: index === activeServiceStateIndex ? '0 0 16px rgba(37, 99, 235, 0.6), 0 4px 10px rgba(0,0,0,0.15)' : '0 2px 6px rgba(37, 99, 235, 0.3)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                    }}
                    onClick={() => setActiveServiceState(index)}
                  />

                  {index === activeServiceStateIndex && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 22,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        minWidth: { xs: 145, md: 170 },
                        p: { xs: 1.5, md: 1.8 },
                        borderRadius: 2.5,
                        background: '#FFFFFF',
                        border: '1px solid rgba(37, 99, 235, 0.2)',
                        color: '#0F172A',
                        boxShadow: '0 12px 32px rgba(15, 23, 42, 0.14), 0 2px 6px rgba(37, 99, 235, 0.08)',
                        textAlign: 'left',
                        zIndex: 10,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, mb: 0.5 }}>
                        <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px rgba(16, 185, 129, 0.5)' }} />
                        <Typography sx={{ color: '#059669', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                          CRM Active
                        </Typography>
                      </Box>
                      <Typography sx={{ color: '#0F172A', fontSize: { xs: '0.82rem', md: '0.88rem' }, fontWeight: 800, lineHeight: 1.3 }}>{state.name}</Typography>
                      <Typography sx={{ color: '#2563EB', fontSize: { xs: '0.68rem', md: '0.72rem' }, fontWeight: 600, mt: 0.3 }}>{state.city}</Typography>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>

            <Box sx={{ position: 'absolute', left: 20, bottom: 18, display: 'flex', flexDirection: 'column', gap: 0.8, zIndex: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: 'linear-gradient(135deg, #1D4ED8, #2563EB)', boxShadow: '0 2px 6px rgba(37, 99, 235, 0.3)' }} />
                <Typography sx={{ color: '#475569', fontSize: '0.66rem', fontWeight: 600 }}>Active CRM region</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(37, 99, 235, 0.3)' }} />
                <Typography sx={{ color: '#64748B', fontSize: '0.66rem', fontWeight: 600 }}>Served market</Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
