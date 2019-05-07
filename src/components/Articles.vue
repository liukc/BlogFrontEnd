<template>
  <div class="backgroud container">
      <div class="card mb-2" style="width: 100%;" v-for="(blog, index) in blogs" :key="index">
        <div class="card-body row">
          <div class="col-4"><img class="card-img-left rounded" width="250" height="200" :src="blog.image"
                                  alt="Card image cap">
          </div>
          <div class="col-5">
            <h5 class="card-title">{{blog.title}}</h5>
            <p class="card-text">{{blog.description}}</p>
            <p><a href="#" class="btn btn-primary">查看详情</a></p>
            <span style="font-size: 20px" class="ml-2"><img src="../assets/images/person-2x.png" class="mr-2 mb-1"/>{{blog.author}}</span>
            <span class="font-italic ml-3">{{blog.blogTime}}</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Articles',
  data () {
    return {
      blogs: [
        {
          title: '博客标题',
          description: '简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述.',
          author: 'admin',
          blogTime: '2019/05/05 22:36:00',
          image: require('../assets/images/1.jpg')
        },
        {
          title: '博客标题',
          description: '简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述.',
          author: 'admin',
          blogTime: '2019/05/05 22:36:00',
          image: require('../assets/images/1.jpg')
        },
        {
          title: '博客标题',
          description: '简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述.',
          author: 'admin',
          blogTime: '2019/05/05 22:36:00',
          image: require('../assets/images/1.jpg')
        },
        {
          title: '博客标题',
          description: '简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述简要描述.',
          author: 'admin',
          blogTime: '2019/05/05 22:36:00',
          image: require('../assets/images/1.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.backgroud{
  text-align: center;
}
</style>
