<template>
  <div class="outer-cart-wrapper-right">
    <div class="cart-wrapper">
      <button class="btn btn-outline-danger carty--close" @click="close()">
        <span>Fermer</span>
      </button>
      <section class="mt-3">
        <div class="pt-3">
            <password-reset
            v-if="showPasswordReset"
            :status="resetStatus"
            @do-close="togglePasswordReset()"
            @do-reset="resetPassword"
          ></password-reset>
          <login-form
            v-show="showLoginForm"
            :style="{ display: showPasswordReset ? 'none' : 'block' }"
            @do-login="login"
            @toggle-password-reset="togglePasswordReset"
            @toggle-signup="toggleSignUp"
          >
            <p
              v-if="getInformation && getInformation.signUp"
              slot="message"
              class="px-2 bg-green-400 rounded"
            >
              {{ getInformation.signUp.message }}
            </p>
            <p
              v-if="getError && getError.login"
              slot="message"
              class="px-2 bg-red-400 rounded"
            >
              Invalid email/password
            </p>
          </login-form>
          <sign-up-form
            v-if="showSignUpForm"
            :status="signUpStatus"
            @do-signup="signUp"
            @do-cancel="toggleLogin"
          />
        </div>
      </section>
      <section class="mt-3">
        <div class="pt-3">
          <div class="container">
            <div class="devContainer">
              <b-avatar variant="info" :src="user.photoUrl"></b-avatar>
              <div class="bodyDescription">
                <h2 class="fw-bolder">{{ user.displayName }}</h2>
                <strong>Contact: {{ user.email }}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import loginForm from "@/components/LoginForm";
import SignUpForm from "@/components/SignUpForm";
import PasswordReset from "@/components/PasswordReset";

export default {
  name: "AsideRight",
  components: {
    PasswordReset,
    loginForm,
    SignUpForm,
  },
  data() {
    return {
      showLoginForm: true,
      showSignUpForm: false,
      showPasswordReset: false,
      signUpStatus: {},
      resetStatus: {},
      user:{}
     
    };
  },
  computed: {
    ...mapGetters(["getError", "getInformation"]),
  },
  methods: {
    close() {
      document
        .querySelector(".outer-cart-wrapper-right")
        .classList.remove("active");
    },
    toggleLogin() {
      this.showLoginForm = true;
      this.showSignUpForm = false;
      this.showPasswordReset = false;
    },
    toggleSignUp() {
      this.showLoginForm = false;
      this.showSignUpForm = true;
      this.showPasswordReset = false;
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset;
    },
    async login(data) {
      await this.$store.dispatch("login", {
        email: data.email,
        password: data.password,
      });
    },
    async signUp(data) {
      await this.$store.dispatch("signup", {
        nickname: data.nickname,
        name: data.name,
        email: data.email,
        password: data.password,
      });
      this.signUpStatus = this.getError?.signUp || this.getInformation?.signUp;
    },
    async resetPassword(data) {
      await this.$store.dispatch("resetPassword", { email: data.email });
      this.resetStatus =
        this.getError?.resetPassword || this.getInformation?.resetPassword;
    },
  },
  watch: {
    getInformation(newInformation) {
      newInformation?.signUp && this.toggleLogin();
    },
  }
}
</script>
<style scoped>
.outer-cart-wrapper-right {
   background-size: cover; 
    background-image:url('./../assets/visuals/umbrellas.jpg');
    box-shadow: 0 0 40px rgb(0 0 0 / 80%);
  overflow-x: hidden;
  overflow-y: auto;
  width: 0rem;
  max-width: 52rem;
  position: fixed;
  right: 200;
  top: 0;
  height: 100%;
  z-index: 1100;
  scrollbar-width: none;
  transition: all 100ms cubic-bezier(0.25, 0.25, 0.84, 0.325);
  z-index:10;
}
.active {
  width: 40%;
}
.cart-wrapper {
  color: #282828;
  font-family: Helvetica, Arial, "Lucida Grande", sans-serif;
  font-size: 16px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  width: 90%;
  display: block;
  opacity: 1;  
   z-index:6;
  
}
.cart-wrapper .headline {
  font-weight: 700;
  font-size: 2rem;
  line-height: 1;
  margin: 0;
  padding: 1rem 2rem;
}
.cart-wrapper .btn.carty--close {
  display: block;
  width: auto;
  opacity: 1;
  position: absolute;
  z-index: 2000;
  transition: opacity, 0.2s, linear;
  top: 10em;
  right: 1em;
}
.cart-wrapper .carty--empty {
  margin: 6rem 0px;
  text-align: center;
}
.carty--loading {
  margin: 35vh auto 0;
  height: 50px;
  width: 50px;
}
.th-removed {
  display: none !important;
}
@media (max-width: 768px) {
  .outer-cart-wrapper-right {
    position: absolute;
    right: 90;
  }
  .active {
    width: 90%;
  }
  .cart-wrapper .headline {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
    margin: 0;
    padding: 1rem 2rem;
  }
}
</style>
