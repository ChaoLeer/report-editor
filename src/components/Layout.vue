<template>
  <el-container class="bdr-layout">
    <el-header>
      <h1>报表生成 <small>【A4尺寸210mm×297mm】</small></h1>
    </el-header>
    <el-container>
      <el-main>
        <bdr-editor></bdr-editor>
      </el-main>
      <el-aside class="bdr-layout__aside" width="400px">
        <bdr-layout-aside></bdr-layout-aside>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
import BdrEditor from './Editor'
import BdrLayoutAside from './LayoutAside'
export default {
  name: 'HelloWorld',
  components: {
    BdrEditor,
    BdrLayoutAside
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
