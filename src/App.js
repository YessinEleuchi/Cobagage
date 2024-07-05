import React from 'react';
import Header from './components/Header/Header';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes , Navigate} from 'react-router-dom';
import HomePage from './components/pages/home/HomePage.jsx';
import Menu from './components/pages/Menu';
import Profil from './components/pages/Profil';
import Footer from './components/footer/Footer';
import Inscription from './components/pages/inscription/Inscription.jsx';
import Login from './components/pages/login/Login.jsx';
import VoyAnnonce from './components/annonce/VoyAnnonce.jsx';
import BagageAnnonce from './components/annonce/BagageAnnonce.jsx';


function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/HomePage" />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/login" element={<Login />} />
          <Route path="/VoyAnnonce" element={<VoyAnnonce />} />
          <Route path="/BagageAnnonce" element={<BagageAnnonce />} />

        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
