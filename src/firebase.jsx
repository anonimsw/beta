import { initializeApp } from "firebase/app";
import {  getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDFPIOGDoodkX6k_D6kwAf1kCTp6DyltMI",
  authDomain: "orchidee-order.firebaseapp.com",
  databaseURL: "https://orchidee-order-default-rtdb.firebaseio.com",
  projectId: "orchidee-order",
  storageBucket: "orchidee-order.appspot.com",
  messagingSenderId: "131754140982",
  appId: "1:131754140982:web:bed72adc29d5bcab1aff97",
  measurementId: "G-YTZ2YCFDPM"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);