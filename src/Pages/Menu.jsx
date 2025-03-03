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
  Rating,
  useMediaQuery
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
  const matchesSM = useMediaQuery('(max-width:600px)');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterItems = (items) => {
    console.log('Filtering items:', items); // Debug log
    const filtered = items.filter(item => {
      const price = parseInt(item.price.replace('Rs. ', ''));
      
      // Basic search filter
      const matchesSearch = !searchTerm || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase());

      // Basic price filter
      let matchesPrice = true;
      if (priceFilter === 'under300') matchesPrice = price < 300;
      if (priceFilter === '300to600') matchesPrice = (price >= 300 && price <= 600);
      if (priceFilter === 'over600') matchesPrice = price > 600;

      return matchesSearch && matchesPrice;
    });
    
    console.log('Filtered results:', filtered); // Debug log
    return filtered;
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
        image: "https://www.google.com/imgres?q=beef%20karahi&imgurl=https%3A%2F%2Funtoldrecipesbynosheen.com%2Fwp-content%2Fuploads%2F2021%2F01%2Fkarahi-gosht-main-2.jpg&imgrefurl=https%3A%2F%2Funtoldrecipesbynosheen.com%2Fbeef-karahi-gosht-recipe%2F&docid=VvEbmCzpa1YL1M&tbnid=rnI3YOu0hI73KM&vet=12ahUKEwiIn7i5geyLAxU7iv0HHbkcHnYQM3oECBUQAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwiIn7i5geyLAxU7iv0HHbkcHnYQM3oECBUQAA"
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
        image: "https://www.masala.tv/wp-content/uploads/2021/12/Paye-Recipe.jpg"
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
        image: "https://www.masala.tv/wp-content/uploads/2021/08/Dal-Chawal-Recipe.jpg"
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

  const renderMenuSection = (items) => {
    if (!items || items.length === 0) {
      return <Typography>No items found</Typography>;
    }

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <Grid container spacing={{ xs: 2, sm: 2, md: 3 }}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400 }}
                style={{ height: '100%' }}
              >
                <Card sx={{ 
                  height: '100%', 
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: { xs: '100%', sm: '100%', md: '100%' }
                }}>
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardMedia
                        component="img"
                        height={{ xs: '180', sm: '200', md: '200' }}
                        image={item.image}
                        alt={item.name}
                        sx={{ 
                          objectFit: 'cover',
                          width: '100%'
                        }}
                      />
                    </motion.div>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        bgcolor: 'primary.main',
                        color: 'white',
                        px: { xs: 1.5, sm: 2 },
                        py: { xs: 0.3, sm: 0.5 },
                        borderRadius: 2,
                        boxShadow: 3,
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {item.price}
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: { xs: 1.5, sm: 2 } }}>
                    <Typography 
                      variant="h6" 
                      gutterBottom
                      sx={{ 
                        fontSize: { xs: '1rem', sm: '1.25rem' },
                        fontWeight: 'bold'
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ 
                        mb: 2,
                        fontSize: { xs: '0.875rem', sm: '0.875rem' },
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Rating value={4.5} precision={0.5} readOnly size="small" />
                  </CardContent>
                  <Divider />
                  <CardActions sx={{ 
                    justifyContent: 'space-between', 
                    p: { xs: 1, sm: 1.5 },
                    flexWrap: 'wrap',
                    gap: 1
                  }}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <motion.div whileHover={{ scale: 1.2 }}>
                        <IconButton size={matchesSM ? "small" : "medium"}>
                          <FavoriteIcon fontSize={matchesSM ? "small" : "medium"} />
                        </IconButton>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.2 }}>
                        <IconButton size={matchesSM ? "small" : "medium"} color="primary">
                          <ShareIcon fontSize={matchesSM ? "small" : "medium"} />
                        </IconButton>
                      </motion.div>
                    </Box>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="contained"
                        startIcon={<AddShoppingCartIcon />}
                        size={matchesSM ? "small" : "medium"}
                        onClick={() => handleAddToCart(item)}
                        sx={{ 
                          borderRadius: 2,
                          whiteSpace: 'nowrap'
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
  };

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
      <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              textAlign: 'center', 
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              mb: { xs: 2, sm: 3 }
            }}
          >
            Our Menu
          </Typography>
          
          {/* Search and Filter Section */}
          <Box sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  placeholder="Search dishes..."
                  value={searchTerm}
                  onChange={handleSearch}
                  size={matchesSM ? "small" : "medium"}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  display: 'flex', 
                  gap: 1, 
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}>
                  {['all', 'under300', '300to600', 'over600'].map((filter) => (
                    <Chip
                      key={filter}
                      label={filter === 'all' ? 'All Prices' : 
                            filter === 'under300' ? 'Under Rs. 300' :
                            filter === '300to600' ? 'Rs. 300 - 600' : 'Over Rs. 600'}
                      onClick={() => setPriceFilter(filter)}
                      color={priceFilter === filter ? 'primary' : 'default'}
                      clickable
                    />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Tabs */}
          <Tabs value={value} onChange={handleChange} sx={{ mb: 4 }}>
            <Tab label="Pakistani Food" />
            <Tab label="Fast Food" />
          </Tabs>

          {/* Menu Items */}
          {value === 0 && renderMenuSection(filterItems(menuItems.pakistaniFood))}
          {value === 1 && renderMenuSection(filterItems(menuItems.fastFood))}
        </motion.div>
      </Container>
    </Layout>
  );
};

export default Menu;