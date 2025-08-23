// auth.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDiMoJVmwCHzBU6T5lgKg3dINDbMncG7i0",
  authDomain: "khayrestore.firebaseapp.com",
  projectId: "khayrestore",
  storageBucket: "khayrestore.appspot.com",
  messagingSenderId: "102681208506",
  appId: "1:102681208506:web:0199e717c2362e85790483"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Check auth state
onAuthStateChanged(auth, (user) => {
  const protectedPage = !window.location.href.includes("index.html");
  
  if (user) {
    // 🔹 Fetch user data
    const userRef = doc(db, "users", user.uid);
    getDoc(userRef).then((docSnap) => {
      if (docSnap.exists()) {
        const userData = docSnap.data();
        localStorage.setItem("userData", JSON.stringify(userData));
        
        const welcome = document.getElementById("welcome");
        if (welcome) welcome.textContent = `Welcome, ${userData.name}`;
      }
    });
  } else {
    if (protectedPage) {
      window.location.href = "index.html";
    }
  }
});

// ✅ Logout button
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("userData");
        window.location.href = "index.html";
      })
      .catch((error) => {
        alert("Logout failed: " + error.message);
      });
  });
}
onAuthStateChanged(auth, (user) => {
  const protectedPage = !window.location.href.includes("index.html");
  
  if (!user && protectedPage) {
    // user ma jiro, bogga wuxuu u baahan yahay login, sidaas darteed u redirect garee
    window.location.href = "index.html";
  }
});

logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // Waxaa laga saaray session-ka
      localStorage.removeItem("userData"); // Optional
      window.location.href = "index.html"; // Dib ugu laabo login
    })
    .catch((error) => {
      alert("Logout failed: " + error.message);
    });
});