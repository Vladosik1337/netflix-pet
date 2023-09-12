import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAY7SiBKo2iPihA428kHe-ceLaYjuPzbY",
  authDomain: "netflix-clone-d7d1a.firebaseapp.com",
  projectId: "netflix-clone-d7d1a",
  storageBucket: "netflix-clone-d7d1a.appspot.com",
  messagingSenderId: "213504291455",
  appId: "1:213504291455:web:5709885edabd326bd9c54a",
  measurementId: "G-DBX2ZS5WE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
