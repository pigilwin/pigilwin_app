import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { Blog, BlogWithoutId } from './blog/blogTypes';

firebase.initializeApp({
    apiKey: "AIzaSyCdMZsOhTiYTPiEOGj97BMDi166hWW49WQ",
    authDomain: "pigilwin.firebaseapp.com",
    databaseURL: "https://pigilwin.firebaseio.com",
    projectId: "pigilwin",
    storageBucket: "pigilwin.appspot.com",
    messagingSenderId: "40386379634",
    appId: "1:40386379634:web:872f2c486fdfaea0d267eb"
});

const firestore = firebase.firestore();
const collection = firestore.collection('blogs');

export const authenticateIn = async (email: string, password: string): Promise<firebase.auth.UserCredential> => {
    return await firebase.auth().signInWithEmailAndPassword(email, password);
};

export const authenticateOut = async (): Promise<void> => {
    await firebase.auth().signOut();
}

export const createPost = async (blogWithoutId: BlogWithoutId): Promise<Blog> => {
    const docReferrence = await collection.add(blogWithoutId);
    return blogWithIdBuilder(blogWithoutId, docReferrence.id);
    
}

const blogWithIdBuilder = (blog: BlogWithoutId, id: string): Blog => {
    return {
        title: blog.title,
        content: blog.content,
        date: blog.date,
        id: id
    };
}