import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCGeCv63nBclfVYLGECE_lxnZFpqa7zB1E",
    authDomain: "crwn-dbnew.firebaseapp.com",
    projectId: "crwn-dbnew",
    storageBucket: "crwn-dbnew.appspot.com",
    messagingSenderId: "47921565487",
    appId: "1:47921565487:web:47c700bb0a1b1768d39bda",
    measurementId: "G-M790GPT32F"
}
firebase.initializeApp(config)

export const auth =  firebase.auth()
export const firestore =  firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({'prompt' : 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
};

export default firebase;




