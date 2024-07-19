import './App.css';
import React, { useEffect , useState } from 'react';
import Header from './components/Header/Header';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import RoutesNavigator from './Routes';
import { generateToken, messaging } from "./components/notifications/Firebase";
import { onMessage } from "firebase/messaging";

function App() {
    const [notification, setNotification] = useState(false);

    useEffect(() => {
        generateToken();
        onMessage(messaging, (payload) => {
            console.log('Message received. ', payload);
            setNotification(true);
        });
    }, []);


    return (
        <div className="App">
            <CssBaseline />
            <BrowserRouter>
                <Header notification={notification} />
                <RoutesNavigator />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
