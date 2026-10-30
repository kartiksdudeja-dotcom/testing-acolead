import { Box, Grid, Stack, Button, IconButton, useMediaQuery, Typography, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MainDrawer from './MainDrawer';
import logo from '../assets/AcoSignFavIcon.png'

function MainHeader() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            alignSelf="center"
            position="sticky"
            mt={1}
            top={0}
            zIndex={1000}
            display="flex"
            justifyContent="center"
            width="100%"
            // maxWidth={'lg'}
            sx={{
                bgcolor: 'white',
                // padding: '6px 0',
            }}
        >
            <Grid container alignItems="center" justifyContent="space-between" sx={{ paddingX: 2 }} maxWidth={'lg'}>
                {/* Left Logo and Drawer Icon for Mobile */}
                <Grid item xs={6} md={3} display="flex" alignItems="center">
                    {isMobile && (
                        <IconButton onClick={handleDrawerToggle} sx={{ marginRight: '10px' }}>
                            <MenuIcon />
                        </IconButton>
                    )}
                    {/* <img src={Logo} alt="Colitionify Logo" height={40} style={{ marginRight: '10px' }} /> */}
                    <Typography
                        variant="h5"
                        component={RouterLink}
                        to="/"
                        color='black'
                        sx={{
                            textDecoration: 'none',
                            fontSize: '1.5rem',
                            fontWeight: 400,
                            lineHeight: 1.3,
                            // marginBottom: 1,
                        }}
                    >
                        Coalitionify
                    </Typography>
                </Grid>

                {/* Navbar Links for Desktop */}
                {!isMobile && (
                    <Grid item md={6} display="flex" justifyContent="center">
                        <Stack direction="row" gap={4}>
                            <Button
                                color="inherit"
                                sx={{ textTransform: 'none', fontSize: '1rem' }}
                                onClick={handleClick}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                Products
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'products-menu-button',
                                }}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <MenuItem
                                    component={RouterLink}
                                    to="/acoFlow"
                                    onClick={handleClose}
                                    sx={{ display: 'flex', alignItems: 'center', padding: 1 }}
                                >
                                    <Box display="flex" alignItems="center" sx={{ height: '100%' }}>
                                        <img src={logo} alt="AcoFlow Logo" width={24} height={24} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', paddingLeft: 2 }}>
                                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                            AcoFlow
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Workflow Automation
                                        </Typography>
                                    </Box>
                                </MenuItem>
                                <MenuItem
                                    component="a"
                                    href='https://app.coalitionify.com/builder'
                                    target='_blank'
                                    onClick={handleClose}
                                    sx={{ display: 'flex', alignItems: 'center', padding: 1 }}
                                >
                                    <Box display="flex" alignItems="center" sx={{ height: '100%' }}>
                                        <img src={logo} alt="AcoFlow Logo" width={24} height={24} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', paddingLeft: 2 }}>
                                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                            Document Library
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Manage and Store Documents
                                        </Typography>
                                    </Box>
                                </MenuItem>
                                {/* <MenuItem
                                    component={RouterLink}
                                    to="/acosign"
                                    onClick={handleClose}
                                    sx={{ display: 'flex', alignItems: 'center', padding: 1 }}
                                >
                                    <Box display="flex" alignItems="center" sx={{ height: '100%' }}>
                                        <img src={logo} alt="AcoSign Logo" width={24} height={24} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', paddingLeft: 2 }}>
                                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                            AcoSign
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            E-Signature Solution
                                        </Typography>
                                    </Box>
                                </MenuItem> */}
                            </Menu>

                            <Button
                                component={RouterLink}
                                to="/services"
                                color="inherit"
                                sx={{ textTransform: 'none', fontSize: '1rem' }}
                            >
                                Services
                            </Button>
                        </Stack>
                    </Grid>
                )}

                {/* Login Button */}
                <Grid item xs={6} md={3} display="flex" justifyContent="flex-end">
                    <Button
                        variant="outlined"
                        target='_blank'
                        href="https://app.coalitionify.com/signIn"
                        sx={{
                            bgcolor: '#1677F7',
                            color: 'white',
                            textDecoration: 'none',
                            textTransform: 'none',
                            m: isMobile ? 2 : 2,
                            fontSize: isMobile ? '10px' : '14px',
                        }}
                    >
                        Sign In
                    </Button>
                </Grid>
            </Grid>

            <MainDrawer drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />


        </Box>
    );
}

export default MainHeader;
