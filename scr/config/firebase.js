import firebase from "firebase"
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAHUX9AgAkWBOggYOVeWhdLYsOOBAzHh0o",
    authDomain: "authentication-8f574.firebaseapp.com",
    projectId: "authentication-8f574",
    storageBucket: "authentication-8f574.appspot.com",
    messagingSenderId: "190237716524",
    appId: "1:190237716524:web:a8b73a5e82453011442189"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default firebase