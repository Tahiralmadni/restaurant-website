import React from 'react'
import{useState} from 'react';
import{ AppBar, Box, Drawer, IconButton, Toolbar, Typography, Badge } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import '../../Styles/Header.css';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [mobilOpen, setMobilOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobilOpen(!mobilOpen);
    }

    const navItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ 
            textAlign: "center", 
            bgcolor: "#1A237E", 
            height: "100%", 
            color: "white", 
            display: "flex", 
            flexDirection: "column",
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Typography 
                    component={"div"} 
                    variant="h6" 
                    color="white" 
                    sx={{ 
                        flexGrow: 0, 
                        p: 3, 
                        borderBottom: "1px solid rgba(255,255,255,0.2)", 
                        fontFamily: '"Playfair Display", serif', 
                        fontSize: '1.5rem', 
                        fontWeight: 600, 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        gap: 1,
                        backgroundColor: 'rgba(255,255,255,0.1)'
                    }}
                >
                    <FastfoodIcon />
                    Restaurant Website
                </Typography>
            </motion.div>
            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", py: 2 }}>
                <motion.ul 
                    className="mobilnav" 
                    style={{ padding: 0 }}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    {[
                        { to: '/', text: 'Home' },
                        { to: '/menu', text: 'Menu' },
                        { to: '/about', text: 'About' },
                        { to: '/contact', text: 'Contact' }
                    ].map((item, index) => (
                        <motion.li
                            key={index}
                            variants={navItemVariants}
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                            <Link to={item.to} style={{ 
                                color: 'white', 
                                fontFamily: '"Poppins", sans-serif', 
                                fontSize: '1.1rem', 
                                fontWeight: 500, 
                                padding: '15px 20px', 
                                display: 'block'
                            }}>{item.text}</Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </Box>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <Box sx={{ p: 3, borderTop: "1px solid rgba(255,255,255,0.2)", backgroundColor: 'rgba(255,255,255,0.1)' }}>
                    <Link to={"/addcart"} style={{ 
                        color: "white", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center"
                    }}>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <Badge badgeContent={0} color="error">
                                <ShoppingCartIcon sx={{ fontSize: "1.8rem" }} />
                            </Badge>
                        </motion.div>
                    </Link>
                </Box>
            </motion.div>
        </Box>
    )

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Box>
                    <AppBar component={"nav"} sx={{ bgcolor: "#1A237E" }} position="static">
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                sx={{ mr: 2, display: { sm: 'none' } }}
                                onClick={handleDrawerToggle}
                            >
                                <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                                    <MenuIcon />
                                </motion.div>
                            </IconButton>
                            <Typography component={"div"} variant="h6" color="white" sx={{ flexGrow: 1, fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', fontWeight: 600, display: "flex", alignItems: "center" }}>
                                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                                    <FastfoodIcon sx={{ mr: 1 }} />
                                </motion.div>
                                Restaurant Website
                            </Typography>
                            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                                <motion.ul 
                                    className="nav"
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.1
                                            }
                                        }
                                    }}
                                >
                                    {[
                                        { to: '/', text: 'Home' },
                                        { to: '/menu', text: 'Menu' },
                                        { to: '/about', text: 'About' },
                                        { to: '/contact', text: 'Contact' }
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            variants={navItemVariants}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <Link to={item.to} style={{ 
                                                color: 'white', 
                                                fontFamily: '"Poppins", sans-serif', 
                                                fontSize: '1rem', 
                                                fontWeight: 500
                                            }}>{item.text}</Link>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                                <motion.div whileHover={{ scale: 1.1 }}>
                                    <IconButton color="inherit" sx={{ ml: 2 }}>
                                        <Link to={"/addcart"} style={{ color: "white" }}>
                                            <Badge badgeContent={0} color="error">
                                                <ShoppingCartIcon />
                                            </Badge>
                                        </Link>
                                    </IconButton>
                                </motion.div>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Box component="nav">
                        <AnimatePresence>
                            {mobilOpen && (
                                <Drawer
                                    variant="temporary"
                                    open={mobilOpen}
                                    onClose={handleDrawerToggle}
                                    sx={{
                                        display: { xs: 'block', sm: 'none' },
                                        '& .MuiDrawer-paper': {
                                            boxSizing: 'border-box',
                                            width: 240,
                                        },
                                    }}
                                >
                                    {drawer}
                                </Drawer>
                            )}
                        </AnimatePresence>
                    </Box>
                </Box>
            </motion.div>
        </>
    )
}

export default Header