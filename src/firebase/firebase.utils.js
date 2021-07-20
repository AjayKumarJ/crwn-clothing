import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyC3e3NOhSM9SwGU5rpomvgPwd6RXeY2gXQ",
    authDomain: "crwn-db-179c2.firebaseapp.com",
    projectId: "crwn-db-179c2",
    storageBucket: "crwn-db-179c2.appspot.com",
    messagingSenderId: "564135662166",
    appId: "1:564135662166:web:06dae04e9f7c277f5c61f7",
    measurementId: "G-FT0T7PT8DW"

}
firebase.initializeApp(config)

export const auth =  firebase.auth()
export const firestore =  firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({'prompt' : 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;




