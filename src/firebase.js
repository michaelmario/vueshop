import  firebase from 'firebase/app';
import "firebase/auth"
import "firebase/firestore"
import 'firebase/storage'
// replace the values with your firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC5tcwq6cTOBXwDzAwuY5_WMBMIeEOl-J8",
  authDomain: "myshop-12843.firebaseapp.com",
  projectId: "myshop-12843",
  storageBucket: "myshop-12843.appspot.com",
  messagingSenderId: "890494367886",
  appId: "1:890494367886:web:58c1ffba95ef385ac671df",
  measurementId: "G-33FLWJ3EZ6"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage()
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
// collection references
const usersCollection = db.collection('users');
export {
    db,
    auth,
    storage, 
    usersCollection,
    timestamp  
}

