<template>
  <div class="outer-cart-wrapper">
     <div class="carty--loading th-removed">
      <div id="rect-1" class="rect"></div>
      <div id="rect-2" class="rect"></div>
      <div id="rect-3" class="rect"></div>
      <span class="visuallyhidden">Loading Cart Contents</span>
    </div>
    <div class="cart-wrapper">
      <button class="btn btn-outline-success carty--close" @click="close()">
        <span>Fermer</span>
      </button>
      <div >
       
      </div>
      <p class="headline">Votre Cart</p>
            <!-- This is the outer container for each item in the cart -->
      <section class="carty--empty">
        <h2>Votre cart est vide</h2>
        <p>
          <a href="#" class="carty--close"  @click="close()"
            >Continuer vos achats</a
          >
        </p>
      </section>
    </div>
  </div>
</template>
<script>

export default {
    name:'Aside',
    components:{    
    },
     data(){
        return{
          active: false,
        }
     },
        methods:{
        close(){
           document.querySelector('.outer-cart-wrapper').classList.remove('active');
        }
        }
    
}
</script>
<style scoped>
.outer-cart-wrapper {
    background: #fff;
    box-shadow: 0 0 40px rgb(0 0 0 / 80%);
    overflow-x: hidden;
    overflow-y: auto;
    width: 0rem;
    max-width: 52rem;
    position:fixed;
    right: 0;
    top: 0;
    height: 100%;
    z-index: 1100;
    scrollbar-width: none;
    transition: all 100ms cubic-bezier(0.25,0.25,0.84,0.325);
}
.active {
    width: 100%;
}
.cart-wrapper {
    color: #282828;
    font-family: Helvetica,Arial,"Lucida Grande",sans-serif;
    font-size: 16px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    width: 90%;
    display: block;
    opacity: 1
}
.cart-wrapper .headline {
    font-weight: 700;
    font-size: 2rem;
    line-height:1;
    margin: 0;
    padding: 1rem 2rem;
}
.cart-wrapper .btn.carty--close {  
    display: block;   
    width:auto;
    opacity: 1;
    position: absolute;
    z-index: 2000;
    transition: opacity,0.2s,linear;
     top: 1em;
    right:1em;
}
.cart-wrapper .carty--empty {
    margin: 6rem  0px;
    text-align: center;
}
.carty--loading {
    margin: 35vh auto 0;
    height: 50px;
    width: 50px;
}
.th-removed {
    display: none!important;
}
@media (max-width:768px){
  .outer-cart-wrapper{
    position:absolute;
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
