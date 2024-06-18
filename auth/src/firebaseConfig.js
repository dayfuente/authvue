import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };
const firebaseConfig = {
    apiKey: "AIzaSyAGu5-i7JgfCeJLcZX6d3t6fD4SNOeogq4",
    authDomain: "vue-3-2024-42243.firebaseapp.com",
    projectId: "vue-3-2024-42243",
    storageBucket: "vue-3-2024-42243.appspot.com",
    messagingSenderId: "559027288319",
    appId: "1:559027288319:web:d35d26e90431f2298774ca"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };