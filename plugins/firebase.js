// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDIZR_CYH1GmQThGmkEI0cGrRZFWg1Wnoo",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log("Firebase plugin activated.", app);
});
