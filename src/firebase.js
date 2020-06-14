import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBc_V0VuIybwBTqanNp5BJ_uJW4xehNIpY",
    authDomain: "mit-btp-2-t-20.firebaseapp.com",
    databaseURL: "https://mit-btp-2-t-20.firebaseio.com",
    projectId: "mit-btp-2-t-20",
    storageBucket: "mit-btp-2-t-20.appspot.com",
    messagingSenderId: "530775460534",
    appId: "1:530775460534:web:242dc509a7742ed2377417",
    measurementId: "G-C8WTL8N9Y7"
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { email, displayName, photoURL } = user;
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                ...additionalData
            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();

        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};