// Configure este arquivo com os dados do seu projeto Firebase.
// Não coloque senhas, chaves privadas ou credenciais de serviço aqui.
export const firebaseConfig = {
  apiKey: "COLOQUE_SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};
export const isFirebaseConfigured = () =>
  firebaseConfig.apiKey && !firebaseConfig.apiKey.startsWith("COLOQUE_") &&
  firebaseConfig.projectId && !firebaseConfig.projectId.startsWith("SEU_");
