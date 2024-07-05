import React, { useState, useMemo } from 'react'
import { useForm, Controller } from 'react-hook-form';
import './inscription.css';
import './CountrySelect'
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import CountrySelect from './CountrySelect';


const Inscription = () => {
 

  return (
    <div>
      <div className="photo-container">
        <h1>S'inscrire</h1>
        <h2>Accueil S'inscrire  </h2>
      </div>
    <Box
      component="form"
      noValidate
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: '0 auto', padding: 3 , fontWeight:"bold" }}
    >
      <Typography variant="h5" gutterBottom>
        Register
      </Typography>
      <TextField
        label="Nom complet"
        name="Nom complet"
        required
      />
      
      <TextField
        label="Email"
        name="email"
        type="email"
        required
      />
      <TextField
        label="Mot de passe"
        name="Mot de passe"
        type="password"
        required
      />
        <TextField
          label="Confirmez votre mot de passe"
          name="Confirmez votre mot de passe"
          type="Confirmez votre mot de passe"
          required
        />
        <CountrySelect />
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </Box>
      </div >
  );
};



export default Inscription;
