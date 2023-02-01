
const firebaseConfig = {
    apiKey: "AIzaSyC2mHbVQ6l0YWQoilUlFwbN6JN-Tpqka8A",
    authDomain: "testing-894c1.firebaseapp.com",
    projectId: "testing-894c1",
    storageBucket: "testing-894c1.appspot.com",
    messagingSenderId: "1060756987456",
    appId: "1:1060756987456:web:aed539ec9adb175e8b49a5",
    measurementId: "G-HZY0PV5ZBX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
console.log("Firebase running..",db);

const Auth = firebase.auth();