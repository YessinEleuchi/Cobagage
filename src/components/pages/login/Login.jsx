import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './login.css';
import { Container, TextField, Button, Box, Typography, IconButton, InputAdornment, Link } from '@mui/material';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="main-container">
            <div className="photo-container">
                <h1>Connexion</h1>
                <h2>Accueil Connexion</h2>
            </div>
            <Box
                component="form"
                noValidate
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: '0 auto', padding: 3, fontWeight: 'bold' }}
            >
                <Typography variant="h5" gutterBottom>
                    Connexion
                </Typography>
                <TextField label="Email" name="email" type="email" required />
                <TextField
                    label="Mot de passe"
                    type={showPassword ? 'text' : 'password'}
                    required
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={togglePasswordVisibility}>
                                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Link href="#" variant="body2" align="right" sx={{ marginBottom: 2 }}>
                    Mot de passe oublié ?
                </Link>
                <Button type="submit" variant="contained" color="primary">
                    Connexion
                </Button>
            </Box>
        </div>
    );
};

export default Login;
