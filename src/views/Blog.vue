<template>
  <div class="our-blog">

    <h1>{{pageName}}</h1>
    <p> {{pageDescription}} </p>
   <div class="container">
      <div class="row">
        <div class="col-md-8">
           <div class="posts-area">
              <BlogPosts />

           </div>
        </div>
         <div class="col-md">
          <div class="sidebar">
            <BlogSidebar />
          </div>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import BlogPosts from '@/components/Blog/BlogPosts.vue';
import BlogSidebar from '@/components/Blog/BlogSidebar.vue';

export default {
  
   data: function(){
    
    return{
      pageName:'Blog',
      pageDescription:'this is Help  Page'
     };
  },
  name: "Blog",
  components: {
    BlogPosts,
    BlogSidebar
  },
};
</script>
