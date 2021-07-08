import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_di4QvE3swQD7npoNSlpoWX6bGY4pg9o",
  authDomain: "messaging-app-28817.firebaseapp.com",
  projectId: "messaging-app-28817",
  storageBucket: "messaging-app-28817.appspot.com",
  messagingSenderId: "756739902903",
  appId: "1:756739902903:web:5ae36e5bad1f643f9aac32",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
