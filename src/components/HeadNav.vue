<template>
  <div class="container-fluid">
    <b-navbar toggleable="lg" type="light" class="fixed-top bg-light">
      <b-navbar-brand href="#">
        <img src="/img/logoresize.png" alt="logo" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/home">Accueil</b-nav-item>
          <b-nav-item href="#store" exact> E-Commerce </b-nav-item>
          <b-nav-item href="#blog" exact>Blog</b-nav-item>
          <b-nav-item href="#contact" exact>Contact</b-nav-item>
          <b-nav-item href="#apropos" exact>apropos</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
         
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
                  >{{cart}}</span
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
import {auth } from "../firebase";
export default {
  name: "HeadNav",
  
  data() {
    return { 
      cart:[]    
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
     auth.signOut();
     window.location.reload(true);
    },
  },
 mounted(){
 let catrLeng = JSON.parse(localStorage.getItem("cart")) || [];
 this.cart = catrLeng.length ;
 }
};
</script>
<style lang="css" scoped>
.navbar {
  height: 100px;
  border-bottom: 2px solid #cccccc;
}
  .nav-link {
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bolder;
  color: black;
  font-family: 'Playfair Display', serif;
}
.nav-link:hover {
  color: rgb(219, 180, 50) !important;
}
a {
  color: #ffffff;
}
.topButton{
  position:absolute important;
  
}
</style>
