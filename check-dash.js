import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firebase config - isticmaal kii hore
const firebaseConfig = {
  apiKey: "AIzaSyDiMoJVmwCHzBU6T5lgKg3dINDbMncG7i0",
  authDomain: "khayrestore.firebaseapp.com",
  projectId: "khayrestore",
  storageBucket: "khayrestore.appspot.com",
  messagingSenderId: "102681208506",
  appId: "1:102681208506:web:0199e717c2362e85790483",
  measurementId: "G-BPSV9N1V0W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Hubi haddii user login yahay
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // User ma login galin → u dir login page
    window.location.href = "index.html";
  }
});