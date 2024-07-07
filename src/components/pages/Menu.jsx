import React from 'react';
import { Box, Typography } from '@mui/material';
import Footer from '../footer/Footer';

const Menu = () => {
  return (
    <div> <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',        
      }}
    >
      <Typography variant="h1">
        Menu
      </Typography>
    </Box>
    <Footer />
    </div>
    
  );
};

export default Menu;
