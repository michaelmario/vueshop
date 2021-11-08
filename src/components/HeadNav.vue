<template>
  <div class="container-fluid">
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="#">
        <img src="/img/logoresize.png" alt="Kitten" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Accueil</b-nav-item>
          <b-nav-item href="/#store" exact> E-Commerce </b-nav-item>
          <b-nav-item href="#blog" exact>Blog</b-nav-item>
          <b-nav-item href="#contact" exact>Contact</b-nav-item>
          <b-nav-item href="#apropos" exact>apropos</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button variant="success" size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
          <div >
            <div @click="open()" class="icon-header-item">
              <span class="dis-block icon-header-item">
                <i class="bi bi-cart-check-fill"></i>
                <span
                  class="
                    fs-6
                    p-1
                    mt-2
                    badge
                    bg-success
                    translate-middle
                    border-light
                    rounded-circle
                  "
                  id="bage"
                  >5</span
                >
              </span>
            </div>
          
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <span>
                <em>Connexion</em>
              </span>
              <span>
                <em></em>
              </span>
            </template>
            <b-dropdown-item @click="openRight">Connexion</b-dropdown-item>
            <b-dropdown-item @click="openRight">Profil</b-dropdown-item>
            <b-dropdown-item @click="signOut">Déconnexion</b-dropdown-item>
          </b-nav-item-dropdown>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Aside />
    <AsideRight />
  </div>
</template>
<script>
import Aside from "@/components/Aside.vue";
import AsideRight from "@/components/AsideRight.vue";
import { FA } from "../firebase";
export default {
  name: "HeadNav",
  data() {
    return {
      user: "",
    };
  },
  components: {
    Aside,
    AsideRight,
  },
  methods: {
    open() {
      document.querySelector(".outer-cart-wrapper").classList.toggle("active");
    },
    openRight() {
      document
        .querySelector(".outer-cart-wrapper-right")
        .classList.toggle("active");
    },
    signOut() {
     FA().signOut();
     window.location.reload(true);
    },
  },
  created() {},
};
</script>
<style lang="css" scoped>
a {
  color: #ffffff;
}
</style>
