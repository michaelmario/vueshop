<template>
  <div class="bg-white rounded formGroup">
    <div class="p-5">
      <div class="mb-2">
        <h3 class="text-center fw-boler mb-2">Connexion</h3>
        <div class="text-center">
          <input
            v-model.trim="loginForm.email"
            type="text"
            placeholder="email"
            class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700"
          />
        </div>
      </div>
      <div class="mb-2">
        <div class="text-center">
          <input
            v-model.trim="loginForm.password"
            type="password"
            placeholder="password"
            class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700"
          />
        </div>
      </div>
      <div class="my-4">
        <slot name="message" />
      </div>
      <div class="text-center mt-8">
        <button
          @click="login()"
          class="
            btn btn-outline-success            
            py-2"
        >
         S'IDENTIFIER
        </button>
      </div>
      <div class="my-4">
        <div class="d-flex">
          <a
            @click="$emit('toggle-signup')"
            class="
              btn btn-success
              text-sm text-center text-blue-600
              hover:text-blue-dark
              mr-1
            "
            >Créer un compte</a
          >
          <a
            @click="$emit('toggle-password-reset')"
            class="
              btn btn-outline-dark
              text-center text-blue-600
              hover:text-blue-dark
              mr-1
            "
            href="#"
            >Mot de passe oublié?</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginForm",
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$emit("do-login", {
        email: this.loginForm.email,
        password: this.loginForm.password,
      });
    },
  },
};
</script>
<style>
.formGroup {
  z-index:100;
  position: relative;
}
</style>
