import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAJyTl_JM46DEvKsNBbhXY-g-401DXDKX8",
    authDomain: "ventas-app-pro-d5bc9.firebaseapp.com",
    projectId: "ventas-app-pro-d5bc9",
    storageBucket: "ventas-app-pro-d5bc9.firebasestorage.app",
    messagingSenderId: "340730905177",
    appId: "1:340730905177:web:3dcad510606332290ea748"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// REGISTRO
window.registrar = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Usuario registrado correctamente");
    window.location.href = "login.html";
  } catch (error) {
    alert("Error: " + error.message);
  }
};

// LOGIN
window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login exitoso");
    window.location.href = "ventas.html"; // redirige al CRUD
  } catch (error) {
    alert("Error: " + error.message);
  }
};