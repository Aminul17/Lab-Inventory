import firebase from "firebase/compat/app";
import "firebase/compat/database";


const firebaseConfig = {
  apiKey: "AIzaSyBXsAFkxZFofOnskF9ir4ApsCMiVmMDdcY",
  authDomain: "logicism-auth-f8f7b.firebaseapp.com",
  databaseURL: "https://logicism-auth-f8f7b-default-rtdb.firebaseio.com",
  projectId: "logicism-auth-f8f7b",
  storageBucket: "logicism-auth-f8f7b.appspot.com",
  messagingSenderId: "373412639806",
  appId: "1:373412639806:web:d5718a30f17da0ddf2cd6f"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
