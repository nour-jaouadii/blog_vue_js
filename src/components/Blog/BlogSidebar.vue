<template>
    <div class="sidebar-widgets">
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
        },     //local component
    }


};
</script>
