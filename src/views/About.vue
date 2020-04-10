<template>
  <div class="about">
       <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
    <h1>{{pageName}}</h1>
    <p> {{pageDescription}} </p>
  </div>
</template>

<script>
export default {
  name:'About',
  data: function(){
      
    return{
      pageName:'About us',
      pageDescription:'this is About us Page'
     }
  },
}
</script>
