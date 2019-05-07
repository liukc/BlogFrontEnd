<template>
    <div>
      <div class="card text-center mb-4">
        <div class="card-header">
          站内公告
        </div>
        <div class="card-body">
          <h5 class="card-title">个人网站正在建设中</h5>
          <p class="card-text">个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中</p>
        </div>
        <div class="card-footer text-muted">
          2 days ago
        </div>
      </div>
      <div class="card text-center mb-4">
        <div class="card-header">
          热门标签
        </div>
        <div class="card-body" style="padding: 30px 90px 30px">
          <span class="mr-2 badge" :class="LabelsType[index]" v-for="(blogLabel, index) in blogLabels" :key="index">{{blogLabel}}</span>
        </div>
      </div>
      <div class="card text-center mb-4">
        <div class="card-header">
          微信公众号
        </div>
        <div class="card-body">
          <img class="card-img" src="../assets/images/qrcode.jpg"
               alt="Card image cap">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Right-items',
  data () {
    return {
      LabelsType: [
        'badge-primary',
        'badge-secondary',
        'badge-success',
        'badge-danger',
        'badge-warning',
        'badge-info',
        'badge-light',
        'badge-dark'
      ],
      blogLabels: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark'
      ]
    }
  }
}
</script>

<style scoped>

</style>
