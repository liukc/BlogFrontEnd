<template>
  <div class="container mt-4 ml-4">
    <div class="card" style="width: 60%">
      <div class="card-header">
        修改用户信息
      </div>
      <el-upload
        class="avatar-uploader"
        action="#"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="card-img-top">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div class="card-body">
        <div class="text-center">
          <div class="input-group input-group-sm mb-3" v-for="n in 8" :key="n">
            <div class="input-group-prepend">
              <span class="input-group-text">{{name[n-1]}}</span>
            </div>
            <input type="text" class="form-control" aria-label="Small" :placeholder=info[n-1]>
          </div>
          <a href="#" class="btn btn-primary">确认修改</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlterInfo',
  data () {
    return {
      info: ['昵称要好听', '13433622222', '学生', '12/12', '男', '中国', '广东', '潮州'],
      name: ['昵称', '电话号码', '职业', '生日', '性别', '国家', '省份', '城市'],
      imageUrl: require('../../assets/images/1.jpg')
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
