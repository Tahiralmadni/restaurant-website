import React from 'react';
import Layout from '../Components/Layout/Layout';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Grid, Typography, Paper } from '@mui/material';
import home from '../assets/home.jpg';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import '../Styles/Home.css';
import { motion } from 'framer-motion';

const Home = () => {
  const features = [
    {
      icon: <LocalDiningIcon sx={{ fontSize: 40 }}/>,
      title: "Quality Food",
      description: "We serve the best Pakistani and Fast Food with premium ingredients"
    },
    {
      icon: <DeliveryDiningIcon sx={{ fontSize: 40 }}/>,
      title: "Fast Delivery",
      description: "Quick delivery to your doorstep with care and hygiene"
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40 }}/>,
      title: "24/7 Service",
      description: "We are available round the clock for your convenience"
    }
  ];

  const popularDishes = [
    {
      name: "Special Biryani",
      price: "Rs. 300",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3"
    },
    {
      name: "Zinger Burger",
      price: "Rs. 350",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3"
    },
    {
      name: "Chicken Karahi",
      price: "Rs. 800",
      image: "https://www.unileverfoodsolutions.pk/dam/global-ufs/mcos/meps/pakistan/calcmenu/recipes/PK-recipes/chicken-&-other-poultry-dishes/chicken-karahi/chicken-karahi_1260x709.jpg"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Box 
          className="hero-section"
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${home})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white'
          }}
        >
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Typography 
                variant="h1" 
                sx={{ 
                  fontWeight: 'bold',
                  mb: 2,
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}
              >
                Welcome to Our Restaurant
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 4,
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}
              >
                Bringing You the True Taste of Pakistan!
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button 
                component={Link} 
                to="/menu" 
                variant="contained" 
                size="large"
                sx={{
                  fontSize: '1.2rem',
                  py: 2,
                  px: 4,
                  borderRadius: 2,
                  backgroundColor: 'primary.main'
                }}
              >
                Order Now
              </Button>
            </motion.div>
          </Container>
        </Box>
      </motion.div>

      {/* Features Section */}
      <Box sx={{ py: 8, backgroundColor: '#f8f8f8' }}>
        <Container>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper 
                    elevation={3}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      height: '100%'
                    }}
                    component={motion.div}
                    whileHover={{ y: -10 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Box sx={{ color: 'primary.main', mb: 2 }}>
                        {feature.icon}
                      </Box>
                    </motion.div>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Popular Dishes Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                textAlign: 'center', 
                mb: 6,
                fontWeight: 'bold',
                color: 'primary.main'
              }}
            >
              Popular Dishes
            </Typography>
          </motion.div>
          <Grid container spacing={4}>
            {popularDishes.map((dish, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper 
                    elevation={3}
                    sx={{ height: '100%' }}
                    component={motion.div}
                    whileHover={{ y: -10 }}
                  >
                    <Box 
                      sx={{
                        height: 250,
                        overflow: 'hidden'
                      }}
                    >
                      <motion.img 
                        src={dish.image}
                        alt={dish.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Box>
                    <Box sx={{ p: 3 }}>
                      <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
                        {dish.name}
                      </Typography>
                      <Typography variant="h6" color="primary.main">
                        {dish.price}
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Box 
          sx={{ 
            py: 8, 
            backgroundColor: 'primary.main',
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 'bold' }}>
                Ready to Order?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4 }}>
                Bringing You the True Taste of Pakistan!
              </Typography>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                component={Link} 
                to="/menu" 
                variant="contained" 
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: 'primary.main',
                  fontSize: '1.2rem',
                  py: 2,
                  px: 4,
                  '&:hover': {
                    backgroundColor: 'grey.100'
                  }
                }}
              >
                View Our Menu
              </Button>
            </motion.div>
          </Container>
        </Box>
      </motion.div>
    </Layout>
  );
};

export default Home;