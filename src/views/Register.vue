<template>
    <div class="backBlank">
      <form>
      <div class="form-group row">
        <label for="inputaccount3" class="col-sm-3 col-form-label">账号</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="inputaccount3" placeholder="输入账号">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputpassword3" class="col-sm-3 col-form-label">密码</label>
        <div class="col-sm-9">
          <input type="password" class="form-control" id="inputpassword3" placeholder="输入密码">
        </div>
      </div>
      <div class="form-group row">
        <label for="repeatpassword3" class="col-sm-3 col-form-label">确认密码</label>
        <div class="col-sm-9">
          <input type="password" class="form-control" id="repeatpassword3" placeholder="确认密码">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
        <div class="col-sm-9">
          <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-lg btn-block mt-5">注册</button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style scoped>
  .backBlank{
    width: 90%;
    height: 400px;
    margin-top: 100px;
    background: rgba(0,0,0,0.1);
    padding: 80px 30px 0px;
  }
</style>
