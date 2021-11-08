<template>
  <div class="container">
     <h1>Les Bijoux</h1>
    <div class="row mt-5" id="1">
      <div class="col-md-4" v-for="jewelProduct in jewelProducts" :key="jewelProduct.id">
        <div class="card mb-4 product">
          <img
            class="card-img-top productImg"
            :src="jewelProduct.image"
            :alt="jewelProduct.title"
          />
          <div class="card-body">
            <h4 class="text-uppercase text-muted">{{ jewelProduct.category }}</h4>
            <p class="card-title">{{ jewelProduct.title }}</p>
            <div class="d-flex justify-content-between">
              <p class="fs-5 fw-bolder price">{{ jewelProduct.price }} Euro</p>
              <b-button variant="success" @click="displayModal(jewelProduct)">Acheter</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <b-modal
        ref="jewel-modal"
        class="modal-title"
        title="Mauricode-Academy"
        size="lg"
        :header-bg-variant="headerBgVariant"
        :header-text-variant="headerTextVariant"
        hide-footer
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
                      :src="jewelProductCard.image"
                      :alt="jewelProductCard.title"
                      style="height: auto"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div id="outputCardBody">
                  <h4 class="text-uppercase text-muted card-text">
                   {{ jewelProductCard.category }}
                  </h4>
                  <p class="card-title"> {{ jewelProductCard.title }}</p>
                  <p class="description" style="display: block">
                    {{ jewelProductCard.description}}
                  </p>
                  <div class="d-flex justify-content-between">
                    <p class="fs-5 fw-bolder price"> {{ jewelProductCard.price }} Euro</p>
                    </div>
                </div>
                <form id="formModale">
                  <div class="mb-3 row">
                    <div class="col-sm-2">
                      <label for="inputStateSize" class="form-label fw-bolder"
                        >Size</label
                      >
                    </div>
                    <div class="col-sm-8">
                      <select id="inputStateSize" class="form-select">
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        </select>
                    </div>
                  </div>
                  <div class="mb-3 row">
                        </div>
                  <div class="d-flex">
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
                      v-model="jewelProductCard.quantity"
                    />
                    <button
                      type="button"
                      id="btnNumProductUp"
                      class="btn btn-success ml-1 trans-04"
                       @click="increaseCount()"
                    >
                      <i class="fs-6 bi bi-plus-square"></i>
                    </button>
                  </div>
                  <div class="mt-2">
                    <button
                      type="submit"
                      class="btn btn-success trans-04"
                    >
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
  name:"jewellery",
  data() {
    return {
      headerBgVariant: 'primary',
      headerTextVariant: 'light',
      count:1,
      jewelProducts: [],
     jewelProduct: {
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
     jewelProductCard: {
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
    };
  },

  methods: {
    displayModal(jewelProduct) {
      this.jewelProductCard = jewelProduct;
      this.$refs["jewel-modal"].show();
    },
     decreaseCount(){
     if(this.jewelProductCard.quantity != 1 ){
      this.jewelProductCard.quantity --;
    }
    
    },
    increaseCount(){
     if(this.jewelProductCard.quantity <= 9 ){
      this.jewelProductCard.quantity ++;
    }
    }
  },
  created() {
    db.collection("products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let Category = doc.data().category;
            if(Category === "jewelery"){
              let jewelProductsData = doc.data();
             let NewjewelData = {...jewelProductsData, quantity: this.count};
          this.jewelProducts.push(NewjewelData);
              }
         
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
</style>
