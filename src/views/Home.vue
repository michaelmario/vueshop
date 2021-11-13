<template>
  <div class="home" ref="content">
    <HelloWorld />
    <Banner  />
    <MauriBoutique />
    <Blog />
    <Contact />
   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '@/components/Banner.vue'
import Blog from '@/components/Blog.vue'
import Contact from '@/components/Contact.vue'
import MauriBoutique from '@/components/MauriBoutique.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Banner,
    Blog,
    Contact,
    MauriBoutique
     
  },
  methods:{
  }
}
</script>
<style>
</style>
