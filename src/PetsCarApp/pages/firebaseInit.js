import { getFirestore } from "firebase/firestore";
import firebase from "../firebaseConfig";
import { getAuth } from "firebase/auth";

export const db = getFirestore(firebase);
export const auth = getAuth(firebase);
