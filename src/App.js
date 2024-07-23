import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import RoutesNavigator from './Routes';
import { generateToken, messaging } from "./components/notifications/Firebase";
import { onMessage } from "firebase/messaging";
import { Toaster } from 'react-hot-toast';
import {toast} from "react-hot-toast";
import { showNotification } from './store/notificationSlice';
import {useDispatch} from "react-redux";


function App() {
    const dispatch = useDispatch ();
    const [notification, setNotification] = useState(false);


    useEffect(() => {
        generateToken();
        onMessage(messaging, (payload) => {
            console.log('Message received. ', payload);
            setNotification(true);
            dispatch(showNotification(payload.notification));
            toast(payload.notification.title + ": " + payload.notification.body);
        });
    }, [dispatch]);


    return (
        <div className="App">
            <CssBaseline />
            <BrowserRouter>
                <Header notification={notification} />
                <RoutesNavigator />
                <Footer />
                <Toaster/>
            </BrowserRouter>
        </div>
    );
}

export default App;