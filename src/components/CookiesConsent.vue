<template>
 <div id="consent-popup" class="hidden text-center">
     <div class="row">
        <div class="col-md-6 col-sm-12 py-3">
          <p class="mt-5 animate-left">
            Avec votre accord, nous utilisons des cookies ou technologies
            similaires pour stocker et accéder à des informations personnelles
            comme votre visite sur ce site. Vous pouvez retirer votre
            consentement ou vous opposer aux traitements basés sur l'intérêt
            légitime à tout moment en cliquant sur "En savoir plus" ou dans
            notre politique de confidentialité sur ce site.
          </p>
        </div>
        <div class="col-md-6 col-sm-12  py-3">
          <router-link to="/Privacypolicy" exact
            id="notice-learn-more-button"
            class="btn btn-primary mr-2 mb-3"
            aria-label="Configurer vos consentements"
            >
            <span>En savoir plus →</span>
            </router-link>
            <a
            href="/"
            id="accept"
            class="btn btn-success ml-2 mb-3"
            aria-label="Accepter notre traitement des données et fermer"
            type="submit"
            
            >
            <span>Accepter &amp; Fermer</span>
          </a>

          <p class="w3-animate-right mt-4">
            VOUS ACCEPTEZ QUE LES INFORMATIONS DE VOTRE NAVIGATION SUR LE SITE
            SOIENT EXPLOITÉES DANS LE CADRE DE LA DEMANDE DE PROPOSITIONS ET DE
            LA RELATION COMMERCIALE QUI PEUT EN DÉCOULER.
          </p>
        </div>
      </div>
    

          
        </div>
</template>
<script>
export default {
  name:"CookiesConsent",
 data(){
   return{    
   }
 },
  methods:{
  setCookie(cname, cvalue, exdays){
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 },
 getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
 },
 checkCookie() { 
  let user = this.getCookie("jdc_consent");
  if (user != "") {
     document.querySelector('#consent-popup').classList.add('hidden');
  } else {
     setTimeout(() => {
      document.querySelector('#consent-popup').classList.remove('hidden');
        }, 2000);    
      user = 'true'
    if (user != "" && user != null) {
      document.querySelector('#accept').addEventListener('click',()=>{
         this.setCookie("jdc_consent", user, 365);
      })
     
    }
  }
 } 
  
},
mounted(){
  this.checkCookie()
}

}
</script>

<style scoped>
#consent-popup {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 2rem;
   background-color: #000000;
   color:#fff;
   opacity:1;
   z-index: 100;
    transition: opacity 1s ease;
  }
  #consent-popup a{
    color:#ffffff;
  }
  #consent-popup.hidden {
        opacity: 0;
        display:none;
    }
     #consent-popup.active {
        opacity: 1;
        display:block;
    }
   #accept a{
     color:black;
    } 
  .animate-left{
    position:relative;
    animation-name:animateleft;
    animation-duration: 5s;
    animation-timing-function:ease-in-out;
    animation-iteration-count:5s;
    
  }
  .animate-right{
    position:relative;
    animation-name:animateRight;
    animation-duration: 5s;
    animation-timing-function:ease-in-out;
    animation-iteration-count:2s;
    
  }
</style>