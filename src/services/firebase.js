// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAuth,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKeRERpSfoFQWMkRMbgvM7wmnzyEz6x_o",
  authDomain: "gb-messenger-ad5b7.firebaseapp.com",
  databaseURL: "https://gb-messenger-ad5b7-default-rtdb.firebaseio.com",
  projectId: "gb-messenger-ad5b7",
  storageBucket: "gb-messenger-ad5b7.appspot.com",
  messagingSenderId: "391414650942",
  appId: "1:391414650942:web:08ed5061278ee166c6d96f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
};

export const logIn = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
};

export const logOut = async () => {
    await signOut(auth);
};

export const userRef = ref(db, "user");
export const userNameRef = ref(db, "user/name");
export const userShowNameRef = ref(db, "user/showName");
export const chatsRef = ref(db, "chats");
export const messagesRef = ref(db, "messages")
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getMessagesRefById = (chatId) => ref(db, `messages/${chatId}`);
export const getMessagesListRefById = (chatId) => 
    ref(db, `messages/${chatId}/messageList`);



