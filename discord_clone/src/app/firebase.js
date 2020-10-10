import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDRC0lSQwZ-WJAMstUwsA9Oy6W5tZv9LFY",
  authDomain: "discord-clone-4ce21.firebaseapp.com",
  databaseURL: "https://discord-clone-4ce21.firebaseio.com",
  projectId: "discord-clone-4ce21",
  storageBucket: "discord-clone-4ce21.appspot.com",
  messagingSenderId: "246881450404",
  appId: "1:246881450404:web:c19d65d9b209292104a931",
  measurementId: "G-70NPFLBW45",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
