// https://firebase.google.com/docs/auth/web/start
<script setup>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function signIn() {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, "asil.home@gmail.com", "password")
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log("user", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log("errorCode", errorCode);
      console.log("errorMessage", errorMessage);
    });
}

definePageMeta({
  layout: "signin-layout",
});
</script>

<template>
  <div class="my-12 bg-red-100">
    <button @click="signIn">Sign Inn</button>
  </div>
</template>
