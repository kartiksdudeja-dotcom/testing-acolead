import { useState } from 'react';
import { Box, Button, Divider, Drawer, Stack, Collapse,Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const MainDrawer = ({ drawerOpen, handleDrawerToggle }) => {
    const [isProductsOpen, setProductsOpen] = useState(false);

    const handleProductsToggle = () => {
        setProductsOpen((prev) => !prev);
    };

    return (
        <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            sx={{
                '& .MuiDrawer-paper': {
                    width: 240,
                    backgroundColor: 'white',
                    color: 'black',
                    paddingTop: 2,
                    paddingBottom: 2,
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                },
            }}
        >
            <Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: 1,
                    }}
                >
                    {/* <img
                        src={logo}
                        alt="Company Logo"
                        style={{
                            width: '125px',
                            height: 'auto',
                            cursor: 'pointer',
                        }}
                        onClick={handleDrawerToggle}
                    /> */}
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
                </Box>
                <Divider />

                <Stack
                    direction="column"
                    spacing={2}
                    sx={{
                        padding: 2,
                        alignItems: 'flex-start',
                        '& .MuiButton-root': {
                            width: '100%',
                            justifyContent: 'flex-start',
                            color: 'black',
                            textTransform: 'none',
                            fontSize: '1rem',
                            gap: 1,
                            transition: '0.3s ease',
                            '&:hover': {
                                color: 'primary.main',
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            },
                        },
                    }}
                >
                
                    <Button
                        onClick={handleProductsToggle}
                        endIcon={isProductsOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        startIcon={<StarIcon sx={{ color: 'primary.main' }} />}
                    >
                        Products
                    </Button>
                    <Collapse in={isProductsOpen} timeout="auto" unmountOnExit>
                        <Stack
                            spacing={1}
                            sx={{
                                pl: 4,
                                '& .MuiButton-root': {
                                    width: 'auto',
                                    justifyContent: 'flex-start',
                                },
                            }}
                        >
                            <Button component={RouterLink} to="/acoFlow">
                               AcoFlow
                            </Button>
                            <Button component={RouterLink} to="/acosign">
                                AcoSign
                            </Button>
                            {/* <Button component={RouterLink} to="/dailyDiary">
                                Daily Diary
                            </Button> */}
                        </Stack>
                    </Collapse>
                    <Button component={RouterLink} to="/services" startIcon={<ContactMailIcon sx={{ color: 'primary.main' }} />}>Services</Button>

                </Stack>
            </Box>

            {/* Contact Us Button */}
            {/* <Box
                sx={{
                    padding: 2,
                    marginBottom: 2,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    easing="easeInOutQuart"
                >
                    <Button
                        color="primary"
                        sx={{ textTransform: 'none' }}
                        variant="contained"
                    >
                        Book Demo
                    </Button>
                </Link>
            </Box> */}
        </Drawer>
    );
};

export default MainDrawer;
