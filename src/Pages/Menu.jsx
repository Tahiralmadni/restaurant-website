import React, { useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Grid, 
  Container, 
  Tabs, 
  Tab,
  TextField,
  InputAdornment,
  Button,
  Chip,
  IconButton,
  CardActions,
  Divider,
  Rating
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [value, setValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterItems = (items) => {
    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (priceFilter === 'all') return matchesSearch;
      if (priceFilter === 'under300') return matchesSearch && parseInt(item.price.replace('Rs. ', '')) < 300;
      if (priceFilter === '300to600') {
        const price = parseInt(item.price.replace('Rs. ', ''));
        return matchesSearch && price >= 300 && price <= 600;
      }
      if (priceFilter === 'over600') return matchesSearch && parseInt(item.price.replace('Rs. ', '')) > 600;
      
      return matchesSearch;
    });
  };

  // Keep all the existing menuItems data here
  const menuItems = {
    pakistaniFood: [
      {
        name: "Chicken Biryani",
        description: "Aromatic basmati rice with tender chicken pieces and special spices",
        price: "Rs. 300",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: "Mutton Biryani",
        description: "Traditional biryani with tender mutton pieces and aromatic rice",
        price: "Rs. 400",
        image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: "Beef Karahi",
        description: "Spicy beef curry cooked in a traditional karahi with fresh tomatoes and ginger",
        price: "Rs. 800",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: "Chicken Karahi",
        description: "Classic Pakistani dish with tender chicken in a rich tomato-based gravy",
        price: "Rs. 600",
        image: "https://www.unileverfoodsolutions.pk/dam/global-ufs/mcos/meps/pakistan/calcmenu/recipes/PK-recipes/chicken-&-other-poultry-dishes/chicken-karahi/chicken-karahi_1260x709.jpg"
      },
      {
        name: "Nihari",
        description: "Slow-cooked beef stew in special spices, a traditional breakfast dish",
        price: "Rs. 350",
        image: "https://images.deliveryhero.io/image/fd-pk/LH/l2ps-hero.jpg?width=480&height=360&quality=45"
      },
      {
        name: "Paya",
        description: "Traditional trotters soup, slow-cooked with special spices",
        price: "Rs. 300",
        image: "https://images.unsplash.com/photo-1611489142329-5f62cfa43e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: "Chapli Kabab",
        description: "Peshawar's famous spiced minced meat patties",
        price: "Rs. 200",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: "Chicken Tikka",
        description: "Marinated and grilled chicken pieces with special spices",
        price: "Rs. 250",
        image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: "Dal Chawal",
        description: "Grilled minced meat skewers with aromatic spices",
        price: "Rs. 200",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: "Sweet potato",
        description: "Traditional lentils served with steamed rice",
        price: "Rs. 150",
        image: "https://images.unsplash.com/photo-1610631087218-f784839e48f1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ],
    fastFood: [
      {
        name: "Zinger Burger",
        description: "Crispy chicken fillet with special sauce and fresh veggies",
        price: "Rs. 350",
        image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: "Beef Burger",
        description: "Juicy beef patty with cheese and fresh vegetables",
        price: "Rs. 400",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: "Chicken Tikka Pizza",
        description: "Pizza topped with spicy chicken tikka and vegetables",
        price: "Rs. 800",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: "BBQ Pizza",
        description: "Pizza with BBQ chicken, onions, and special sauce",
        price: "Rs. 900",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: "Chicken Wings",
        description: "Crispy fried wings with choice of sauce",
        price: "Rs. 400",
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: "Chicken Nuggets",
        description: "Crispy chicken nuggets served with fries",
        price: "Rs. 300",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: "Club Sandwich",
        description: "Triple-decker sandwich with chicken and vegetables",
        price: "Rs. 250",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: "Chicken Shawarma",
        description: "Grilled chicken wrap with garlic sauce",
        price: "Rs. 200",
        image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: "French Fries",
        description: "Crispy potato fries with special seasoning",
        price: "Rs. 150",
        image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: "Cheese Fries",
        description: "French fries topped with melted cheese",
        price: "Rs. 200",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3OWJLaQ_WZS44qQEOUFrcv3OGGJTqXFBpQ&s"
      }
    ]
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const renderMenuSection = (items) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Grid container spacing={3}>
        {filterItems(items).map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'visible'
              }}>
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.image}
                      alt={item.name}
                      sx={{
                        objectFit: 'cover',
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        bgcolor: 'primary.main',
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: 2,
                        boxShadow: 3,
                        zIndex: 1
                      }}
                    >
                      {item.price}
                    </Box>
                  </motion.div>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {item.description}
                  </Typography>
                  <Rating value={4.5} precision={0.5} readOnly size="small" />
                </CardContent>
                <Divider />
                <CardActions sx={{ justifyContent: 'space-between', px: 2, py: 1 }}>
                  <Box>
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      style={{ display: 'inline-block' }}
                    >
                      <IconButton size="small" color="primary">
                        <FavoriteIcon />
                      </IconButton>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      style={{ display: 'inline-block' }}
                    >
                      <IconButton size="small" color="primary">
                        <ShareIcon />
                      </IconButton>
                    </motion.div>
                  </Box>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="contained" 
                      startIcon={<AddShoppingCartIcon />}
                      size="small"
                      onClick={() => handleAddToCart(item)}
                      sx={{
                        borderRadius: 2,
                        textTransform: 'none',
                        boxShadow: 2
                      }}
                    >
                      Add to Cart
                    </Button>
                  </motion.div>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );

  const handleAddToCart = (item) => {
    addToCart({
      id: item.name,
      name: item.name,
      price: parseInt(item.price.replace('Rs. ', '')),
      image: item.image
    });
    navigate('/addcart');
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Box 
          sx={{ 
            width: '100%', 
            bgcolor: 'background.paper',
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3")',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            py: 4
          }}
        >
          <Container>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100 
              }}
            >
              <Typography 
                variant="h2" 
                sx={{ 
                  textAlign: 'center', 
                  mt: 3, 
                  mb: 1, 
                  color: 'primary.main', 
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                Our Menu
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  textAlign: 'center', 
                  mb: 4, 
                  color: 'text.secondary',
                  fontWeight: 'light'
                }}
              >
                Discover our delicious selection of dishes
              </Typography>
            </motion.div>

            {/* Search and Filter Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Box sx={{ mb: 4 }}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item xs={12} md={6}>
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Search dishes..."
                        value={searchTerm}
                        onChange={handleSearch}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon color="primary" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </motion.div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                      {['all', 'under300', '300to600', 'over600'].map((filter, index) => (
                        <motion.div
                          key={filter}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Chip
                            icon={<LocalOfferIcon />}
                            label={filter === 'all' ? 'All Prices' : 
                                  filter === 'under300' ? 'Under Rs. 300' :
                                  filter === '300to600' ? 'Rs. 300 - 600' : 'Over Rs. 600'}
                            onClick={() => setPriceFilter(filter)}
                            color={priceFilter === filter ? 'primary' : 'default'}
                            clickable
                            sx={{ boxShadow: 1 }}
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
            
            {/* Menu Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Box sx={{ 
                borderRadius: 2,
                bgcolor: 'background.paper',
                boxShadow: 1,
                mb: 4
              }}>
                <Tabs 
                  value={value} 
                  onChange={handleChange} 
                  centered
                  sx={{
                    '& .MuiTab-root': {
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      minWidth: 120,
                      fontWeight: 'medium'
                    }
                  }}
                >
                  <Tab label="Pakistani Food" />
                  <Tab label="Fast Food" />
                </Tabs>
              </Box>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Box sx={{ mb: 4 }}>
                  {value === 0 && renderMenuSection(menuItems.pakistaniFood)}
                  {value === 1 && renderMenuSection(menuItems.fastFood)}
                </Box>
              </motion.div>
            </AnimatePresence>
          </Container>
        </Box>
      </motion.div>
    </Layout>
  );
};

export default Menu;