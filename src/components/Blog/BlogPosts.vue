<template>
  <div class="post-box">
    <div class="post-views">10</div>
    <h3 class="post-title">Blog podst Title</h3>
    <span class="post-date">25-10-2018</span>
    <p class="post-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fuga
      non, consequatur architecto praesentium sapiente illo consequuntur ullam,
      minima tempore deserunt qui itaque voluptate quis, saepe incidunt. Vel,
      cumque rerum?
    </p>
    <div class="row">
      <dic class="col-sm-6">
        <span class="post-author">Post Author</span>
      </dic>
      <dic class="col-sm-6 text-right">
        <class class="post-category  ">Category Name</class>
      </dic>
    </div>
  </div>
</template>

<script>
export default {
  name: "post",
};
</script>

<style lang="scss" scoped>
.post-box {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  text-align: left;
  .post-views {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #4caf50;
    border-radius: 4px;
    padding: 1px 5px;
    color: #fff;
    text-align: center;
    font-weight: bold;
    text-align: center;
    font-weight: bold;
  }
    .post-date {
      display: block;
      padding: 0 0 7px;
      color: #888;
      font-size: 14px;
    }
    .post-content {
      line-height: 1.8;
      color: #666;
    }
    .post-author{

        background: #607D88;
        padding: 6px 10px;
        border-radius:4px ;
        color: #FFF;
    }
   .post-category{
       background: #E91E63;
        padding: 6px 10px;
        border-radius:4px ;
        color: #FFF;
       
   }
}
</style>
