import React from 'react'
import {Box, Typography, Grid, Container, Link} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box sx={{
      bgcolor: "#1f2937",
      color: "#e5e7eb",
      pt: 6,
      pb: 4
    }}>
      <Container>
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{
              color: "#1976d2", // Changed to blue
              mb: 2,
              fontWeight: 600,
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: 40,
                height: 2,
                bgcolor: '#1976d2' // Changed to blue
              }
            }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{mb: 2}}>
              We serve delicious food with the finest ingredients and excellent service. Visit us for an unforgettable dining experience.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{
              color: "#1976d2", // Changed to blue
              mb: 2,
              fontWeight: 600,
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: 40,
                height: 2,
                bgcolor: '#1976d2' // Changed to blue
              }
            }}>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" display="block" sx={{
              mb: 1.5,
              textDecoration: "none",
              transition: "all 0.3s ease",
              '&:hover': {
                color: "#1976d2", // Changed to blue
                pl: 1
              }
            }}>
              Home
            </Link>
            <Link href="/menu" color="inherit" display="block" sx={{mb: 1, textDecoration: "none", '&:hover': {color: "#1976d2"}}}>
              Menu
            </Link>
            <Link href="/about" color="inherit" display="block" sx={{mb: 1, textDecoration: "none", '&:hover': {color: "#1976d2"}}}>
              About
            </Link>
            <Link href="/contact" color="inherit" display="block" sx={{mb: 1, textDecoration: "none", '&:hover': {color: "#1976d2"}}}>
              Contact
            </Link>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{color: "#1976d2", mb: 2}}>
              Contact Info
            </Typography>
            <Box sx={{display: "flex", mb: 1}}>
              <LocationOnIcon sx={{mr: 1, color: "#1976d2"}}/>
              <Typography variant="body2">123 Restaurant Street, City</Typography>
            </Box>
            <Box sx={{display: "flex", mb: 1}}>
              <PhoneIcon sx={{mr: 1, color: "#1976d2"}}/>
              <Typography variant="body2">+1 234 567 890</Typography>
            </Box>
            <Box sx={{display: "flex", mb: 1}}>
              <EmailIcon sx={{mr: 1, color: "#1976d2"}}/>
              <Typography variant="body2">info@restaurant.com</Typography>
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{color: "#1976d2", mb: 2}}>
              Follow Us
            </Typography>
            <Box sx={{
              display: 'flex',
              gap: 2,
              "& svg":{
                fontSize: "30px",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out"
              },
              "& .instagram:hover": { color: "#E4405F", transform: "scale(1.1)" },
              "& .facebook:hover": { color: "#1877F2", transform: "scale(1.1)" },
              "& .youtube:hover": { color: "#FF0000", transform: "scale(1.1)" },
              "& .github:hover": { color: "#171515", transform: "scale(1.1)" },
              "& .twitter:hover": { color: "#1DA1F2", transform: "scale(1.1)" },
              "& .linkedin:hover": { color: "#0A66C2", transform: "scale(1.1)" }
            }}>
              <InstagramIcon className="instagram"/>
              <FacebookIcon className="facebook"/>
              <YouTubeIcon className="youtube"/>
              <GitHubIcon className="github"/>
              <TwitterIcon className="twitter"/>
              <LinkedinIcon className="linkedin"/>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography 
          variant='body2'
          sx={{
            textAlign: "center",
            borderTop: "1px solid #e0e0e0",
            mt: 5,
            pt: 3,
            color: "#e5e7eb",
            fontSize: "0.875rem"
          }}>
            All rights reserved &copy; 2025 Made By Tahir
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer