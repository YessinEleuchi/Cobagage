import React from 'react';
import Header from './components/Header/Header';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes , Navigate} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Menu from './components/pages/Menu';
import Profil from './components/pages/Profil';
import Footer from './components/footer/Footer';
import Inscription from './components/pages/inscription/Inscription.jsx';
import Login from './components/pages/login/Login.jsx';

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
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
