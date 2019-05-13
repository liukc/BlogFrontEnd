<template>
<div class="container mt-4 ml-4">
  <div class="card" style="width: 60%">
    <div class="card-header">
      个人信息
    </div>
    <img class="card-img-top" src="../../assets/images/1.jpg" alt="Card image cap">
    <div class="card-body">
      <div class="text-center">
        <p><span class="font-weight-light">账号</span>：123456</p>
        <p><span class="font-weight-light">昵称</span>：昵称要好听</p>
        <p><span class="font-weight-light">手机</span>：12345678910</p>
        <p><span class="font-weight-light">职业</span>：学生</p>
        <p><span class="font-weight-light">个人</span>：12 男 巨蟹座</p>
        <p><span class="font-weight-light">所在地</span>：广东 潮州 江东</p>
        <router-link to="/userInfo/alterInformation" class="btn btn-primary">修改信息</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Information'
}
</script>

<style scoped>

</style>
