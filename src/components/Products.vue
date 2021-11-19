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
              <div class="card-icons d-flex xs12 pt-0" >
                <button class="btn btnStart"  @click="createStar(product)">
                <i class="bi bi-heart-fill"></i>
                    {{start}}
              </button>
             <div class="d-flex startProduct" :id="product.id">
              {{ startCount }} 
               </div>          
            
              </div>
            <h4 class="text-uppercase text-muted">{{ product.category }}</h4>
            <p class="card-title">{{ product.title }}</p>
            <div class="d-flex justify-content-between">
              <p class="fs-5 fw-bolder price">{{ product.price }} Euro</p>
              <b-button variant="success" @click="displayModal(product)">Ajouter au panier</b-button>
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
      oldData:JSON.parse(localStorage.getItem("cart")) || [],
      startCount:'',
       liked:'',
       likevalue:'',
       count:1,
        cardcolors:null,
        cardsize:null,
         searchKey: '',
         star:'',
         btnStart:'',
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
        rating: {
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
    createStar(product){
     let startProduct = document.querySelectorAll('.startProduct');
      let startLength = JSON.parse(localStorage.getItem("start")) || [];       
       this.startCount = startLength.length;     
     let starProduct = {
       "product":product.id,
       "start": this.start
     }    
     startProduct.forEach((star)=>{
      this.btnStart = star.id;      
     if(product.id == this.btnStart ||product.id == startLength.product){       
       let start = document.createElement('i');
     start.className ="bi bi-heart-fill ml-1";
     star.append(start);
     this.oldData.push(starProduct);
     localStorage.setItem('start',JSON.stringify(this.oldData));
     console.log(this.oldData);
           }
     })
    },
    displayModal(product) {
      this.productCard = product;
      this.$refs["my-modal"].show();
    },
    getDataModal(productCard) {
      let newproductCard = {...productCard, colors: this.cardcolors,size:this.cardsize}
      this.$refs["my-modal"].hide();      
      this.oldData.push(newproductCard);
      localStorage.setItem('cart',JSON.stringify(this.oldData));
      window.location.reload(true);       
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
    },
    getrating(rating){
      rating.forEach((rate)=>{
       this.start = rate.rating.rate;
      })
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
          this.getrating(this.products)
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
    
    },
    mounted(){    
       
    
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
.card-icons {
    display: flex;
    align-items:self-start;
    justify-content: space-around;
    height: 40px;
}
.card-icons .like-container input {
    display: none;
}
input:checked + label i {
    color: #fb2626;
    animation: heart 1.3s forwards ease;
}
.card-icons i {
    padding: 3px 5px;
    transition: 0.2s;
    cursor: pointer;
    font-size:1rem;
}
.bi-suit-heart{
font-size:16px;
}

</style>
