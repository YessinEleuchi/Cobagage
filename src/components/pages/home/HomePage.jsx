// components/pages/HomePage.jsx
import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './HomePage.css'; 
const HomePage = () => {
 
  return (
    <div>
      <Button
        variant="contained"
        component={Link}
        to="../VoyAnnonce"
        className="button-voyage" 
      >
        Vendre KG de voyage
      </Button>
      <Button
        variant="contained"
        component={Link}
        to="../BagageAnnonce"
        className="button-bagages" 
      >
        Envoi des bagages
      </Button>
    </div>
  );
}

export default HomePage;
