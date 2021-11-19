<template>
  <section id="blog">
      <div class="container mt-5" data-aos="zoom-in">
          <h1 class="mb-3" >BLOG</h1>
          <div v-for="blog in blogs" :key="blog.id">
          <div class="row">  
          <div  class="col-md-3">
          <div class="card responImg">    
          <img src="/img/xbanner-01.jpg" :alt="blog.title" >

        </div>
          </div>
         <div class="col-md-9">
          <h2 class="d-inline-block mb-2 text-primary">{{blog.title}}</h2>
          <h5 class="mb-0">{{blog.category}}</h5>
          <div class="mb-1 text-muted">{{new Date(date.seconds)}}</div>
          <p class="card-text mb-auto">{{blog.bodyShortConten}}</p>
           <button type="button" v-b-toggle.collapse-blog class="btn btn-outline-dark mt-3" >Lire la suite...</button>
           <b-collapse  id="collapse-blog" class="mt-2">
        <div>
         <p>{{blog.content}}</p>
        </div>
      </b-collapse>
        </div>      
      </div>
    </div>
          
        </div>
    </section>  
</template>
<script>
import {db ,timestamp} from '../firebase'
export default {
    name:"blog",
    data(){
        return{
          blogs:[],
          blog:{
              title: null,
              category: null,
              bodyShortConten:null,
              content: null,
              Date:timestamp
          },
          date:timestamp
          
              
        }
    },
    component:{        
    },
    methods:{
        getBlog(){
        const blogRef = db.collection('blog').orderBy("title", "desc").limit(2);
            blogRef.get().then((dataBlog)=>{
            dataBlog.docs.forEach((doc) => {
                this.blog = doc.data();
              this.date = this.blog.Date;
            this.blogs.push(this.blog); 
                   
           });
            });
        }

    },
    created(){
        this.getBlog();
    }
}
</script>
<style lang="css" scoped>
#blog{
    position: relative;
    top:150px;
}
.responImg{
   width:200 !important;
   height:150 !important;
}
@media(max-width: 768px){
    #blog{
        padding-top:0px;
    }
}

</style>