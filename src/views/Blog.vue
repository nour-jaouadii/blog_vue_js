<template>
  <div class="our-blog">

    <h1 v-format.orange ="60" >{{pageName}}</h1>
    <p> {{pageDescription}} </p>
   <div class="container">
      <div class="row">
        <div class="col-md-8">
           <div class="posts-area">
              <BlogPosts v-for="post in posts" :key="post.id" 
              :views="post.views" 
              :title="post.title"
              :date= "post.date"
              :author='post.author'
              :content= "post.content"
              :category= 'post.category'

              />
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
import JsonPosts from "../json/blog_posts.json"

export default {
  
   data: function(){
    
    return{
      pageName:'Blog',
      pageDescription:'this is Help  Page',
      posts:JsonPosts
     };
  },
  name: "Blog",
  components: {
    BlogPosts,
    BlogSidebar,
  },
};
</script>
