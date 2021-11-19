<template>
<section id="store">
    <div class="titleOverview" >
      <h1 class="overview" data-aos="fade-up">PRÉSENTATION DE LA BOUTIQUE EN LIGNE</h1> 
        </div>
      <div class="navbarProduct">
       <b-card no-body >
        <b-tabs card  content-class="mt-3" class="bgdark">
      <b-tab title="Tout les Produits" active >
        <b-card-text> <Products /></b-card-text>
      </b-tab>
      <b-tab title="Vetement Homme" :title-link-class="linkClass(1)">
        <b-card-text > <Men/></b-card-text>
      </b-tab>
       <b-tab title="Vetement Femme" :title-link-class="linkClass(2)">
        <b-card-text> <Women/></b-card-text>
      </b-tab>
       <b-tab title="Bijoux" :title-link-class="linkClass(3)">
        <b-card-text> <Jewelery /></b-card-text>
      </b-tab>
       <b-tab title="Electronics" :title-link-class="linkClass(4)">
        <b-card-text> <Electronic/></b-card-text>
      </b-tab>
        </b-tabs>
      </b-card>  
  </div>
 </section>
</template>
<script>
import Products from "./Products.vue";
import Men from "./Men.vue";
import Women from "./Femmes.vue";
import Jewelery from "./Jewellery.vue";
import Electronic from "./Electronic.vue";
export default {
    name:"MauriBoutique",
     data() {
      return {
        tabIndex: 0,
        
      }
    },
    methods: {
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-secondary']
        }
      }
    },
    components:{
    Products,
    Men,
    Women,
    Jewelery,
    Electronic
    },
    }
</script>
<style lang="css" scoped>
.titleOverview {
  height: 100px;
  padding:10px;
}
  .overview {
  font-family: Poppins-Bold;
  font-size: 1.5rem;
  line-height: 1.1;
  text-transform: uppercase;
}
.bgdark{
    background-color: rgba(98, 95, 95, 0.404);
}
.nav-item a .nav-link{
  color:#ffffff important;
  } 
 
</style>