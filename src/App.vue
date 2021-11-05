<template>
  <div id="app">
      <Header />       
    <router-view/>
    <GoogleMap />
   <Footer/>
  </div>
</template>
<script>
import Header from "./components/HeadNav.vue"
import Footer from "./components/Footer.vue"
import GoogleMap from '@/components/GoogleMap.vue'
export default {
  name: "App",
  components:{
   Footer,
   Header,
   GoogleMap
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  color: #2c3e50;
}

.container-menu-desktop {
  height: auto;
  width: 100%;
  position: relative;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}
.wrap-menu-desktop {
  position: fixed;
  z-index: 1100;
  background-color: transparent;
  width: 100%;
  height: 84px;
  top: 40px;
  left: 0;
  transition: height 0.3s, background-color 0.3s;
}
.limiter-menu-desktop {
  height: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
}
.navbar {
  height: 100px;
  border-bottom: 2px solid #cccccc;
}
  .nav-link {
  font-size: 1rem;
  text-transform: uppercase;
  color: black !important;
}
.nav-link:hover {
  color: rgb(219, 180, 50) !important;
}
.wrap-icon-header {
      padding: 20px;
      margin-left:13%;
    }
.icon-header-item {
  position: relative;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
  margin-left: 30px;
}
.badge{
  position:absolute;
  top:-18px;  
  left:21px; 
  color:#ffffff;
}
.navbarProduct{
  border-top:2px solid #cccccc;
  margin:10px 0px;
  padding-top:10px;
  border-bottom:2px solid #cccccc;  
}
.navbarProduct .overviewProduct li{
  display: inline-block;
  list-style: none;
  margin-right:10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
@media (max-width: 991px) {
  .wrap-header-mobile {
    display: flex;
  }
}
 @media (max-width: 768px) {
    .mobileContainer{
      margin-top:0px;
    }
    .navbar-collapse {
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
    background-color: #000;
    color: #ffffff;
    z-index: 100;
}
    .bgBlack {
      background-color: black;
    }
    .nav-link {
      color: #ffffff !important;
    }
    .navLink {
      color: black !important;
      font-family: Poppins-Regular;
       font-size: 15px;
      line-height: 1.2;
      margin-right:10px;
      margin-bottom: 10px;
    }
    .wrap-icon-header {
      background-color: rgba(0, 0, 0, 0.664);
      color: #ffffff;
      margin-top: -10px;
      padding: 20px;     
    }
    .modal {
      top:20%;
    }
    .modal-dialog{
      max-width:90% !important;
      height:auto;
     }
     .modal-title {
       font-size: 15px;
       line-height:7;
     }
     .titleOverview {
      height: 322px;
     }
    #firstSection {
      padding-top:0rem;
      height:0px;
    }
 }
</style>
