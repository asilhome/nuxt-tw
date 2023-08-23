import { getAuth } from "firebase/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("middleware to: ", to);

  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
    console.log("user", user);
  } else {
    return navigateTo("/");
  }
  //   if (to.params.id === "1") {
  //     return abortNavigation();
  //   }
  //   return navigateTo("/");
});
