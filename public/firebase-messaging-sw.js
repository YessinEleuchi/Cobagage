importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyBse5PhaMcWixWBjcNPE6PsTJC2l_FufCA",
    authDomain: "cobagage-92b11.firebaseapp.com",
    projectId: "cobagage-92b11",
    storageBucket: "cobagage-92b11.appspot.com",
    messagingSenderId: "686735255943",
    appId: "1:686735255943:web:d134fbbc50907747fd8b22",
    measurementId: "G-CVSL8D28C5",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
