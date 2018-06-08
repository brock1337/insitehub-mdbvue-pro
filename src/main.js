// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { store } from './store/store';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
import firebase from 'firebase';
import { FIREBASE_CONFIG } from "../constants";

require('firebase/firestore');

import 'bootstrap/dist/css/bootstrap.css';
import '../build/css/mdb.css';

Vue.config.productionTip = false;

// Initialize Raven
Raven.config('https://78a69bdd49b24469b328c09c291a93e1@sentry.io/1217364')
  .addPlugin(RavenVue, Vue)
  .install();

// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.firestore();

// Add data to Firestore
// db.collection('channels').add({
//   id: 1,
//   name: 'Management',
//   description: 'The big wigs.'
// })
//   .then(docRef => {
//     console.log('Document written with ID: ', docRef.id);
//   })
//   .catch(err => {
//     console.error('[ERROR]: collection add ', err);
//   });

// Adding second set
// db.collection('channels').add({
//   id: 2,
//   name: 'Marketing',
//   description: 'The vision people.'
// })
//   .then(docRef => {
//     console.log('Document written with ID: ', docRef.id);
//   })
//   .catch(err => {
//     console.error('[ERROR]: collection add ', err);
//   });

// Read data from Firestore
db.collection('channels').get()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  })
  .catch(err => {
    console.error('[ERROR]: collection get ', err);
  });

// Initialize Firebase Cloud Messaging
const messaging = firebase.messaging();
messaging.usePublicVapidKey('BMA56xFD0lLIGhj5VRFv7t4foKon4gf7P5rRLXECS6yQ2uCFvaLlSnS3ZUE7OnFNQlytmyreNLVHDEHxAkC5qec');

// Request Notification Permission
// messaging.requestPermission()
//   .then(() => {
//     console.log('[PERMISSIONS]: Notifications - Granted');
//
//     // Retrieve Instance ID token for use with FCM
//     messaging.getToken()
//       .then(token => {
//         if (token) {
//           console.log('Token Retrieval Successful: ', token);
//
//         } else {
//           console.log('No Instance ID token avail.  Request permission to generate one.');
//
//           // Show permission UI
//         }
//       })
//       .catch(err => {
//         console.error(err);
//         Raven.captureException(err);
//       });
//   })
//   .catch(err => {
//     console.error(err);
//     Raven.captureException(err);
//   });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
