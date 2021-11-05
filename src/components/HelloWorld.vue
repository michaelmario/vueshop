<template>
  <div id="firstSection">
         <Carousel />         
        </div>
</template>

<script>
import Carousel from './carousel.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    Carousel,
   
  }
 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@media(max-width:768px){
 #firstSection {
      padding-top:0rem;
      height: 100px;
    }
}
</style>
