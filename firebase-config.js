// ===== FIREBASE CONFIGURATION =====
// 🔴 IMPORTANTE: Substitua com suas credenciais do Firebase!
// Siga o guia em FIREBASE_SETUP.md

const firebaseConfig = {
  apiKey: "AIzaSyDemoKey123456789", // TODO: Substitua
  authDomain: "seu-projeto.firebaseapp.com", // TODO: Substitua
  databaseURL: "https://seu-projeto-default-rtdb.firebaseio.com", // TODO: Substitua
  projectId: "seu-projeto", // TODO: Substitua
  storageBucket: "seu-projeto.appspot.com", // TODO: Substitua
  messagingSenderId: "123456789", // TODO: Substitua
  appId: "1:123456789:web:abc123def456" // TODO: Substitua
};

// Inicializar Firebase quando disponível
let firebaseDB = null;
let useFirebase = false;

function initializeFirebase() {
  try {
    if (typeof firebase !== 'undefined' && !firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      firebaseDB = firebase.database();
      useFirebase = true;
      console.log('✅ Firebase inicializado com sucesso!');
      console.log('📱 Usando banco de dados COMPARTILHADO');
      return true;
    } else if (firebase && firebase.apps.length) {
      firebaseDB = firebase.database();
      useFirebase = true;
      console.log('✅ Firebase já estava inicializado');
      return true;
    }
  } catch (error) {
    console.warn('⚠️ Firebase não configurado. Usando banco de dados LOCAL (IndexedDB)');
    console.warn('Para usar banco compartilhado, siga: FIREBASE_SETUP.md');
    useFirebase = false;
  }
  return false;
}

// Chamar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initializeFirebase, 100);
});
