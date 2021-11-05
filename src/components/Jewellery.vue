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
              <b-button @click="displayModal(jewelProduct)">Buy Now</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <b-modal
        ref="men-modal"
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
                        <option value="15">15</option>
                        <option value="25">25</option>
                        <option value="40">40</option>
                        <option value="45">45</option>
                      </select>
                    </div>
                  </div>
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
                  <div class="d-flex justify-content-center">
                    <button
                      type="button"
                      id="btnNumProductDown"
                      class="btn btn-outline-danger trans-04"
                    >
                      <i class="fs-6 bi bi-dash-square"></i>
                    </button>
                    <input
                      class="text-center num-product"
                      type="text"
                      id="numberProduct"
                      name="num-product"
                    />
                    <button
                      type="button"
                      id="btnNumProductUp"
                      class="btn btn-outline-success trans-04"
                    >
                      <i class="fs-6 bi bi-plus-square"></i>
                    </button>
                  </div>
                  <div class="text-center mt-2">
                    <button
                      type="submit"
                      class="btn btn-outline-success trans-04"
                    >
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
  name:"jewellery",
  data() {
    return {
      headerBgVariant: 'primary',
      headerTextVariant: 'light',
      jewelProducts: [],
     jewelProduct: {
        category: null,
        description: null,
        image: null,
        price: null,
        title: null,
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
  },
  created() {
    db.collection("products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let MenCategory = doc.data().category;
            if(MenCategory === "jewelery"){
            this.jewelProducts.push(doc.data());
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
