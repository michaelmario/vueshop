<template>
  <div class="container">
     <input v-model="searchKey" id="search" type="search" placeholder="Search..." autocomplete="off">
    <span v-if="searchKey && filteredList.length >= 1 ">
      {{filteredList.length}} résult<span v-if="filteredList.length >= 2">s</span>
    </span>
     <h1>Tous Les Produits</h1>       
    <div class="row mt-5" id="1">
      <div class="col-md-4" v-for="product in filteredList" :key="product.id" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
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
              <b-button variant="success" @click="displayModal(product)">Acheter</b-button>
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
         hide-footer>
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
                  <div class="mb-3 row" >                     
                    <div class="col-sm-2">
                      <label for="inputStateColor" class="form-label fw-bolder"
                        >Color</label
                      >
                    </div>
                    <div class="col-sm-8">                      
                      <select id="inputStateColor" class="form-select" v-model="cardcolors">
                       <option v-for="color in productCard.colors" :key="color" :value="color">{{color}}</option>                                                  
                      </select>
                      </div>
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
                      <select id="inputStateSize" class="form-select" v-model="cardsize">
                        <option v-for="size in productCard.size" :key="size" :value="size">{{size}}</option>                       
                        </select>
                    </div>
                  </div> 
                                                                   
                    <div class="d-flex ">
                    <button
                      type="button"
                      id="btnNumProductDown"
                      class="btn btn-danger mr-1 trans-04"
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
                      class="btn btn-success ml-1 trans-04"
                       @click="increaseCount()"
                    >
                      <i class="fs-6 bi bi-plus-square"></i>
                    </button>
                  </div>                  
                 
                  <div class="mt-4">
                    <button
                      type="button"
                      class="btn btn-success trans-04"
                      @click="getDataModal(productCard)">
                      Acheter Maintenant
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
      colors:['black','red','gray'],
      headerBgVariant: 'primary',
      headerTextVariant: 'light',
       count:1,
        cardcolors:null,
        cardsize:null,
         searchKey: '',
      products: [],
      product: {
        category: null,
        description: null,
        image: null,
        price: null,
        title: null,
        colors:{},
        size:{},
        quantity: null,
        realPrice: null,
        id:null,
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
        id:null,
        quantity: null,
       colors:null,
       size:null,
        realPrice:0,
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
    getDataModal(productCard) {
      let newproductCard = {...productCard, colors: this.cardcolors,size:this.cardsize}
      let oldData = JSON.parse(localStorage.getItem("cart")) || [];    
      this.$refs["my-modal"].hide();      
      oldData.push(newproductCard);
      localStorage.setItem('cart',JSON.stringify(oldData));
      window.location.reload(true);
       console.log(newproductCard);
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
          let NewproductsData = {...productsData, quantity: this.count,realPrice:0};
          this.products.push(NewproductsData);
           });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  },
    computed:{
      filteredList() {
      return this.products.filter((product) => {
      return  product.category.toLowerCase().includes(this.searchKey.toLowerCase());
       });
    },
    }
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

</style>
