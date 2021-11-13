<template>
  <div class="outer-cart-wrapper-right">
    <div class="cart-wrapper">
      <button class="btn btn-outline-danger carty--close" @click="close()">
        <span>Fermer</span>
      </button>
      <section class="mt-3" v-if="!user">
        <div class="pt-3">
          <Connexion />
        </div>
      </section>
      <section class="mt-3" v-if="user">
        <div class="pt-3">
          <div class="container">
            <div class="devContainer ">
            <b-avatar variant="info" :src="user.photoURL"></b-avatar>
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
import Connexion from "@/components/Connexion.vue";
import { FA } from "../firebase";
export default {
  name: "AsideRight",
  components: {
    Connexion,
  },
  data() {
    return {
      active: false,
      user: "",
    };
  },
  methods: {
    close() {
      document
        .querySelector(".outer-cart-wrapper-right")
        .classList.remove("active");
    },
  },
  mounted() {
    FA().onAuthStateChanged((userdata) => {
      this.user = userdata;
    });
  },
};
</script>
<style scoped>
.outer-cart-wrapper-right {
  background: #fff;
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
  top: 1em;
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
