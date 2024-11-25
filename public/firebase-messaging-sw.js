importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
let config = {
        apiKey: "AIzaSyAFSeb-PdLAcioo_KIoIho1fOnx5lUBuS8",
        authDomain: "aljaberi-web.firebaseapp.com",
        projectId: "aljaberi-web",
        storageBucket: "aljaberi-web.appspot.com",
        messagingSenderId: "177327326278",
        appId: "1:177327326278:web:774e2a3df6cc88e5343647",
        measurementId: "G-PY9L1XYHVE",
 };
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/images/required/firebase-logo.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
