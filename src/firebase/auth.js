import firebase from './index'

export function mailAuth () {
  const provider = new firebase.auth.EmailAuthProvider(
  )
  // const result = auth().signInWithPopup(provider);
  return firebase.auth().signInWithPopup(provider).then((result) => {
    console.log('Auth worked!', result)
    this.$router.push('/chat')
  }, (error) => {
    console.log('Unable to auth', error)
  })
}
