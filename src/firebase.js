import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBAxohQ0F123cBe0KgqAVhWj0uqWyOIc_A",
  authDomain: "mychat-dc335.firebaseapp.com",
  projectId: "mychat-dc335",
  storageBucket: "mychat-dc335.appspot.com",
  messagingSenderId: "829422179839",
  appId: "1:829422179839:web:00dd706bbd183dccd103ca",
  measurementId: "G-38YPXFY8J5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;