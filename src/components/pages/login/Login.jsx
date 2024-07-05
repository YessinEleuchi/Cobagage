import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './login.css';

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

const Login = () => {
  return (
    <div>
      <div className="photo-container">
        <h1>Connexion</h1>
        <h2>Accueil Connexion  </h2>
      </div>
      <Box
        component="form"
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: '0 auto', padding: 3, fontWeight: "bold" }}
      >
        <Typography variant="h5" gutterBottom>
          Connexion
        </Typography>
        <TextField
          label="Email"
          name="email"
          type="email"
          required
        />
        <TextField
          label="Mot de passe"
          name="Mot de passe"
          type="Mot de passe"
          required
        />
       
        <Button type="submit" variant="contained" color="primary">
          Connexion
        </Button>
      </Box>
    </div >
  )
}

export default Login
