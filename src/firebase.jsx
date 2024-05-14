import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDCHcZA0XRPGDNMtOgNG3mFmSQpA8MUuIk",
    authDomain: "snap-chat-clone-a65d7.firebaseapp.com",
    projectId: "snap-chat-clone-a65d7",
    storageBucket: "snap-chat-clone-a65d7.appspot.com",
    messagingSenderId: "636160210146",
    appId: "1:636160210146:web:ff75c6f8cd4dde10e51abb",
    // databaseURL:"https://snap-chat-clone-a65d7-default-rtdb.firebaseio.com"
  };

  //  const firebaseApp=initializeApp(firebaseConfig);
  //  const storage=firebase.storage();
  //  export default firebaseApp;


  // const db=firebaseApp.firestore();
  // console.log(db);

  // const auth=firebase.auth();
  // const storage=firebase.storage();
  // const provider=new firebase.auth.GoogleAuthProvider();

  // export default db;

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const storage = firebase.storage();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, db, provider, storage };

