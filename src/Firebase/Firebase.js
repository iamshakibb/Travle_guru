import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./Config";

export const firebaseInit = () => {
  // Initialize Firebase
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};
