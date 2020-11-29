import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBMYRPoQrmQOO-jutPc8k3fjVzQ1Jydmck",
    authDomain: "sm41-e487e.firebaseapp.com",
    databaseURL: "https://sm41-e487e.firebaseio.com",
    projectId: "sm41-e487e",
    storageBucket: "sm41-e487e.appspot.com",
    messagingSenderId: "103408330962",
    appId: "1:103408330962:web:70023a9d631d41b323e50b"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
