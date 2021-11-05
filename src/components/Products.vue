<template>
  <div class="container">
     <h1>Tous Les Produits</h1>
    <div class="row mt-5" id="1">
      <div class="col-md-4" v-for="product in products" :key="product.id" >
        <div class="card mb-4 product">
          <img
            class="card-img-top productImg"
            :src="product.image"
            :alt="product.title"
          />
          <div class="card-body">
            <h4 class="text-uppercase text-muted">{{ product.category }}</h4>
            <p class="card-title">{{ product.title }}</p>
            <div class="d-flex justify-content-between">
              <p class="fs-5 fw-bolder price">{{ product.price }} Euro</p>
              <b-button @click="displayModal(product)">Buy Now</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <b-modal
        ref="my-modal"
        class="modal-title"
        title="Mauricode-Academy"
        size="lg"
        :header-bg-variant="headerBgVariant"
        :header-text-variant="headerTextVariant"
      >
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <div id="outputCardDetails">
                  <div class="card mb-5 product" id="3">
                    <img
                      class="card-img-top productImg"
                      :src="productCard.image"
                      :alt="productCard.title"
                      style="height: auto"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div id="outputCardBody">
                  <h4 class="text-uppercase text-muted card-text">
                   {{ productCard.category }}
                  </h4>
                  <p class="card-title"> {{ productCard.title }}</p>
                  <p class="description" style="display: block">
                    {{ productCard.description}}
                  </p>
                  <div class="d-flex justify-content-between">
                    <p class="fs-5 fw-bolder price"> {{ productCard.price }} Euro</p>
                    </div>
                </div>
               
                <form id="formModale">
                  <div v-if="productCard.category != 'electronics'">  
                  <div v-if="productCard.category != 'jewelery'">                                                    
                  <div class="mb-3 row">                     
                    <div class="col-sm-2">
                      <label for="inputStateColor" class="form-label fw-bolder"
                        >Color</label
                      >
                    </div>
                    <div class="col-sm-8">
                      <select id="inputStateColor" class="form-select">
                        <option value="red">Red</option>
                        <option value="black">Black</option>
                        <option value="brown">Brown</option>
                        <option value="gray">Gray</option>
                      </select>
                    </div>
                  </div>
                   </div>
                     
                  <div class="mb-3 row">                   
                    <div class="col-sm-2">                      
                      <label for="inputStateSize" class="form-label fw-bolder">
                        Size
                        </label>
                    </div>
                    <div class="col-sm-8">
                      <select id="inputStateSize" class="form-select">
                        <option value="sm">sm</option>
                        <option value="ml">ml</option>
                        <option value="xl">xl</option>
                        <option value="xxx">xxx</option>
                      </select>
                    </div>
                  </div> 
                   </div>                                                 
                    <div class="d-flex ">
                    <button
                      type="button"
                      id="btnNumProductDown"
                      class="btn btn-danger trans-04"
                      @click="decreaseCount()"
                       >
                      <i class="fs-6 bi bi-dash-square"></i>
                    </button>
                    <input
                      class="text-center num-product"
                      type="text"
                      id="numberProduct"
                      name="num-product"
                      v-model="productCard.quantity" />
                    <button
                      type="button"
                      id="btnNumProductUp"
                      class="btn btn-outline-success trans-04"
                       @click="increaseCount()"
                    >
                      <i class="fs-6 bi bi-plus-square"></i>
                    </button>
                  </div>                  
                 
                  <div class="mt-4">
                    <button
                      type="button"
                      class="btn btn-outline-success trans-04"
                      @click="getDataModal(productCard)">
                      Add to cart
                    </button>
                  </div>
                </form>
              
                <div class="mt-3 socilalLink text-center">
                  <ul>
                    <li><i class="fs-3 text-primary bi bi-facebook"></i></li>
                    <li><i class="fs-3 text-primary bi bi-twitter"></i></li>
                    <li><i class="fs-3 text-danger bi bi-instagram"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>       
      </b-modal>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  name: "Products",
  data() {
    return {
      headerBgVariant: 'primary',
      headerTextVariant: 'light',
       count:1,
      products: [],
      product: {
        category: null,
        description: null,
        image: null,
        price: null,
        title: null,
        quantity: null,
        rate: {
          count: null,
          rate: null,
        },
      },
      productCard: {
        category: null,
        description: null,
        image: null,
        price: null,
        title: null,
        quantity: null,
         rate:{
          count: null,
          rate: null,
        },
      },
    };
  },

  methods: {
    displayModal(product) {
      this.productCard = product;
      this.$refs["my-modal"].show();
    },
    getDataModal(productCard){
      this.$refs["my-modal"].hide();
     console.log(productCard);
    },
    decreaseCount(){
     if(this.productCard.quantity != 1 ){
      this.productCard.quantity --;
    }
    
    },
    increaseCount(){
     if(this.productCard.quantity <= 9 ){
      this.productCard.quantity ++;
    }
    }
    
   
  },
  created() {
   
    db.collection("products")
      .get()
      .then((querySnapshot) => {
         querySnapshot.forEach((doc) => {
          let productsData = doc.data();
          let NewproductsData = {...productsData, quantity: this.count};
          this.products.push(NewproductsData);
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  },
};
</script>
<style lang="scss" scoped>
.product {
  padding: 20px;
}
.productImg {
  width: 100%;
  height: 250px;
  overflow: hidden;
}
.card-title {
  height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
}
#numberProduct{
  width:50px;
}
</style>
