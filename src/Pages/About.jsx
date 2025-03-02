import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Typography, Grid, Container, Paper, Stack } from '@mui/material'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };  

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Box sx={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '500px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 6
        }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h2" sx={{ 
              color: 'white', 
              textAlign: 'center',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              mb: 2
            }}>
              Our Story
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography variant="h5" sx={{ 
              color: '#1976d2',
              textAlign: 'center',
              maxWidth: '800px',
              px: 3
            }}>
              Bringing you the finest Pakistani and Fast Food cuisine since 2015
            </Typography>
          </motion.div>
        </Box>

        <Container>
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {[
              { icon: <RestaurantIcon sx={{ fontSize: 45 }}/>, number: "8+", text: "Years Experience" },
              { icon: <GroupsIcon sx={{ fontSize: 45 }}/>, number: "2K+", text: "Happy Customers" },
              { icon: <EmojiEventsIcon sx={{ fontSize: 45 }}/>, number: "10+", text: "Awards Won" },
              { icon: <LocalShippingIcon sx={{ fontSize: 45 }}/>, number: "5K+", text: "Food Delivered" }
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper elevation={3} sx={{
                    p: 4,
                    textAlign: 'center',
                    height: '100%',
                    background: 'linear-gradient(145deg, #ffffff, #f3f4f6)',
                  }}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Box sx={{ color: '#1976d2', mb: 2 }}>
                        {item.icon}
                      </Box>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {item.number}
                      </Typography>
                    </motion.div>
                    <Typography variant="body1" color="text.secondary">
                      {item.text}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={6} sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Typography variant="h4" sx={{ 
                  color: '#1976d2',
                  fontWeight: 'bold', 
                  mb: 3 
                }}>
                  A Passion for Great Food
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  As a solo culinary artist, I bring my passion and expertise to every dish I create. My journey in the culinary world has been driven by a deep love for both Pakistani traditional cuisine and modern fast food innovations.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Every meal is crafted with attention to detail, using premium ingredients and time-honored recipes that I've perfected over the years. My goal is to provide you with an exceptional dining experience that combines authentic flavors with modern presentation.
                </Typography>
                <Stack spacing={2.5} sx={{ mt: 4 }}>
                  {[
                    "Authentic Pakistani recipes with modern twist",
                    "Premium quality ingredients",
                    "Personalized service",
                    "Hygienic food preparation"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        gap: 2,
                        backgroundColor: '#f8fafc',
                        p: 2.5,
                        borderRadius: 2,
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        border: '1px solid #e2e8f0'
                      }}>
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                        >
                          <Box sx={{ 
                            width: 10, 
                            height: 10, 
                            borderRadius: '50%', 
                            backgroundColor: '#1976d2'
                          }}/>
                        </motion.div>
                        <Typography sx={{ fontSize: '1.05rem' }}>{item}</Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Box sx={{
                  height: '100%',
                  display: 'flex',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
                  position: 'relative'
                }}>
                  <motion.img
                    src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Restaurant ambiance"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      minHeight: '600px'
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </motion.div>
    </Layout>
  )
}

export default About