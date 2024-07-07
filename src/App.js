<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
=======
import React from 'react';
import Header from './components/Header/Header';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes , Navigate} from 'react-router-dom';
import HomePage from './components/pages/home/HomePage.jsx';
import Menu from './components/pages/Menu';
import Profil from './components/pages/Profil';
import Footer from './components/footer/Footer';
import Inscription from './components/pages/inscription/Inscription.tsx';
import Login from './components/pages/login/Login.jsx';
import VoyAnnonce from './components/annonce/VoyAnnonce.jsx';
import BagageAnnonce from './components/annonce/BagageAnnonce.jsx';

>>>>>>> codePhone

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
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
>>>>>>> codePhone
    </div>
  );
}

export default App;
