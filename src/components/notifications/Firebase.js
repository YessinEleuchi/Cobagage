import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const publicKey = process.env.REACT_APP_FIREBASE_VAPID_KEY;

{/*const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};*/}
const firebaseConfig = {
    apiKey: "AIzaSyBse5PhaMcWixWBjcNPE6PsTJC2l_FufCA",
    authDomain: "cobagage-92b11.firebaseapp.com",
    projectId: "cobagage-92b11",
    storageBucket: "cobagage-92b11.appspot.com",
    messagingSenderId: "686735255943",
    appId: "1:686735255943:web:d134fbbc50907747fd8b22",
    measurementId: "G-CVSL8D28C5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
    const permission = await Notification.requestPermission();
    console.log("Notification permission:", permission);

    if (permission === "granted") {
        const token = await getToken(messaging, { vapidKey: publicKey });
        console.log(token);
        console.log(publicKey)
    }
};
