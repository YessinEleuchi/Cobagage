import React, { Component , Suspense } from "react";
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


// import i18n (needs to be bundled ;)) 
import './i18n';

const root = createRoot(document.getElementById('root'));
root.render(
  
  <Suspense fallback="loading">
    <App />
    </Suspense>
);