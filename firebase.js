import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3I_2pZGL4MZbMJFqewnqI3KfsOa7hG1s",
  authDomain: "whatsapp2-4096e.firebaseapp.com",
  projectId: "whatsapp2-4096e",
  storageBucket: "whatsapp2-4096e.appspot.com",
  messagingSenderId: "792976719140",
  appId: "1:792976719140:web:3e36742a3f6bdea4cb07b1",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
