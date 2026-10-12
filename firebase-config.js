export const firebaseConfig = {
  apiKey: "AIzaSyAbBY4hukyTBvzT8WWAZ3dAp4aNKzVd99M",
  authDomain: "larino-beta.firebaseapp.com",
  projectId: "larino-beta",
  storageBucket: "larino-beta.firebasestorage.app",
  messagingSenderId: "367960859700",
  appId: "1:367960859700:web:adfad14bfc1d4122b41661"
};

export const isFirebaseConfigured = () =>
  firebaseConfig.apiKey &&
  !firebaseConfig.apiKey.startsWith("COLOQUE_") &&
  firebaseConfig.projectId &&
  !firebaseConfig.projectId.startsWith("SEU_");
