// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBqJ7W2T5q4zh-chKn-1ePGHQ_p4zdQbM0",
  authDomain: "safepath-ai-1875b.firebaseapp.com",
  databaseURL:
    "https://safepath-ai-1875b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "safepath-ai-1875b",
  storageBucket: "safepath-ai-1875b.appspot.com",
  messagingSenderId: "694082839070",
  appId: "1:694082839070:web:92dfdc58e710e2a1d3040f",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function subscribeHazards(callback) {
  const hazardRef = ref(db, "hazards/");
  return onValue(hazardRef, (snapshot) => {
    const data = snapshot.val() || {};
    const arr = Object.keys(data).map((k) => ({ id: k, ...data[k] }));
    callback(arr);
  });
}

export async function pushHazard(hazard) {
  const hazardRef = ref(db, "hazards/");
  const pushed = push(hazardRef);
  await set(pushed, hazard);
  return pushed.key;
}
