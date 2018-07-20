// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
import VueRouter from 'vue-router'
import firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(Vuefire)
Vue.use(VueRouter)
Vue.use(firebase)

let app
// var config = {
//   apiKey: 'AIzaSyDXpZeKQPkahUO1BXwslUhsmn5ZBCyx9Nc',
//   authDomain: 'vuechat-fbcdf.firebaseapp.com',
//   databaseURL: 'https://vuechat-fbcdf.firebaseio.com',
//   projectId: 'vuechat-fbcdf',
//   storageBucket: 'vuechat-fbcdf.appspot.com',
//   messagingSenderId: '1072283882132'
// }

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDXpZeKQPkahUO1BXwslUhsmn5ZBCyx9Nc',
  authDomain: 'vuechat-fbcdf.firebaseapp.com',
  databaseURL: 'https://vuechat-fbcdf.firebaseio.com',
  projectId: 'vuechat-fbcdf',
  storageBucket: 'vuechat-fbcdf.appspot.com',
  messagingSenderId: '1072283882132'
})
export const db = firebaseApp.database()

firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
})

// var firebaseRef = firebase.database().ref()
// export default firebase
// export var chatRef = firebaseRef.child('chat')

/* eslint-disable no-new */
// new Vue({
//   router,
//   created () {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         this.$router.push('/chat')
//       } else {
//         this.$router.push('/auth')
//       }
//     })
//   },
