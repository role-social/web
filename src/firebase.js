import { initializeApp } from 'firebase/app';

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  confirmPasswordReset,
} from 'firebase/auth';

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  getDoc,
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
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    return e;
  }
};

const registerWithEmailAndPassword = async (newUser) => {
  const email = newUser.email;
  const password = newUser.password;

  delete newUser.email;
  delete newUser.password;
  delete newUser.confirmPassword;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    newUser.uid = user.uid;
    await addDoc(collection(db, 'users'), newUser);
  } catch (e) {
    console.error(e);
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

const addSocial = async (social) => {
  if (!social.cep) return;

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${social.cep}&key=AIzaSyDXtFMCvHTzG3IEhbZ6Jql2XReZrnhF6UA&language=pt-BR`;
  const response = await fetch(url);
  const local = await response.json();

  console.log(local);
  if (local.status != 'OK') {
    alert("Digite um CEP válido!");
    return "Error: cep";
  }

  social = { ...social, ...local.results[0].geometry.location };
  return await addDoc(collection(db, 'sociais'), social);
};

const getSociais = async () => {
  const sociaisRef = collection(db, 'sociais');
  const sociaisSnap = await getDocs(sociaisRef);

  let arrSociais = [];
  sociaisSnap.forEach((role) => arrSociais.push(role.data()));

  return arrSociais;
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPassowrdReset,
  logout,
  addSocial,
  getSociais,
};
