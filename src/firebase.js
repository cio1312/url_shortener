import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjYumj-ywYqc-1FVq5yga5zhvT1qj-eeE",
    authDomain: "url-shortener-47449.firebaseapp.com",
    projectId: "url-shortener-47449",
    storageBucket: "url-shortener-47449.appspot.com",
    messagingSenderId: "349270601515",
    appId: "1:349270601515:web:61898b21406c35bdaa1f6e",
    measurementId: "G-CVRMBZNZ51"
  };
  
  const app = firebase.initializeApp(firebaseConfig);  // initialise the app
export const database = app.firestore();   // setting up database and exporting 
  

  
 // go to built -> cloude firestore -> create database -> test mode ->next ->select any location -> enable