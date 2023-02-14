import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDuCEjfonq8ROAARQzQwm65q2znbm_EHaY",
  authDomain: "userinfometion.firebaseapp.com",
  projectId: "userinfometion",
  storageBucket: "userinfometion.appspot.com",
  messagingSenderId: "927054684773",
  appId: "1:927054684773:web:1990f1e0cec48cdfc81c8c"
};

const app = initializeApp(firebaseConfig);
export  const firestore = getFirestore(app)