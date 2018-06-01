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

// Initialize Raven
Raven.config('https://78a69bdd49b24469b328c09c291a93e1@sentry.io/1217364')
  .addPlugin(RavenVue, Vue)
  .install();

// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIG);

// Initialize Firebase Cloud Messaging
const messaging = firebase.messaging();
messaging.usePublicVapidKey('BMA56xFD0lLIGhj5VRFv7t4foKon4gf7P5rRLXECS6yQ2uCFvaLlSnS3ZUE7OnFNQlytmyreNLVHDEHxAkC5qec');

// Request Notification Permission
messaging.requestPermission()
  .then(() => {
    console.log('\n*** [PERMISSIONS]: Notification - Granted');
    // Retrieve Instance ID token for use with FCM
  })
  .catch(err => {
    console.error(err);
    Raven.captureException(err);
  });

import 'bootstrap/dist/css/bootstrap.css';
import '../build/css/mdb.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
