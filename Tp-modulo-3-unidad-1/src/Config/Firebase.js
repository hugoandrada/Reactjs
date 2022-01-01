import firebase from 'firebase/compat/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBr3Sq5FhhtTxHQ0PCHDgFjuijQ9CwMuA",
    authDomain: "tp-react2021.firebaseapp.com",
    projectId: "tp-react2021",
    storageBucket: "tp-react2021.appspot.com",
    messagingSenderId: "317284707735",
    appId: "1:317284707735:web:b6c0d54621390dec3c68d2"
  };

firebase.initializeApp(firebaseConfig)
//inicializar la configuracion y exportar
export default firebase;

