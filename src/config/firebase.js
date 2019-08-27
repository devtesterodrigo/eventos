import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCPlGRKCA0T1bJXCKqQ9aNT-cudLq3P5TY",
    authDomain: "eventos-26b34.firebaseapp.com",
    databaseURL: "https://eventos-26b34.firebaseio.com",
    projectId: "eventos-26b34",
    storageBucket: "eventos-26b34.appspot.com",
    messagingSenderId: "779079233494",
    appId: "1:779079233494:web:6a6b7475dfaaad90"
  };

  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
