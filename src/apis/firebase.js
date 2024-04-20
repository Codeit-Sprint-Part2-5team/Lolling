// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCBgBM1oqiRIJxFvEBtYkrp-ah4-bV3Hvs',
  authDomain: 'rolling-69e73.firebaseapp.com',
  projectId: 'rolling-69e73',
  storageBucket: 'rolling-69e73.appspot.com',
  messagingSenderId: '512640827857',
  appId: '1:512640827857:web:fae453363addb01d17a0f0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export default app;
