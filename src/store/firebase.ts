import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyCdMZsOhTiYTPiEOGj97BMDi166hWW49WQ",
    authDomain: "pigilwin.firebaseapp.com",
    databaseURL: "https://pigilwin.firebaseio.com",
    projectId: "pigilwin",
    storageBucket: "pigilwin.appspot.com",
    messagingSenderId: "40386379634",
    appId: "1:40386379634:web:872f2c486fdfaea0d267eb"
});

export const signInWithEmailLink = async (email: string): Promise<void> => {
    await firebase.auth().sendSignInLinkToEmail(email, {
        handleCodeInApp: true,
        url: 'https://www.pigilwin.com',
    });
};