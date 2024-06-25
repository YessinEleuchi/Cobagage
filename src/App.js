/*import React from 'react';
import Header from './components/Header/Header';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './components/pages/Accueil';
import Menu from './components/pages/Menu';
import Profil from './components/pages/Profil';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
*/
// App.js
import React from 'react';
import Header from './components/Header/Header';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes , Navigate} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Menu from './components/pages/Menu';
import Profil from './components/pages/Profil';
import Footer from './components/footer/Footer';

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
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
