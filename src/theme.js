import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0859C1',
    },
    secondary: {
      main: '#0859C1',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFAFA',
      gradient: 'linear-gradient(to top left, #1D74DE, #FFFFFF)'
    },
    
    linearColor: {
      gradient: 'linear-gradient(89.96deg, #000000 43.62%, #010306 49.9%, #1D74DE 90.42%, #FFFFFF 106.14%);',
    },
    text: {
      primary: '#000000',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: '56px',
      fontWeight: 600,
      color: '#000000',
      '@media (max-width:600px)': { fontSize: '40px' },
    },
    h2: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: '40px',
      fontWeight: 500,
      color: '#000000',
      '@media (max-width:600px)': { fontSize: '32px' },
    },
    h3: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: '32px',
      fontWeight: 600,
      color: '#000000',
      '@media (max-width:600px)': { fontSize: '26px' },
    },
    h4: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
    h5: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
    h6: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
    subtitle1: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
    button: { fontFamily: '"Plus Jakarta Sans", sans-serif', textTransform: 'none' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10, textTransform: 'none', fontWeight: 700 },
        containedPrimary: {
          backgroundColor: '#0859C1',
          color: '#FFFFFF',
          '&:hover': { backgroundColor: '#06489D' },
        },
        outlinedPrimary: {
          color: '#0859C1',
          borderColor: '#0859C1',
          backgroundColor: '#FFFFFF',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: { color: '#0859C1' },
      },
    },
  },
});

export default theme;
