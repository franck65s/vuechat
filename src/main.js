// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
// import VueRouter from 'vue-router'
import firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(Vuefire)
// Vue.use(VueRouter)
Vue.use(firebase)

let app
const config = {
  apiKey: 'AIzaSyDXpZeKQPkahUO1BXwslUhsmn5ZBCyx9Nc',
  authDomain: 'vuechat-fbcdf.firebaseapp.com',
  databaseURL: 'https://vuechat-fbcdf.firebaseio.com',
  projectId: 'vuechat-fbcdf',
  storageBucket: 'vuechat-fbcdf.appspot.com',
  messagingSenderId: '1072283882132'
}
var firebaseApp = firebase.initializeApp(config)
var firebaseRef = firebaseApp.database().ref()
export default firebase
export var chatRef = firebaseRef.child('chat')
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
