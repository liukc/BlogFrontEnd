<template>
    <div class="backgroud row">
      <div class="col-4">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
.backgroud{
  background-image: url("../assets/images/9.jpg");
  width: 1680px;
  height: 730px;
}
</style>
