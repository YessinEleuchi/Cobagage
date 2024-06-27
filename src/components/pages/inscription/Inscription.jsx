import React, { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Box,
    Typography,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    FormControlLabel,
    Radio ,
    RadioGroup ,
    FormLabel ,
    FormGroup  ,
    Checkbox ,

    
} from '@mui/material';


const Inscription = () => {
    const [genre, setGenre] = useState('');
    const [nom,setNom] = useState('');
    const [prenom,setPrenom] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [ville,setVille] = useState('');
    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    };
    const handleVilleChange = (event) => {
        setVille(event.target.value);
    };
    const [loisir, setLoisir] = useState({
        music: false,
        sport: false,
        cinema: false,
        lecture: false,
    });
    const handleLoisir = (e) => {
        setLoisir({
            ...loisir,
            [e.target.name]: e.target.checked,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        alert(`${nom} , ${prenom},${email},${password},${genre},${ville} ,Loisirs: ${getSelectedLoisirs()} `);
    };
    const getSelectedLoisirs = () => {
        return Object.keys(loisir)
            .filter(key => loisir[key])
            .join(', ');
    };
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Inscription
                </Typography>
                <Box onSubmit={handleSubmit} component="form" noValidate sx={{ mt: 3 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="nom"
                        label="Nom"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        onChange={(e)=>setNom(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="prenom"
                        label="Prénom"
                        name="prenom"
                        autoComplete="prenom"
                        onChange={(e) => setPrenom(e.target.value)}

                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}

                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Mot de passe"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}

                    />
                    <FormControl component="fieldset" margin="normal">
                        <RadioGroup row value={genre} onChange={handleGenreChange} >
                        
                            <FormControlLabel value="female" control={<Radio />} label="Femme" />
                            <FormControlLabel value="male" control={<Radio />} label="Homme" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="ville-label">Ville</InputLabel>
                        <Select
                            labelId="ville-label"
                            id="ville"
                            label="Ville"
                            defaultValue=""
                            onChange={handleVilleChange}

                        >
                            <MenuItem value="Sfax">Sfax</MenuItem>
                            <MenuItem value="Tunis">Tunis</MenuItem>
                        </Select>
                    </FormControl>
                    <FormLabel component="legend">Loisir</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={loisir.music}
                                    onChange={handleLoisir}
                                    name="music"
                                    color="primary"
                                />
                            }
                            label="Music"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={loisir.sport}
                                    onChange={handleLoisir}
                                    name="sport"
                                    color="primary"
                                />
                            }
                            label="Sport"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={loisir.cinema}
                                    onChange={handleLoisir}
                                    name="cinema"
                                    color="primary"
                                />
                            }
                            label="Cinema"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={loisir.lecture}
                                    onChange={handleLoisir}
                                    name="lecture"
                                    color="primary"
                                />
                            }
                            label="Lecture"
                        />
                    </FormGroup>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Inscription;
