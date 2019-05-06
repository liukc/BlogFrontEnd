<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light row">
        <a class="navbar-brand h1 col-2" href="#">刘楷川个人博客</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse col-10" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/programDiary">程序日记</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/lifeTea">生活小茶</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/noteAndBug?note">学习笔记</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/noteAndBug?bug">日常bug</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <ul class="navbar-nav mr-2">
          <li class="nav-item">
            <a class="nav-link" href="#">登陆</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">注册</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
