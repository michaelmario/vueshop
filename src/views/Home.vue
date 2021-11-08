<template>
  <div class="home" ref="content">
    <HelloWorld />
    <Banner  />
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

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Banner,
    Blog,
    Contact,
     
  },
  methods:{
  }
}
</script>
