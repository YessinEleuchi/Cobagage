// Import the Firebase app script. This gives the service worker access to Firebase.
// Note that only Firebase Messaging can be used in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');

// Import the Firebase Messaging script. This allows the service worker to handle background messages.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in your app's Firebase config object.
// This object contains the Firebase project's configuration details.
// Reference: https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyBse5PhaMcWixWBjcNPE6PsTJC2l_FufCA", // Your Firebase API key
    authDomain: "cobagage-92b11.firebaseapp.com", // Your Firebase Auth domain
    projectId: "cobagage-92b11", // Your Firebase Project ID
    storageBucket: "cobagage-92b11.appspot.com", // Your Firebase Storage Bucket
    messagingSenderId: "686735255943", // Your Firebase Messaging Sender ID
    appId: "1:686735255943:web:d134fbbc50907747fd8b22", // Your Firebase App ID
    measurementId: "G-CVSL8D28C5" // Your Firebase Measurement ID
});
// Retrieve an instance of Firebase Messaging so that it can handle background messages.
// This allows the service worker to listen for and handle incoming messages when the web app is not in the foreground.
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    // Log the received background message payload for debugging purposes
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title; // Get the notification title from the payload
    const notificationOptions = {
        body: payload.notification.body, // Get the notification body from the payload
        icon: payload.notification.image, // Get the notification icon from the payload
    };
    // Show the notification with the title and options
   return ( self.registration.showNotification(notificationTitle, notificationOptions);
});
