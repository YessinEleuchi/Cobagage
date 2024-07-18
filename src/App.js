import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import RoutesNavigator from './Routes';
import { generateToken, messaging } from "./components/notifications/Firebase";
import { onMessage } from "firebase/messaging";
import { toast, ToastContainer } from "react-toastify";
import Message from "./components/notifications/Message";
import "react-toastify/dist/ReactToastify.css";

function App() {
    useEffect(() => {
        generateToken();
        onMessage(messaging, (payload) => {
            console.log('Message received. ', payload);
            alert(`Foreground notification received: ${payload.notification.title}`);
        });
    }, []);

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/firebase-messaging-sw.js')
                .then((registration) => {
                    console.log('Service Worker registered with scope:', registration.scope);
                }).catch((err) => {
                console.log('Service Worker registration failed:', err);
            });
        }
    }, []);

    useEffect(() => {
        onMessage(messaging, (payload) => {
            toast(<Message notification={payload.notification} />);
        });
    }, []);

    return (
        <div className="App">
            <CssBaseline />
            <BrowserRouter>
                <Header />
                <RoutesNavigator />
                <Footer />
            </BrowserRouter>
            <ToastContainer />
        </div>
    );
}

export default App;
