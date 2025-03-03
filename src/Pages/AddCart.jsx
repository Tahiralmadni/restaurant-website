import React from 'react';
import { useCart } from '../context/CartContext';
import Layout from '../Components/Layout/Layout';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Alert,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import PaymentsIcon from '@mui/icons-material/Payments';

const AddCart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [paymentMethod, setPaymentMethod] = React.useState('creditcard');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState('PK');

  const countries = [
    { code: 'AF', name: 'Afghanistan', phoneCode: '+93', length: 9 },
    { code: 'AL', name: 'Albania', phoneCode: '+355', length: 9 },
    { code: 'DZ', name: 'Algeria', phoneCode: '+213', length: 9 },
    { code: 'AD', name: 'Andorra', phoneCode: '+376', length: 6 },
    { code: 'AO', name: 'Angola', phoneCode: '+244', length: 9 },
    { code: 'AR', name: 'Argentina', phoneCode: '+54', length: 10 },
    { code: 'AM', name: 'Armenia', phoneCode: '+374', length: 8 },
    { code: 'AU', name: 'Australia', phoneCode: '+61', length: 9 },
    { code: 'AT', name: 'Austria', phoneCode: '+43', length: 10 },
    { code: 'AZ', name: 'Azerbaijan', phoneCode: '+994', length: 9 },
    { code: 'BH', name: 'Bahrain', phoneCode: '+973', length: 8 },
    { code: 'BD', name: 'Bangladesh', phoneCode: '+880', length: 10 },
    { code: 'BY', name: 'Belarus', phoneCode: '+375', length: 9 },
    { code: 'BE', name: 'Belgium', phoneCode: '+32', length: 9 },
    { code: 'BZ', name: 'Belize', phoneCode: '+501', length: 7 },
    { code: 'BJ', name: 'Benin', phoneCode: '+229', length: 8 },
    { code: 'BO', name: 'Bolivia', phoneCode: '+591', length: 8 },
    { code: 'BR', name: 'Brazil', phoneCode: '+55', length: 11 },
    { code: 'BG', name: 'Bulgaria', phoneCode: '+359', length: 9 },
    { code: 'KH', name: 'Cambodia', phoneCode: '+855', length: 9 },
    { code: 'CM', name: 'Cameroon', phoneCode: '+237', length: 9 },
    { code: 'CA', name: 'Canada', phoneCode: '+1', length: 10 },
    { code: 'CN', name: 'China', phoneCode: '+86', length: 11 },
    { code: 'CO', name: 'Colombia', phoneCode: '+57', length: 10 },
    { code: 'HR', name: 'Croatia', phoneCode: '+385', length: 9 },
    { code: 'CY', name: 'Cyprus', phoneCode: '+357', length: 8 },
    { code: 'CZ', name: 'Czech Republic', phoneCode: '+420', length: 9 },
    { code: 'DK', name: 'Denmark', phoneCode: '+45', length: 8 },
    { code: 'EG', name: 'Egypt', phoneCode: '+20', length: 10 },
    { code: 'FI', name: 'Finland', phoneCode: '+358', length: 10 },
    { code: 'FR', name: 'France', phoneCode: '+33', length: 9 },
    { code: 'DE', name: 'Germany', phoneCode: '+49', length: 11 },
    { code: 'GR', name: 'Greece', phoneCode: '+30', length: 10 },
    { code: 'HU', name: 'Hungary', phoneCode: '+36', length: 9 },
    { code: 'IN', name: 'India', phoneCode: '+91', length: 10 },
    { code: 'ID', name: 'Indonesia', phoneCode: '+62', length: 10 },
    { code: 'IR', name: 'Iran', phoneCode: '+98', length: 10 },
    { code: 'IQ', name: 'Iraq', phoneCode: '+964', length: 10 },
    { code: 'IE', name: 'Ireland', phoneCode: '+353', length: 9 },
    { code: 'IL', name: 'Israel', phoneCode: '+972', length: 9 },
    { code: 'IT', name: 'Italy', phoneCode: '+39', length: 10 },
    { code: 'JP', name: 'Japan', phoneCode: '+81', length: 10 },
    { code: 'JO', name: 'Jordan', phoneCode: '+962', length: 9 },
    { code: 'KZ', name: 'Kazakhstan', phoneCode: '+7', length: 10 },
    { code: 'KW', name: 'Kuwait', phoneCode: '+965', length: 8 },
    { code: 'MY', name: 'Malaysia', phoneCode: '+60', length: 9 },
    { code: 'MX', name: 'Mexico', phoneCode: '+52', length: 10 },
    { code: 'MA', name: 'Morocco', phoneCode: '+212', length: 9 },
    { code: 'NL', name: 'Netherlands', phoneCode: '+31', length: 9 },
    { code: 'NZ', name: 'New Zealand', phoneCode: '+64', length: 9 },
    { code: 'PK', name: 'Pakistan', phoneCode: '+92', length: 11 },
    { code: 'PL', name: 'Poland', phoneCode: '+48', length: 9 },
    { code: 'SA', name: 'Saudi Arabia', phoneCode: '+966', length: 9 },
    { code: 'SG', name: 'Singapore', phoneCode: '+65', length: 8 },
    { code: 'ZA', name: 'South Africa', phoneCode: '+27', length: 9 },
    { code: 'KR', name: 'South Korea', phoneCode: '+82', length: 10 },
    { code: 'ES', name: 'Spain', phoneCode: '+34', length: 9 },
    { code: 'SE', name: 'Sweden', phoneCode: '+46', length: 9 },
    { code: 'CH', name: 'Switzerland', phoneCode: '+41', length: 9 },
    { code: 'TH', name: 'Thailand', phoneCode: '+66', length: 9 },
    { code: 'TR', name: 'Turkey', phoneCode: '+90', length: 10 },
    { code: 'AE', name: 'UAE', phoneCode: '+971', length: 9 },
    { code: 'UK', name: 'United Kingdom', phoneCode: '+44', length: 10 },
    { code: 'US', name: 'United States', phoneCode: '+1', length: 10 },
    { code: 'VN', name: 'Vietnam', phoneCode: '+84', length: 9 }
];


  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setPhoneNumber('');
    setPhoneError('');
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    const country = countries.find(c => c.code === selectedCountry);
    
    if (value.length <= country.length) {
      setPhoneNumber(value);
      if (value.length === country.length) {
        setPhoneError('');
      } else {
        setPhoneError(`Phone number must be ${country.length} digits `);
      }
    }
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    const country = countries.find(c => c.code === selectedCountry);
    
    if (phoneNumber.length !== country.length) {
      setPhoneError(`Phone number must be ${country.length} digits for ${country.name}`);
      return;
    }
    
    // Here you would typically integrate with a payment gateway
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleQuantityChange = (itemId, change) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        updateQuantity(itemId, newQuantity);
      }
    }
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <Layout>
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" sx={{ my: 4, textAlign: 'center' }}>
          Shopping Cart
        </Typography>

        {cartItems.length === 0 ? (
          <Typography variant="h6" sx={{ textAlign: 'center', my: 4 }}>
            Your cart is empty
          </Typography>
        ) : (
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              {cartItems.map((item) => (
                <Card key={item.id} sx={{ mb: 2, display: 'flex', position: 'relative' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 140 }}
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent sx={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="subtitle1" color="primary.main">
                        Rs. {item.price}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <IconButton
                        size="small"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography>{item.quantity}</Typography>
                      <IconButton
                        size="small"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        <AddIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ p: 2 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Order Summary</Typography>
                <Divider sx={{ mb: 2 }} />
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1">
                    Subtotal: Rs. {calculateTotal()}
                  </Typography>
                  <Typography variant="subtitle1">
                    Delivery Fee: Rs. 100
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                    Total: Rs. {calculateTotal() + 100}
                  </Typography>
                </Box>

                <Divider sx={{ mb: 2 }} />

                <form onSubmit={handlePaymentSubmit}>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Select Country</InputLabel>
                    <Select
                      value={selectedCountry}
                      onChange={handleCountryChange}
                      label="Select Country"
                    >
                      {countries.map((country) => (
                        <MenuItem key={country.code} value={country.code}>
                          {country.name} ({country.phoneCode})
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl component="fieldset" sx={{ width: '100%', mb: 2 }}>
                    <FormLabel component="legend">Payment Method</FormLabel>
                    <RadioGroup
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                      <FormControlLabel
                        value="creditcard"
                        control={<Radio />}
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CreditCardIcon sx={{ color: 'primary.main' }} />
                            <Typography>Credit/Debit Card</Typography>
                          </Box>
                        }
                      />
                      <FormControlLabel
                        value="paypal"
                        control={<Radio />}
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <img 
                              src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
                              alt="PayPal"
                              style={{ width: 40, height: 24, objectFit: 'contain' }}
                              loading="lazy"
                            />
                            <Typography>PayPal</Typography>
                          </Box>
                        }
                      />
                      <FormControlLabel
                        value="jazzcash"
                        control={<Radio />}
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <img 
                              src="https://seeklogo.com/images/J/jazz-cash-logo-829841352F-seeklogo.com.png"
                              alt="JazzCash"
                              style={{ width: 60, height: 24, objectFit: 'contain' }}
                              loading="lazy"
                            />
                            <Typography>JazzCash</Typography>
                          </Box>
                        }
                      />
                      <FormControlLabel
                        value="mastercard"
                        control={<Radio />}
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <img 
                              src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/homepage/Home/mc-logo-52.svg"
                              alt="Mastercard"
                              style={{ width: 40, height: 24, objectFit: 'contain' }}
                              loading="lazy"
                            />
                            <Typography>Mastercard</Typography>
                          </Box>
                        }
                      />
                    </RadioGroup>
                  </FormControl>

                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    error={!!phoneError}
                    helperText={phoneError}
                    sx={{ mb: 2 }}
                    required
                    InputProps={{
                      startAdornment: (
                        <Typography sx={{ color: 'text.secondary', mr: 1 }}>
                          {countries.find(c => c.code === selectedCountry)?.phoneCode}
                        </Typography>
                      ),
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{ mb: 2 }}
                  >
                    Proceed to Payment
                  </Button>
                </form>

                {showSuccess && (
                  <Alert severity="success" sx={{ mt: 2 }}>
                    Payment request sent successfully!
                  </Alert>
                )}
              </Card>
            </Grid>
          </Grid>
        )}
      </Container>
    </Layout>
  );
};

export default AddCart;