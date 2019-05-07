<template>
    <div class="container backBlank">
      <div class="input-group sm-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">账号</span>
        </div>
        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group sm-3 mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default1">密码</span>
        </div>
        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default1">
      </div>
      <div class="mt-4 ml-4">
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label mr-5" for="exampleCheck1">Check me out</label>
          <span class="ml-5"><a href="#">忘记密码?</a></span>
        </div>
       <div class="mt-3">
         <button type="submit" class="btn btn-primary mr-3">登陆</button>
         <span class="ml-5">还没有账号？<router-link to="/register">点击注册</router-link></span>
       </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
.backBlank{
  width: 80%;
  height: 300px;
  margin-top: 100px;
  background: rgba(0,0,0,0.1);
  padding: 70px 30px 0px;
}
</style>
