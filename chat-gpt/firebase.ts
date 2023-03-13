import {getApp, getApps , initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3_BdhsZRj9PmRNBuTw2PJXRra8E06Dro",
  authDomain: "chat-gpt-37f5d.firebaseapp.com",
  databaseURL: "https://chat-gpt-37f5d-default-rtdb.firebaseio.com",
  projectId: "chat-gpt-37f5d",
  storageBucket: "chat-gpt-37f5d.appspot.com",
  messagingSenderId: "735671584793",
  appId: "1:735671584793:web:4a85fbd46d4a66eb610288"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)


export { db };