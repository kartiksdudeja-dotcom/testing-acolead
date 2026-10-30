import { Box, Grid, Stack, Button, IconButton, useMediaQuery, Typography, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MyDrawer from './MyDrawer';


function HeaderNav() {
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
                            >
                                <MenuItem
                                    component={RouterLink}
                                    to="/esignWorkflow"
                                    onClick={handleClose}
                                >
                                    AcoFlow
                                </MenuItem>
                                <MenuItem
                                    component={RouterLink}
                                    to="/businessWorkflow"
                                    onClick={handleClose}
                                >
                                    AcoSign
                                </MenuItem>
                            </Menu>

                            <Button
                                component={RouterLink}
                                to="/resources"
                                color="inherit"
                                sx={{ textTransform: 'none', fontSize: '1rem' }}
                            >
                                services
                            </Button>
                            {/* <Button
                                component={RouterLink}
                                to="/pricing"
                                color="inherit"
                                sx={{ textTransform: 'none', fontSize: '1rem' }}
                            >
                                Pricing
                            </Button> */}
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
                            bgcolor: 'black',
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

            <MyDrawer drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />


        </Box>
    );
}

export default HeaderNav;
