<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mt-4">
        <li class="breadcrumb-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="toPath">{{navDisplay()}}</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">发表博客</li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'EditBlog',
  data () {
    return {
      toPath: ''
    }
  },
  methods: {
    navDisplay: function () {
      if (this.$route.params.title === 'note') {
        this.toPath = '/noteAndBug/note'
        return '学习笔记'
      } else if (this.$route.params.title === 'bug') {
        this.toPath = '/noteAndBug/bug'
        return '日常bug'
      } else if (this.$route.params.title === 'diary') {
        this.toPath = '/programDiary'
        return '程序日记'
      } else {
        this.toPath = '/lifeTea'
        return '生活小茶'
      }
    }
  }
}
</script>

<style scoped>

</style>
