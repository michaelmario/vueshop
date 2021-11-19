<template>
  <div class="container">
    <h3 class="mt-5 lineheigth-1">Connexion</h3>
    <div class="mt-5 text-center" id="firebaseui-auth-container"></div>
  </div>
</template>
<script>
import { auth } from "../firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  name: "Connexion",
  data() {
    return {
      user:{},
      active: false,
      userId: "",
      currentUser: [],
      displayName: "",
      email: "",
      ui: "",
    };
  },
  mounted() {
    var uiConfig = {
      //signInSuccessUrl: "/",
      signInOptions: [
        {
          provider: auth.GoogleAuthProvider.PROVIDER_ID,
          scopes: ["https://www.googleapis.com/auth/contacts.readonly"],
          customParameters: {
            // Forces account selection even when one account
            // is available.
            prompt: "select_account",
          },
        },
        {
          provider: auth.FacebookAuthProvider.PROVIDER_ID,
          scopes: ["public_profile", "email", "user_likes", "user_friends"],
          customParameters: {
            // Forces password re-entry.
            auth_type: "reauthenticate",
          },
        },
        auth.TwitterAuthProvider.PROVIDER_ID, // Twitter does not support scopes.
        auth.EmailAuthProvider.PROVIDER_ID, // Other providers don't need to be given as object
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      tosUrl: "/termsofservice",
      // Privacy policy url/callback.
      privacyPolicyUrl: function () {
        window.location.assign("/privacypolicy");
      },
    };
    this.ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    this.ui.start("#firebaseui-auth-container", uiConfig);
 
 }
}

</script>
<style lang="scss"></style>
