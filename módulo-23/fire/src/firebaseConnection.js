import firebase from 'firebase/app';
import 'firebase/firestore';


let firebaseConfig = {
    apiKey: "AIzaSyBUXxRetcOA85VXAXhLygPMVgTo8NzZc3Y",
    authDomain: "curso-sujeitoprogramador.firebaseapp.com",
    projectId: "curso-sujeitoprogramador",
    storageBucket: "curso-sujeitoprogramador.appspot.com",
    messagingSenderId: "637556934083",
    appId: "1:637556934083:web:fb947a72fef4db8e4c6976",
    measurementId: "G-K82YXRQBVP"
  };

  if(!firebase.apps.length){
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;