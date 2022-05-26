// Import the functions you need from the SDKs you need
import firebase from "./firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWYwhrXzu06L-xpUSmKGb1LJI7cz6SWtA",
  authDomain: "yes-wedding.firebaseapp.com",
  databaseURL: "https://yes-wedding-default-rtdb.firebaseio.com",
  projectId: "yes-wedding",
  storageBucket: "yes-wedding.appspot.com",
  messagingSenderId: "11174419041",
  appId: "1:11174419041:web:7089abd97243071cfb6820"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
export default firebase;