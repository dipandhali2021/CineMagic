
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnh6P5fcl2CrRXc0KOJD7gt7HHr829aAg",
  authDomain: "cinemagic-b4ce2.firebaseapp.com",
  databaseURL: "https://cinemagic-b4ce2-default-rtdb.firebaseio.com",
  projectId: "cinemagic-b4ce2",
  storageBucket: "cinemagic-b4ce2.appspot.com",
  messagingSenderId: "1094457273880",
  appId: "1:1094457273880:web:586ec1ff5a3192c43b5d6d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };