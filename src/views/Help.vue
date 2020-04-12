<template>
  <div class="our-help">
    <h1 v-format ="40">{{pageName}}</h1>
    <p> {{pageDescription}} </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quasi
      repellendus delectus voluptate modi veniam illo. Dolores, expedita optio.
      Debitis vero veritatis architecto iste, alias minus amet velit error rem?
    </p>
  </div>
</template>

<script>
export default {
  name: "Help",
   data: function(){
    
    return{
      pageName:'Help',
      pageDescription:'this is Help  Page'
     }
  },
};
</script>
