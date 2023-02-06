import { initializeApp } from "firebase/app";
import { initializeFirestore, collection, CollectionReference } from "firebase/firestore";

const firestoreCollections = {
  formData: "formData",
};

const firebaseConfig = {
  apiKey: "AIzaSyCuS9WRaljYmGcoftDb3Y8rF258pmySQZY",
  authDomain: "elektro-2e1b3.firebaseapp.com",
  projectId: "elektro-2e1b3",
  storageBucket: "elektro-2e1b3.appspot.com",
  messagingSenderId: "222568200367",
  appId: "1:222568200367:web:7e4653d347fea58f2a7c5a",
};

const app = initializeApp(firebaseConfig);
const firestore = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
const getCollectionRef = <D>(collectionName: string) => collection(firestore, collectionName) as CollectionReference<D>;

export { app, firestore, getCollectionRef, firestoreCollections };
