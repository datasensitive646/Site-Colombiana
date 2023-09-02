import { initializeApp } from "firebase/app";
import "firebase/database";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDhg5HYhN_GwR25jq1t45ngzwF6UheXOg",
  authDomain: "appagawgawg.firebaseapp.com",
  projectId: "appagawgawg",
  storageBucket: "appagawgawg.appspot.com",
  messagingSenderId: "17635267507",
  appId: "1:17635267507:web:daee8079e8fb8369f371c6"

};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { storage, db, auth };
