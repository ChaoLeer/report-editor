<template>
  <el-container class="bdr-layout">
    <el-header>
      <h1>报表生成 <small>【A4尺寸210mm×297mm】</small></h1>
    </el-header>
    <el-container>
      <el-aside class="bdr-layout__aside" width="200px">
        <div class="bdr-taglist">
          <el-tag
            v-for="(tag,idx) in tagList"
            :key="idx"
            size="mini">{{tag.text}}</el-tag>
        </div>
      </el-aside>
      <el-main>
        <bdr-editor></bdr-editor>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import BdrEditor from './Editor'
export default {
  name: 'HelloWorld',
  components: {
    BdrEditor
  },
  data () {
    return {
      tagList: [{
        text: 'row'
      }, {
        text: 'label'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
