import React from 'react';
import { Box, Typography } from '@mui/material';

const Menu = () => {
  return (
    <Box
      sx={{
        display: 'flex',        
        justifyContent: 'center',
       alignItems: 'center',
        minHeight: '100vh',
       textAlign: 'center',
        padding: '10%',
      }}
    >
      <Typography variant="h1">
        Menu
      </Typography>
    </Box>
  );
};

export default Menu;
