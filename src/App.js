import React from 'react';
import Header from './components/Header/Header';
import { CssBaseline } from '@mui/material';
import { BrowserRouter} from 'react-router-dom';

import Footer from './components/footer/Footer';

import RoutesNavigator from './Routes';


function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <RoutesNavigator/>
    
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
