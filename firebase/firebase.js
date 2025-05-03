import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuração do Firebase (substitua pelos dados fornecidos pelo Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyDHF618Y63QqcYRGyS56XG8oBlEeBYxJSE",
  authDomain: "three-brothers-2d3f4.firebaseapp.com",
  projectId: "three-brothers-2d3f4",
  storageBucket: "three-brothers-2d3f4.firebasestorage.app",
  messagingSenderId: "1098105584232",
  appId: "1:1098105584232:web:35eec271490e1cfa1519dd",
  measurementId: "G-06BEDYL0QM",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta o serviço de autenticação
export const auth = getAuth(app);