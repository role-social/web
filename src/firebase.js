import { initializeApp } from 'firebase/app';

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA0tkv4Gf-ALLt86MtxRUoM6mA32SCZ4Vg',
  authDomain: 'app-role.firebaseapp.com',
  databaseURL: 'https://app-role-default-rtdb.firebaseio.com',
  projectId: 'app-role',
  storageBucket: 'app-role.appspot.com',
  messagingSenderId: '911585398184',
  appId: '1:911585398184:web:2f515554f5a3c9c8b7219d',
  measurementId: 'G-5NPHB50GT3',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (e) {
    console.error(e);
    alert(e.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {}
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (e) {
    console.error(e);
    alert(e.message);
  }
};

const sendPassowrdReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Link de reset de senha enviado!');
  } catch (e) {
    console.error(e);
    alert(e);
  }
};

const logout = () => {
  signOut(auth);

  return (
    <div className="alert alert-primary" role="alert">
      This is a primary alert—check it out!
    </div>
  );
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPassowrdReset,
  logout,
};
