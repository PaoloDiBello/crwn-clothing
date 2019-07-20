import firebase from 'firebase/app'

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCaPF3ytYm_wNMlhHRUapZeWe7Oirjujw8",
    authDomain: "crwn-db-aedfa.firebaseapp.com",
    databaseURL: "https://crwn-db-aedfa.firebaseio.com",
    projectId: "crwn-db-aedfa",
    storageBucket: "",
    messagingSenderId: "1074959847941",
    appId: "1:1074959847941:web:2ce8951af3f31c4d"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, ...additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log('snapShot', snapShot)

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('Error creating the user', e.message)
        }
    }

    return userRef;

}

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;