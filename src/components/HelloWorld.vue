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

</style>
