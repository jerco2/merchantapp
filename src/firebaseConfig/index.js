import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "merchantapp-20b6b.firebaseapp.com",
    databaseURL: "https://merchantapp-20b6b-default-rtdb.firebaseio.com",
    projectId: "merchantapp-20b6b",
    storageBucket: "merchantapp-20b6b.appspot.com",
    messagingSenderId: "670621391217",
    appId: "1:670621391217:web:e0409b9cf9473c49a37ed0",
    measurementId: "G-86FY0P0598",
  };

  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default StartFirebase;
