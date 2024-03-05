import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA6igCztm7hu1yCTlWUzN-efF4T0y9b1dE",
  authDomain: "movie-152e3.firebaseapp.com",
  projectId: "movie-152e3",
  storageBucket: "movie-152e3.appspot.com",
  messagingSenderId: "114030766534",
  appId: "1:114030766534:web:22b6cce61b9de373e7aac7"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
