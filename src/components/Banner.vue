<template>
  <div class="container-fluid mobileContainer">
    <div class="pre-load">
      <div class="container">       
        <div class="row" id="banner">
          <div class="col-md-4">
            <div class="card cardProduct" 
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">
              <div class="img__wrap">
                <a href="product.html" class="text-decoration-none text-black">
                  <div class="producCardbody">
                    <p class="fw-bolder fs-3 p-1">Women</p>
                    <p class="fs-5 pt-2">Spring 2018</p>
                  </div>

                  <img
                    class="cardProductImg"
                    src="/img/xbanner-01.jpg"
                    alt="IMG-BANNER"
                  />
                  <div class="img__description">
                    <p class="fw-bolder fs-3 animateLeft">Shop Now</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card cardProduct">
              <div class="img__wrap">
                <a href="product.html" class="text-decoration-none text-black">
                  <div class="producCardbody">
                    <p class="fw-bolder fs-3 p-1">Men</p>
                    <p class="fs-5 pt-2">Spring 2018</p>
                  </div>
                  <img
                    class="cardProductImg"
                    src="/img/xbanner-02.jpg"
                    alt="IMG-BANNER"
                  />
                  <div class="img__description">
                    <p class="fw-bolder fs-3 animateLeft">Make your choise !</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card cardProduct"
            data-aos="fade-down" data-aos-easing="ease-in-sine">
              <div class="img__wrap">
                <a href="product.html" class="text-decoration-none text-black">
                  <div class="producCardbody">
                    <p class="fw-bolder fs-3">Accessories</p>
                    <p class="fs-5 pt-2">New Trend</p>
                  </div>
                  <img
                    class="cardProductImg"
                    src="/img/xbanner-03.jpg"
                    alt="IMG-BANNER"
                  />
                  <div class="img__description">
                    <p class="fw-bolder fs-3 animateLeft">
                      Is better to order now
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>       
    </div>
    </div>
</template>
<script>
export default {
  name: "Banner",
  data(){
    return{
     
    }

  },
  components: {
  
  },
  methods:{
     
  },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#store{
    padding-top:50px;
}
#banner {
  margin-top: 2rem !important;
  justify-content: center;
}

.navbarProduct {
  border-top: 2px solid #cccccc;
  margin: 10px 0px;
  padding-top: 10px;
  border-bottom: 2px solid #cccccc;
}
.navbarProduct .overviewProduct li {
  display: inline-block;
  list-style: none;
  margin: 12px;
}

.productContainer{
  min-height:250px;
  position:relative;
}

.displayNone {
  display: none;
}
.displayBlock{
  display: block;
}
.card-group {
  position: relative;
  overflow: hidden;
}
.cardProduct {
  width: 100%;
  height: auto;
  padding: 0px 0px;
 
}
.producCardbody {
  position: relative;
  top: 50px;
  left: 20px;
  line-height: 15px;
  z-index: 4;
  color: #000 !important;
}

.cardProductImg {
  z-index: 1;
  width: 100%;
  height: auto;
}
.img__wrap {
  position: relative;
}

.img__description {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(29, 106, 154, 0.72);
  visibility: hidden;
  opacity: 0;
  z-index: 10;
  /* transition effect. not necessary */
  transition: opacity 0.2s, visibility 0.2s;
}
.img__description p {
  color: #ffffff !important;
  font-size: 1.5rem;
  z-index: 12;
  padding-top: 150px;
  text-align: center;
}

.img__wrap:hover .img__description {
  visibility: visible;
  opacity: 1;
  height: 44vh;
}
@media (max-width: 768px){
  .container{
   padding-left: 0px !important;
   padding-right: 0px !important;
  }
  .productContainer{
    margin-top:0px;
  }
  .titleOverview {
  height:auto;
  margin-top:0rem;
}
  .product{
    padding: 0px !important;
  }
  h4{ 
    font-size:20px !important;
  }
  .card-body{
    padding:0px !important;
  }
#banner {
    margin-top: 12rem !important;
}
.cardProduct {
   margin-bottom:10px;
}
#store{
    padding-top:0px;
}

}
</style>
