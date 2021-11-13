<template>
  <div class="add-to-cart">
   
        <button type="button" class="btn btn-success" @click="addToCart()"> Acheter Maintenant </button>
    
  </div>
</template>

<script>
export default {
  name: "add-to-cart",
 /* props: {
    category:String,  
    title: String,
    price: String,
    image: String,
    pId: String,
  },*/

  data(){
      return {
          item :{
          /* productCardCategory: this.category,
            productCardTitle: this.title,
            productCardImage: this.image,
            productCardPrice: this.price,
            productCardId: this.pId,
            productCardQuantity: 1,*/
          }

      }
  },
  methods:{
    addToCart(){
       console.log(this.item)
    }

  }

};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>