// https://firebase.google.com/docs/auth/web/password-auth
<script setup>
import { getAuth, signOut } from "firebase/auth";

function logOut() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("ok")
    })
    .catch((error) => {
      console.log("error")
    });
}
</script>

<template>
  <div>
    <button @click="logOut">Sign Out</button>
  </div>
</template>
