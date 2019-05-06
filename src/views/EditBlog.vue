<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mt-4">
        <li class="breadcrumb-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/">生活小茶</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">发表博客</li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'EditBlog'
}
</script>

<style scoped>

</style>
