<script setup>
import { getAuth, onAuthStateChanged } from "firebase/auth";

function getUser() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("uid", uid);
    } else {
      // User is signed out
      console.log("User is signed out");
      // ...
    }
  });
}
</script>

<template>
  <button @click="getUser">User</button>
</template>
