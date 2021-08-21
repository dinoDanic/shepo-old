import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6o2pIBLMG5eX_3NgB08RZUvDjTjgjuvw",
  authDomain: "shepo-tm.firebaseapp.com",
  projectId: "shepo-tm",
  storageBucket: "shepo-tm.appspot.com",
  messagingSenderId: "911562555324",
  appId: "1:911562555324:web:39c8e126899517020f35b9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
