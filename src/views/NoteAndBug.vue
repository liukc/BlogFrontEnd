<template>
  <div class="container">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb mt-4">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">{{navDisplay()}}</li>
      <li class="ml-auto"><router-link tag="button" class="btn btn-outline-success btn-sm" :to="toPath+title">发表博客</router-link></li>
    </ol>
  </nav>
    <div>
      <div class="card mb-2" style="width: 100%;">
        <div class="card-body row">
          <div class="col-4"><img class="card-img-left rounded" width="250" height="200" src="../assets/images/1.jpg"
                                  alt="Card image cap">
          </div>
          <div class="col-5" style="text-align: center">
            <h5 class="card-title">文章标题</h5>
            <p class="card-text">简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述</p>
            <p><a href="#" class="btn btn-primary">查看详情</a></p>
            <span style="font-size: 20px" class="ml-2"><img src="../assets/images/person-2x.png" class="mr-2 mb-1" />admin</span>
            <span class="font-italic ml-3">2019/05/05 22:36:00</span>
          </div>
          <div class="col-3">
            <div class="ml-5">
              <img class="card-img-right rounded" height="74" width="107" src="../assets/images/6.jpg"
                   alt="Card image cap">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramDiary',
  data () {
    return {
      title: '',
      toPath: '/editBlog/'
    }
  },
  methods: {
    navDisplay: function () {
      if (this.$route.params.title === 'note') {
        this.title = 'note'
        return '学习笔记'
      } else {
        this.title = 'bug'
        return '日常bug'
      }
    }
  }
}
</script>

<style scoped>

</style>
