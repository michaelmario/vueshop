<template>
  <div>
    <b-carousel
      id="carousel-1"
     :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      class="carousel"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Achetez et vendez de tout "
        text="Publiez facilement votre annonce et partagez-la sur n'importe quel réseau social."
        img-src="/img/xslide-01.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="/img/xslide-02.jpg">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="/img/xslide-03.jpg"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="/img/xslide-01.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      </b-carousel>    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
<style scoped lang="css">
.carousel{
   text-shadow: 1px 1px 2px #333;
   
    font-size:30px;
}
.carousel-caption {
    position: absolute;
    right: 15%;
    bottom: 50px;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px; 
    color:#000000 !important;
    text-align: center;
}
</style>