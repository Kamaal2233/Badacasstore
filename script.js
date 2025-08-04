// script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDiMoJVmwCHzBU6T5lgKg3dINDbMncG7i0",
  authDomain: "khayrestore.firebaseapp.com",
  projectId: "khayrestore",
  storageBucket: "khayrestore.appspot.com",
  messagingSenderId: "102681208506",
  appId: "1:102681208506:web:0199e717c2362e85790483"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login logic
window.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const errorDiv = document.getElementById("error");
  
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        errorDiv.textContent = "Login failed";
      });
  });
});