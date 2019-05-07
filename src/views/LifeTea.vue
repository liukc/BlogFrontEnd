<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mt-4">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">生活小茶</li>
        <li class="ml-auto"><router-link tag="button" class="btn btn-outline-success btn-sm" to="/editBlog/lifeTea">发表博客</router-link></li>
      </ol>
    </nav>
    <div>
      <img src="../assets/images/8.jpg" alt="小茶" class="img-thumbnail">
    </div>
  </div>
</template>

<script>
export default {
  name: 'LifeTea'
}
</script>

<style scoped>

</style>
