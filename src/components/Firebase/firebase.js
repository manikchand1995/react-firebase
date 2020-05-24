import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCbEBL1RfebwXcQy2vHw3MeM-7g2gN-vng",
    authDomain: "goldapp-1312.firebaseapp.com",
    databaseURL: "https://goldapp-1312.firebaseio.com",
    projectId: "goldapp-1312",
    storageBucket: "goldapp-1312.appspot.com",
    messagingSenderId: "302659100412",
    appId: "1:302659100412:web:0420fe266cac66dba4c179",
    measurementId: "G-EJ4TN54QD4"
  };

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);

}
 
export default Firebase;