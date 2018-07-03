import firebase from 'firebase'

export const config = {
  apiKey: 'AIzaSyDXpZeKQPkahUO1BXwslUhsmn5ZBCyx9Nc',
  authDomain: 'vuechat-fbcdf.firebaseapp.com',
  databaseURL: 'https://vuechat-fbcdf.firebaseio.com',
  projectId: 'vuechat-fbcdf',
  storageBucket: 'vuechat-fbcdf.appspot.com',
  messagingSenderId: '1072283882132'

}

firebase.initializeApp(config)

var firebaseRef = firebase.database().ref()
export default firebase
export var chatRef = firebaseRef.child('chat')
