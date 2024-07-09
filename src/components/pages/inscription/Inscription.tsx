import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SinUpSchema } from "../../validation/SinUpSchema";
import { type Inputs } from "../../validation/SinUpSchema";
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";



// Interface for defining the structure of countries
interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
}



const Inscription = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onBlur",
    resolver: zodResolver(SinUpSchema),
  });

  const submitForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // Add logic for submitting form data, e.g., API call
  };

  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [] as Country[],
    errorMessage: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCountryState({
          ...countryState,
          loading: true,
        });

        const dataUrl = `https://restcountries.com/v3.1/all`;
        const response = await axios.get<Country[]>(dataUrl);

        setCountryState({
          ...countryState,
          countries: response.data,
          loading: false,
        });
      } catch (error) {
        setCountryState({
          ...countryState,
          loading: false,
          errorMessage: "Sorry, something went wrong",
        });
      }
    };

    fetchData();
  }, []);

  const { loading, errorMessage, countries } = countryState;
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
  };

  const searchSelectedCountry = countries.find(
    (country) => country.name.common === selectedCountry
  );

  return (
    <div>
      <div className="photo-container">
        <h1>S'inscrire</h1>
        <h2>Accueil S'inscrire</h2>
      </div>
      <Box
        component="form"
        onSubmit={handleSubmit(submitForm)}
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 400,
          margin: "0 auto",
          padding: 3,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Register
        </Typography>
        <TextField
          label="Nom complet"
          required
          {...register("NomComplet")}
          error={!!errors.NomComplet}
          helperText={errors.NomComplet?.message}
        />
        <TextField
          label="Email"
          required
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Mot de passe "
          type="password"
          required
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          label="Confirmez votre mot de passe"
          type="password"
          required
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />
        <Controller
          name="country"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth error={!!errors.country}>
              <InputLabel id="country-label">Pays</InputLabel>
              <Select
                labelId="country-label"
                value={field.value}
                onChange={(e) => {
                  field.onChange(e);
                  handleCountryChange(e.target.value as string);
                }}
                label="Country"
              >
                {countries.map((item) => (
                  <MenuItem key={uuidv4()} value={item.name.common}>
                    {item.name.common}
                  </MenuItem>
                ))}
              </Select>
              <Typography variant="body2" color="error">
                {errors.country?.message}
              </Typography>
            </FormControl>
          )}
        />
        {searchSelectedCountry && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src={searchSelectedCountry.flags.png}
              alt="Country flag"
              style={{ width: 40, height: 20 }}
            />
            <Typography variant="body1">
              {searchSelectedCountry.idd.root}
              {searchSelectedCountry.idd.suffixes.join(", ")}
            </Typography>
            <TextField
              label="Phone"
              type="tel"
              required
              {...register("phone")}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          </Box>
        )}
        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        )}
        {errorMessage && (
          <Typography color="error" variant="body2">
            {errorMessage}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ backgroundColor: "#f78400", color: "#fff" }}
        >
          S'inscrire
        </Button>
      </Box>
    </div>
  );
};

export default Inscription;
