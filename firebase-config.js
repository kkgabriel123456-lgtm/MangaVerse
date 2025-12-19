// ===== FIREBASE CONFIGURATION =====
// Projeto: mangaserver-3a572

const firebaseConfig = {
  apiKey: "AIzaSyDxG1zdDbmF21Z3HBsD2Bes1uSHKvnEHWY",
  authDomain: "mangaserver-3a572.firebaseapp.com",
  databaseURL: "https://mangaserver-3a572-default-rtdb.firebaseio.com",
  projectId: "mangaserver-3a572",
  storageBucket: "mangaserver-3a572.appspot.com",
  messagingSenderId: "508265309386",
  appId: "1:508265309386:web:a3b308c62f37fafa020033"
};
// ===== VARIÁVEIS GLOBAIS =====
let firebaseDB = null;
let firebaseAuth = null;
let useFirebase = false;

// ===== INICIALIZAR FIREBASE =====
function initializeFirebase() {
  try {
    if (typeof firebase === "undefined") {
      throw new Error("Firebase SDK não carregado");
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    firebaseDB = firebase.database();
    firebaseAuth = firebase.auth();
    useFirebase = true;

    console.log("✅ Firebase inicializado com sucesso");
    console.log("📡 Realtime Database conectado");

    // Login automático ANÔNIMO (necessário para comentários)
    firebaseAuth.signInAnonymously()
      .then(() => {
        console.log("👤 Usuário anônimo autenticado");
      })
      .catch(err => {
        console.error("❌ Erro no auth:", err);
      });

    return true;

  } catch (error) {
    console.warn("⚠️ Firebase indisponível");
    console.warn("➡️ Usando modo LOCAL (sem banco compartilhado)");
    console.error(error);
    useFirebase = false;
    return false;
  }
}

// ===== INICIAR QUANDO A PÁGINA CARREGAR =====
document.addEventListener("DOMContentLoaded", () => {
  initializeFirebase();
});
