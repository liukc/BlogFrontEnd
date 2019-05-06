<template>
  <div class="container">
    <div class="editor">
      <quill-editor ref="myTextEditor" :options="editorOption" v-model="content" :config="editorOption"></quill-editor>
    </div>
    <div>
      <button type="button" class="btn btn-primary btn-lg btn-block">发表博客</button>
    </div>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor' // 导入quillEditor组件
import 'quill/dist/quill.js'
export default {
  name: 'Editor',
  data () {
    return {
      content: 'this is a simple demo', // 编辑器的内容
      editorOption: {
        placeholder: 'placeholder',
        // 编辑器的配置
        // something config
        theme: 'snow'
      }
    }
  },
  components: {
    quillEditor
  }
}
</script>

<style scoped>

</style>
