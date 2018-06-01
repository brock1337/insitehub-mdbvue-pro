import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { FIREBASE_API_SIGNUP_EMAIL, FIREBASE_API_LOGIN_EMAIL, FIREBASE_API_LOGIN_ANON } from '../../constants';
import firebase from 'firebase';
import Raven from 'raven-js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    idToken: null,
    refreshToken: null,
    user: null
  },
  getters: {
    authenticated (state) {
      console.log('[Vuex] getters: authenticated');
      return state.idToken !== null;
    }
  },
  actions: {
    signup: ({ commit }, payload) => {
      axios.post(FIREBASE_API_SIGNUP_EMAIL, {
        email: payload.email,
        password: payload.pwd
      })
        .then(res => {
          console.log('[Vuex] actions: signup', res);
        
          // commit('authUser', {
          //   idToken: res.data.idToken,
          //   refreshToken: res.data.refreshToken,
          //   user: res.data
          // });
        
        })
        .catch(error => {
          console.error('[ERROR]: signup', error);
          Raven.captureException(error);
        });
    },
    login: ({ commit }, payload) => {
      axios.post(FIREBASE_API_LOGIN_EMAIL, {
        email: payload.email,
        password: payload.pwd
      })
        .then(res => {
          console.log('[Vuex] actions: login', res.data);
        
          // commit('authUser', {
          //   idToken: res.data.idToken,
          //   refreshToken: res.data.refreshToken,
          //   user: res.data
          // });
        
        })
        .catch(error => {
          console.error('[ERROR]: login', error);
          Raven.captureException(error);
        });
    },
    anonLogin: ({ commit }, payload) => {
      console.log('[Vuex] actions: anonLogin');
    
      axios.post(FIREBASE_API_LOGIN_ANON, {
        returnSecureToken: true
      })
        .then(res => {
          console.log('[anonLogin] - Response', res);
        
          // commit('authUser', {
          //   idToken: res.data.idToken,
          //   refreshToken: res.data.refreshToken,
          //   user: res.data
          // });
        })
        .catch(error => {
          console.error('[ERROR]: Anon Login', error);
          Raven.captureException(error);
        });
    },
    logout: ({ commit }) => {
      firebase.auth().signOut()
        .then(() => {
          console.log('**** Logout Successful');
        
          commit('authUser', {
            idToken: null,
            refreshToken: null,
            user: null
          });
        })
        .catch(error => {
          console.error('[ERROR]: logout', error);
          Raven.captureException(error);
        });
    }
  },
  mutations: {
  
  }
});
