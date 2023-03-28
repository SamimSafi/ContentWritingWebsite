import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCV4I25_mYVTrgl1kTs51HHGJAzxjtMo9I",
  authDomain: "twoguystaste-64535.firebaseapp.com",
  databaseURL: "https://twoguystaste-64535-default-rtdb.firebaseio.com",
  projectId: "twoguystaste-64535",
  storageBucket: "twoguystaste-64535.appspot.com",
  messagingSenderId: "84283259563",
  appId: "1:84283259563:web:74178dae8bf2e628cdd5ee",
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);
export { app, firestore, storage };
