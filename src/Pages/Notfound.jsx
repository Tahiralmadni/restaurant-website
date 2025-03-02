import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '70vh',
          textAlign: 'center',
          padding: '20px'
        }}
      >
        <Typography variant="h1" sx={{ fontSize: '8rem', fontWeight: 'bold', color: '#d32f2f' }}>
          404
        </Typography>
        <Typography variant="h4" sx={{ mb: 2, color: '#666' }}>
          Oops! Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: '#666', maxWidth: '600px' }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/')}
          sx={{
            borderRadius: 2,
            padding: '10px 30px',
            fontSize: '1.1rem'
          }}
        >
          Back to Home
        </Button>
      </Box>
    </Layout>
  )
}

export default Notfound