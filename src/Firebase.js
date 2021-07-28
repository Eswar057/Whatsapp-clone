import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgno8rbj5ysCzYO0ImqwmiOVjWIdE5HRw",
  authDomain: "whatsapp-clone-be74b.firebaseapp.com",
  projectId: "whatsapp-clone-be74b",
  storageBucket: "whatsapp-clone-be74b.appspot.com",
  messagingSenderId: "782689654717",
  appId: "1:782689654717:web:faa5f4b24ddab5aea4e4d4",
  measurementId: "G-9LYV67563N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
