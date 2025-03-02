import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Typography, TextField, Button, Grid, Paper, Container } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{
          minHeight: '75vh',
          py: 4,
          backgroundColor: '#f8f8f8'
        }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography 
                variant="h3" 
                component="h1" 
                sx={{ 
                  textAlign: 'center',
                  color: 'primary.main',
                  fontWeight: 'bold',
                  mb: 4
                }}
              >
                Contact Us
              </Typography>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Grid container spacing={3} sx={{ mb: 6 }}>
                {[
                  { icon: <PhoneIcon />, title: "Phone", info: "+92 " },
                  { icon: <WhatsAppIcon />, title: "WhatsApp", info: "+92 300 1234567" },
                  { icon: <EmailIcon />, title: "Email", info: "info@restaurant.com" },
                  { icon: <LocationOnIcon />, title: "Location", info: "Karachi, Pakistan" }
                ].map((item, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Paper elevation={3} sx={{
                        p: 3,
                        textAlign: 'center',
                        height: '100%'
                      }}>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Box sx={{ fontSize: 40, color: 'primary.main', mb: 2 }}>
                            {item.icon}
                          </Box>
                        </motion.div>
                        <Typography variant="h6" gutterBottom>{item.title}</Typography>
                        <Typography variant="body2" color="text.secondary">{item.info}</Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>

            {/* Contact Form and Map */}
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Paper elevation={3} sx={{ p: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                      Send us a Message
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                      {[
                        { label: "Name", type: "text" },
                        { label: "Email", type: "email" },
                        { label: "Phone Number", type: "text" }
                      ].map((field, index) => (
                        <motion.div
                          key={field.label}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <TextField
                            fullWidth
                            label={field.label}
                            type={field.type}
                            margin="normal"
                            required={field.type !== "text"}
                            sx={{ mb: 2 }}
                          />
                        </motion.div>
                      ))}
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <TextField
                          fullWidth
                          label="Message"
                          multiline
                          rows={4}
                          margin="normal"
                          required
                          sx={{ mb: 3 }}
                        />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="submit" 
                          variant="contained" 
                          size="large"
                          sx={{
                            width: '100%',
                            py: 1.5,
                            fontSize: '1.1rem'
                          }}
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                    <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                      Find Us
                    </Typography>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <Box sx={{ mt: 2, height: '400px', width: '100%', overflow: 'hidden' }}>
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.7694073507297!2d67.0316699!3d24.8673752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUyJzAyLjYiTiA2N8KwMDEnNTQuMCJF!5e0!3m2!1sen!2s!4v1635779958974!5m2!1sen!2s"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                        ></iframe>
                      </Box>
                    </motion.div>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>

          </Container>
        </Box>
      </motion.div>
    </Layout>
  );
};

export default Contact;