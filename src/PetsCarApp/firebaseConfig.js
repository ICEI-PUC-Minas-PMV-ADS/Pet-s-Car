import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAsX6UbKj0MgpusIq9e1vKiaMK80kwTPWM",
  authDomain: "aplicativo-petscar.firebaseapp.com",
  projectId: "aplicativo-petscar",
  storageBucket: "aplicativo-petscar.appspot.com",
  messagingSenderId: "590758404845",
  appId: "1:590758404845:web:6b4884f67c5595d6dae2e4",
  measurementId: "G-6DYYXG7ZPN",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
