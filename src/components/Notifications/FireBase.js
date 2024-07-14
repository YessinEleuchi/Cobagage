import { initializeApp } from '@firebase/app';
import { getMessaging, getToken } from '@firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyBse5PhaMcWixWBjcNPE6PsTJC2l_FufCA",
    authDomain: "cobagage-92b11.firebaseapp.com",
    projectId: "cobagage-92b11",
    storageBucket: "cobagage-92b11.appspot.com",
    messagingSenderId: "686735255943",
    appId: "1:686735255943:web:d134fbbc50907747fd8b22",
    measurementId: "G-CVSL8D28C5"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
const setupNotifications = async () => {
    // Request permission for notifications
    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      // Get the FCM token
      const token = await getToken(messaging , {
          vapidKey: 'BFWzyCI6A5P2VoqmxXNy3aXRDMyyHLEMQx-sVHikpT3n8OQf3wO8zKbR7nin4SzCJFCsUUmTcVoetGQ1_NWavpo'
      });
        console.log(token);
    }  
};
export { messaging, setupNotifications };