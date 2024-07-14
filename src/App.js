<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
=======
import React from 'react';
import Header from './components/Header/Header';
import { CssBaseline } from '@mui/material';
import { BrowserRouter} from 'react-router-dom';

import Footer from './components/footer/Footer';

import RoutesNavigator from './Routes';

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
        <RoutesNavigator/>
    
      <Footer />
      </BrowserRouter>
>>>>>>> codePhone
    </div>
  );
}

export default App;
