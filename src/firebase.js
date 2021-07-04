import firebase from 'firebase';
import 'firebase/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyBslrqetKbUsMwUJ-r7yWibK2LH5cfxkuQ",
  authDomain: "clone3-d04bc.firebaseapp.com",
  projectId: "clone3-d04bc",
  storageBucket: "clone3-d04bc.appspot.com",
  messagingSenderId: "676314016715",
  appId: "1:676314016715:web:300097655010454ebda44e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
  