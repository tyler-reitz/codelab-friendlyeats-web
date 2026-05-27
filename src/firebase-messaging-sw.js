importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCdpvxW-j16Kv5F2BGyyh8Ql2sQYGBPzWQ',
  authDomain: 'friendlychat-5efa2.firebaseapp.com',
  projectId: 'friendlychat-5efa2',
  storageBucket: 'friendlychat-5efa2.firebasestorage.app',
  messagingSenderId: '552185686294',
  appId: '1:552185686294:web:b9d6c8a6f129e7248d4837',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = { body: payload.notification.body };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
