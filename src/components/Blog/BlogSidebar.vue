<template>
    <div class="sidebar-widgets"   v-bold >
      {{title | uppercase}}
    </div>
</template>

<script> 
export default {
    data:function(){
        return{
           title :'testing'
        }
    },

    name:'blog_sidebar',
    
    filters: {
        uppercase: function(v){
            return v.toUpperCase();
        },     //local filters
    },
     
    // local directive v-bold 
    directives: {
      bold: {
        bind: function(el) {
        el.style.fontWeight='bold';
      }     
     }
    }

};
</script>
