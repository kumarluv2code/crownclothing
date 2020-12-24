import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCsPQmxn-ui44Mrpx7aScQYAWCWhrxOFcs",
    authDomain: "crown-e0ab5.firebaseapp.com",
    databaseURL: "https://crown-e0ab5.firebaseio.com",
    projectId: "crown-e0ab5",
    storageBucket: "crown-e0ab5.appspot.com",
    messagingSenderId: "1029809835636",
    appId: "1:1029809835636:web:28e8cd491650b7f0e38b21",
    measurementId: "G-VFPTJ8Q4YE"
};
  
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    console.log(snapShot)
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user ',error.message)
        }
    }
    return userRef
}

firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase