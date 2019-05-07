<template>
  <div class="container">
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mt-4">
          <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">程序日记</li>
          <li class="ml-auto"><router-link tag="button" class="btn btn-outline-success btn-sm" to="/editBlog/diary">发表博客</router-link></li>
        </ol>
      </nav>
    </div>
    <div class="block mt-4">
      <el-timeline v-for="(diary, index) in diarys" :key="index">
        <el-timeline-item :timestamp="diary.diaryTime" placement="top">
          <el-card>
            <h4>{{diary.issue}}</h4>
            <p>{{diary.author}}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramDiary',
  data () {
    return {
      diarys: [
        {
          diaryTime: '2018/4/2',
          issue: '更新 Github 模板',
          author: 'admin'
        },
        {
          diaryTime: '2018/4/2',
          issue: '更新 Github 模板',
          author: 'admin'
        },
        {
          diaryTime: '2018/4/2',
          issue: '更新 Github 模板',
          author: 'admin'
        },
        {
          diaryTime: '2018/4/2',
          issue: '更新 Github 模板',
          author: 'admin'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
